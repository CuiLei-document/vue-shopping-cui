import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/css/base.css'
import './components/swiper/swiper'
import store from './store/index'
import toast from './components/content/toast/index'
import fastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import 'assets/icon/icon.js'
import { eventBus } from './eventBus/eventBus'

Vue.use(toast)
Vue.use(VueLazyload)

Vue.prototype.$eventBus = eventBus



Vue.config.productionTip = false

// 解决移动端点击延迟300ms 的问题
fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
