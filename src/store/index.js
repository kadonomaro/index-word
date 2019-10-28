import Vue from 'vue';
import Vuex from 'vuex';
import db from '../main';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [],
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
            };
            state.commit('updateArticles', article);
          });
        });
    },
  },
  getters: {
    popularArticles(state) {
      return state.articles.filter((article) => {
        return article.popularity >= 10;
      });
    },
    newestArticles(state) {
      const date = new Date(Date.now() - 604800000);
      return state.articles.filter((article) => {
        // console.log(article.date);
        // console.log(date.toLocaleString());
        return article.date > date.toLocaleString();
      });
    }
  },
});
