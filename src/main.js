// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Vuex from 'vuex';
import router from './router';
import firebase from 'firebase';
import store from '@/store';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;
Vue.use(Vuex);

if (!firebase.apps.length) {
  var config = {
    apiKey: "AIzaSyBnOFCOwwUQcIiRi2UNcfXEL_L33zg04B4",
    authDomain: "amiibo-ce7b4.firebaseapp.com",
    databaseURL: "https://amiibo-ce7b4.firebaseio.com",
    projectId: "amiibo-ce7b4",
    storageBucket: "amiibo-ce7b4.appspot.com",
    messagingSenderId: "813046227223"
  };

  firebase.initializeApp(config);
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
