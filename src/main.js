import Vue from 'vue'
import App from './App.vue'
import { MdButton, MdIcon, MdSwitch, MdLayout, MdCard, MdEmptyState, MdField } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdButton)
Vue.use(MdIcon)
Vue.use(MdSwitch)
Vue.use(MdLayout)
Vue.use(MdCard)
Vue.use(MdEmptyState)
Vue.use(MdField)





Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
