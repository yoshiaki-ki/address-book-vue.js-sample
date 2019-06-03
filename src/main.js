import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLI-3QHBpPPcTrSywuLnLsW7COGg6WKpM",
  authDomain: "my-address-5edfb.firebaseapp.com",
  databaseURL: "https://my-address-5edfb.firebaseio.com",
  projectId: "my-address-5edfb",
  storageBucket: "",
  messagingSenderId: "731459898801",
  appId: "1:731459898801:web:19f04d42a7a16d95"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
