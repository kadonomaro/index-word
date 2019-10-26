import firebase from 'firebase/app';
import 'firebase/firestore';


import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';


Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: 'AIzaSyAFrujE2RhiNTN5Gw3oMICHsfovZuTHnFo',
  authDomain: 'index-word.firebaseapp.com',
  databaseURL: 'https://index-word.firebaseio.com',
  projectId: 'index-word',
  storageBucket: 'index-word.appspot.com',
  messagingSenderId: '664834727086',
  appId: '1:664834727086:web:a7dd48b4f891b8e38c213f',
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
