import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
// import VueTuicalendar from '@lkmadushan/vue-tuicalendar'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
// import 'tui-calendar/dist/tui-calendar.min.css'

// Vue.use(VueTuicalendar);

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
