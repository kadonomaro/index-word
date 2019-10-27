import firebase from 'firebase/app';
import 'firebase/firestore';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

// import Article from '@/components/Article.vue';

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGE_SENDER_ID,
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
