<template>
  <el-select v-model="localValue"
             v-bind="limitedProps"
             v-on="$listeners"
             @visible-change="handleVisibleChange">
    <slot v-bind:filtered="filteredList"></slot>
  </el-select>
</template>

<script>
import Fuse from 'fuse.js';

function isArray(a) {
  return Object.prototype.toString.call(a) === '[object Array]';
}

function valueEquals(a, b) {
  // see: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
  if (a === b) return true;
  if (!(a instanceof Array)) return false;
  if (!(b instanceof Array)) return false;
  if (a.length !== b.length) return false;
  for (let i = 0; i !== a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

export default {
  name: 'fuzzy-select',
  props: {
    fullList: { type: Array, default: () => [] },
    fuzzyOptions: { type: Object, default: () => ({}) },
  },

  data() {
    return {
      localValue: null,
      filteredList: [],
    };
  },

  computed: {
    limitedProps() {
      return Object.assign({}, this.$attrs, {
        filterable: true,
        remote: true,
        remoteMethod: this.filter,
      });
    },
  },

  watch: {
    value(val) {
      this.localValue = val;
    },

    localValue(newVal, oldVal) {
      if (!valueEquals(newVal, oldVal)) {
        this.$emit('input', newVal);
      }
    },

    fullList: {
      handler(val) {
        if (isArray(val)) {
          this.instanceFuse();
          this.filteredList = val;
        }
      },
      immediate: true,
    },

    fuzzyOptions: {
      handler(val) {
        if (val) {
          this.instanceFuse();
        }
      },
      deep: true,
    },
  },

  methods: {
    handleVisibleChange(value) {
      if (!this.localValue) {
        this.filteredList = this.fullList;
      }
    },

    instanceFuse() {
      this.$_fuse = new Fuse(this.fullList, this.fuzzyOptions);
    },

    filter(val) {
      if (val) {
        this.filteredList = this.$_fuse.search(val);
      } else {
        this.filteredList = this.fullList;
      }
    },
  },
};
</script>
