import Vue from 'vue';
import Vuex from 'vuex';
import { db, storage, auth } from '../main';
import firebase from 'firebase/app';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [],
    settings: {
      daysBefore: null,
      articlePopularityLimit: null
    },
    auth: {
      hasAccess: false
    }
  },
  mutations: {
    changeAuthStatus(state, status) {
      state.auth.hasAccess = status;
    },

    updateArticles(state, articles) {
      state.articles = articles;
    },

    updateSettings(state, settings) {
      state.settings = settings;
    },
    uploadSettings(state, payload) {
      for (const key in payload) {
        if (payload.hasOwnProperty(key)) {
          db.collection('settings').doc('general').update({
            [key]: payload[key]
          });
        }
      }
    },

    increasePopularity(state, id) {
      const article = state.articles.find(article => article.id === id);
      db.collection('articles').doc(id).update({
        popularity: ++article.popularity
      });
    },

    updateComments(state, [id, comment]) {
      const article = state.articles.find(article => article.id === id);
      comment.date = firebase.firestore.Timestamp.fromDate(comment.date);
      article.comments.push(comment);
      setTimeout(() => {
        db.collection('articles').doc(id).update({
          comments: article.comments
        });
      }, 100);
    }
  },
  actions: {
    async getArticles(state) {
      const articles = [];
      this.state.articles.length = 0;
      await db.collection('articles')
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            const article = {
              id: doc.id,
              title: doc.data().title,
              text: doc.data().text,
              date: doc.data().date.toDate(),
              popularity: doc.data().popularity,
              image: '',
              comments: doc.data().comments || []
            };
            getImages(article, article.id);
            articles.push(article);
          });
        });
      state.commit('updateArticles', articles);
    },
    async getSettings(state) {
      await db.collection('settings')
        .doc('general')
        .get()
        .then(doc => {
          const settings = {
            daysBefore: doc.data().daysBefore,
            articlePopularityLimit: doc.data().articlePopularityLimit
          };
          this.commit('updateSettings', settings);
        });
    },
    async login(state, [email, password]) {
      try {
        await auth.signInWithEmailAndPassword(email, password);
        auth.onAuthStateChanged(user => {
          if (user) {
            state.commit('changeAuthStatus', true);
          } else {
            state.commit('changeAuthStatus', false);
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  getters: {
    adminAccess(state) {
      return state.auth.hasAccess;
    },
    allArticles(state) {
      return state.articles;
    },
    popularArticles(state) {
      return state.articles.filter((article) => {
        return article.popularity >= state.settings.articlePopularityLimit;
      });
    },
    newestArticles(state) {
      const date = new Date();
      date.setDate(date.getDate() - state.settings.daysBefore);
      return state.articles.filter((article) => {
        return article.date.getTime() >= date.getTime();
      });
    },
    getArticleById(state) {
      return (id) => {
        return state.articles.find(article => article.id === id);
      };
    },
    settings(state) {
      return state.settings;
    }
  },
});


function getImages(article, id) {
  storage.ref().child(`preview-images/${id}.jpg`).getDownloadURL()
    .then((url) => {
      article.image = url;
    })
    .catch((err) => {
      console.warn(err.code);
      article.image = 'https://via.placeholder.com/400x200';
    });
}


function createNewSettings(settings) {

}
