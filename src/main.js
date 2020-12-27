import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import i18n from "./i18n";

Vue.config.productionTip = false

Vue.use(Vuetify)

new Vue({
  i18n,
  vuetify : new Vuetify(),
  render: h => h(App),
}).$mount('#app')
