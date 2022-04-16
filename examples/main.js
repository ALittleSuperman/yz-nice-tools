import Vue from 'vue'
import App from './App.vue'
import OpenInDefaultBrowser from '../packages/index'

Vue.config.productionTip = false
Vue.use(OpenInDefaultBrowser)
new Vue({
  render: h => h(App)
}).$mount('#app')
