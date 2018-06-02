// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import firebase from 'firebase'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)

Vue.config.productionTip = false

let app;
var config = {
  apiKey: "AIzaSyCIYR-2TQc2-PSyMv41S0COdalIWxsiOcg",
  authDomain: "vue-js-auth-3fe9b.firebaseapp.com",
  databaseURL: "https://vue-js-auth-3fe9b.firebaseio.com",
  projectId: "vue-js-auth-3fe9b",
  storageBucket: "",
  messagingSenderId: "998480258749"
};
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      components: { App },
      template: '<App/>',
      router
    })
  }
});