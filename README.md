# el-fuzzy-select

> A fuzzy search component based on element-ui and fuse.js

## Demo

[Try it out](https://zh-rocco.github.io/el-fuzzy-select/)

## Requirements

- [`Vue.js 2.x`](https://cn.vuejs.org/)

## Installation

```bash
yarn add el-fuzzy-select
```

## Usage

### Registration

main.js

```javascript
import Vue from 'vue';
import App from './App.vue';
import FuzzySelect from 'el-fuzzy-select';

Vue.use(FuzzySelect);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
```

### Example

```vue
<template>
  <el-fuzzy-select
    v-model="model"
    :full-list="characters"
    :fuzzy-options="fuzzyOptions"
    size="small"
    clearable
  >
    <template slot-scope="{ filtered }">
      <el-option
        v-for="character in filtered"
        :key="character.value"
        :label="character.label"
        :value="character.value"
      ></el-option>
    </template>
  </el-fuzzy-select>
</template>

<script>
export default {
  data() {
    return {
      model: '',
      characters: [
        { label: '荆天明', value: 'jingtianming' },
        { label: '高月', value: 'gaoyue' },
        { label: '项少羽', value: 'xiangshaoyu' },
        { label: '石兰', value: 'shilan' },
        { label: '盖聂', value: 'genie' },
        { label: '卫庄', value: 'weizhuang' },
        { label: '高渐离', value: 'gaojianli' },
        { label: '钟离眛', value: 'zhonglimei' },
        { label: '扶苏', value: 'fusu' },
        { label: '白凤', value: 'baifeng' },
      ],
      fuzzyOptions: { keys: ['label', 'value'] },
    };
  },
};
</script>
```

## Development

```bash
yarn serve
```

## Build

```bash
yarn build:lib
```

## License

MIT © [zh-rocco](https://github.com/zh-rocco)
