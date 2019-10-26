import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import * as firebase from "firebase";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyAFrujE2RhiNTN5Gw3oMICHsfovZuTHnFo",
  authDomain: "index-word.firebaseapp.com",
  databaseURL: "https://index-word.firebaseio.com",
  projectId: "index-word",
  storageBucket: "index-word.appspot.com",
  messagingSenderId: "664834727086",
  appId: "1:664834727086:web:a7dd48b4f891b8e38c213f"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
