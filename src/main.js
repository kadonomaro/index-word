import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Paginate from 'vuejs-paginate';
import CKEditor from '@ckeditor/ckeditor5-vue';
import './registerServiceWorker';
import './common.scss';

import EscapeDirective from '@/directives/escape.directive';

Vue.config.productionTip = false;
Vue.component('paginate', Paginate);
Vue.directive('escape', EscapeDirective);
Vue.use(CKEditor);

const firebaseDevConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: '1:664834727086:web:a7dd48b4f891b8e38c213f',
};

const firebaseProductionConfig = {
  apiKey: "AIzaSyAbYgWAnwQQr-9Rmg70V7wjTJ16t8ljzWk",
  authDomain: "index-word.firebaseapp.com",
  databaseURL: "https://index-word.firebaseio.com",
  projectId: "index-word",
  storageBucket: "index-word.appspot.com",
  messagingSenderId: "664834727086",
  appId: '1:664834727086:web:a7dd48b4f891b8e38c213f',
};

const firebaseConfig = process.env.NODE_ENV === 'production' ? firebaseProductionConfig : firebaseDevConfig;

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
export { db, storage, auth };


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
