import Vue from 'vue';
import Vuex from 'vuex';
import db from '@/main';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [],
  },
  mutations: {
    updateArticles(state, article) {
      state.articles.push(article);
    },
  },
  actions: {
    async getArticles(state) {
      await db.collection('articles')
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            const article = {
              id: doc.id,
              title: doc.data().title,
              text: doc.data().text,
              date: new Date(doc.data().date.seconds * 1000).toLocaleString(),
            };
            state.commit('updateArticles', article);
          });
        });
    },
  },
  getters: {

  },
});
