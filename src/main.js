import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import * as VueGoogleMaps from "vue2-google-maps";


Vue.config.productionTip = false


Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB6jwPxV3LECf2LsU7Ee3vVtzrYuBNgdag",
    libraries: "places" // necessary for places input
  }
});
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
