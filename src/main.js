import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/css/base.css'
import './components/swiper/swiper'

import { eventBus } from './eventBus/eventBus'

Vue.prototype.$eventBus = eventBus



Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
