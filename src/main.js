import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementUI from 'element-ui'
import echarts from 'echarts'
import china from 'echarts/map/json/china.json'
echarts.registerMap('china', china)
Vue.prototype.$echarts = echarts;
Vue.use(elementUI);

Vue.config.productionTip = false
import Http from './utils/Http';
Vue.prototype.$http = new Http();

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
