import Vue from 'vue';
import App from './App.vue';
import ELEMENT from 'element-ui';
import FuzzySelect from '../lib/index';

Vue.config.productionTip = false;

Vue.use(ELEMENT);
Vue.use(FuzzySelect);

new Vue({
  render: function(h) {
    return h(App);
  },
}).$mount('#app');
