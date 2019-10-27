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
      article.popularity++;
      db.collection('articles').doc(id).set({
        popularity: article.popularity
      }, {
        merge: true
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

  },
});
