import FuzzySelect from './fuzzy-select';

const installer = {
  install(Vue) {
    Vue.component('el-fuzzy-select', FuzzySelect);
  },
};

if (typeof window === 'object' && window.Vue) {
  window.Vue.use(installer);
}

export default installer;
