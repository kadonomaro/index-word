import Vue from 'vue';
import Vuex from 'vuex';
import { db, storage } from '../main';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [],
    settings: {
      daysBefore: 7
    }
  },
  mutations: {
    updateArticles(state, article) {
      state.articles.push(article);
    },
    increasePopularity(state, id) {
      const article = state.articles.find(article => article.id === id);
      db.collection('articles').doc(id).update({
        popularity: ++article.popularity
      });
    }
  },
  actions: {
    async getArticles(state) {
      this.state.articles.length = 0;
      await db.collection('articles')
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            const article = {
              id: doc.id,
              title: doc.data().title,
              text: doc.data().text,
              date: new Date(doc.data().date.seconds * 1000).toLocaleString(),
              popularity: doc.data().popularity,
              image: ''
            };
            getImages(article, article.id);
            state.commit('updateArticles', article);
          });
        });
    },
  },
  getters: {
    allArticles(state) {
      return state.articles;
    },
    popularArticles(state) {
      return state.articles.filter((article) => {
        return article.popularity >= 10;
      });
    },
    newestArticles(state) {
      const date = new Date();
      date.setDate(date.getDate() - state.settings.daysBefore);
      return state.articles.filter((article) => {
        return article.date > date.toLocaleString();
      });
    }
  },
});


function getImages(article, id) {
  storage.ref().child(`${id}/image.jpg`).getDownloadURL()
    .then((url) => {
      article.image = url;
    })
    .catch((err) => {
      console.warn(err.code);
      article.image = 'https://via.placeholder.com/400x200';
    });
}
