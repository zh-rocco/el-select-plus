<template>
  <el-container id="app">
    <el-header height="auto">
      <h1 class="header">
        <div>
          支持多字段模糊搜索的
          <a class="link"
             href="http://element-cn.eleme.io/#/zh-CN/component/select"
             rel="nofollow me noopener noreferrer"
             target="_blank"
             title="element-ui">el-select</a>
        </div>
        <github-icon url="https://github.com/zh-rocco/el-fuzzy-select"></github-icon>
      </h1>
    </el-header>

    <el-main>
      <div class="center">
        <el-fuzzy-select v-model="model"
                         :full-list="characters"
                         :fuzzy-options="fuzzyOptions"
                         @change="handleChange"
                         placeholder="尝试输入：卫庄/weizhuang"
                         size="small"
                         clearable>
          <template slot-scope="{ filtered }">
            <el-option v-for="character in filtered"
                       :key="character.value"
                       :label="character.label"
                       :value="character.value"></el-option>
          </template>
        </el-fuzzy-select>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import GithubIcon from './GithubIcon';

export default {
  name: 'App',

  components: { GithubIcon },

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

  methods: {
    handleChange(value) {
      console.log('change:', value);
    },
  },
};
</script>

<style lang="less">
#app {
  margin: 0 auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.center {
  text-align: center;
}

.mt-l {
  margin-top: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.link {
  color: #409eff;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
}
</style>
