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
      articlePopularityLimit: null,
      paginationPageSize: 3
    },
    auth: {
      hasAccess: false,
      error: ''
    }
  },
  mutations: {

    changeErrorCode(state, code) {
      state.auth.error = code;
    },
    changeAuthStatus(state, status) {
      state.auth.hasAccess = status;
    },

    updateArticles(state, articles) {
      state.articles = articles;
    },
    addNewArticle(state, article) {
      state.articles.unshift(article);
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
      article.comments.unshift(comment);
      setTimeout(() => {
        db.collection('articles').doc(id).update({
          comments: article.comments
        });
      }, 100);
    },

    updateArticle(state, [id, article]) {
      db.collection('articles').doc(id).update({
        url: article.url,
        title: article.title,
        text: article.text,
        date: firebase.firestore.Timestamp.fromDate(article.date),
        popularity: article.popularity,
        isActive: article.isActive,
        comments: article.comments
      });
    },
    deleteArticle(state, index) {
      state.articles.splice(index, 1);
    }
  },
  actions: {
    async getArticles(state) {
      const articles = [];
      this.state.articles.length = 0;
      await db.collection('articles')
        .orderBy('date')
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            const article = {
              id: doc.id,
              url: doc.data().url,
              title: doc.data().title,
              text: doc.data().text,
              date: doc.data().date.toDate(),
              popularity: doc.data().popularity,
              image: '',
              comments: doc.data().comments || [],
              isActive: doc.data().isActive
            };
            getImages(article, article.id);
            articles.unshift(article);
          });
        });
      state.commit('updateArticles', articles);
    },
    createArticle(state, [article, image]) {
      db.collection('articles').add({
        url: article.url,
        title: article.title,
        text: article.text,
        date: firebase.firestore.Timestamp.fromDate(article.date),
        popularity: article.popularity,
        isActive: article.isActive,
        comments: article.comments
      }).then((doc) => {
        if (image) {
          uploadImage(image, doc.id);
        }
        article.id = doc.id;
        state.commit('addNewArticle', article);
      }).catch((error) => {
        console.log('Error creating new article', error);
      });
    },
    deleteArticle(state, id) {
      db.collection('articles')
        .doc(id)
        .delete()
        .then(() => {
          console.log('success delete article');
          deleteImage(id);
          const articleIndex = this.state.articles.findIndex((article) => article.id === id);
          state.commit('deleteArticle', articleIndex);

        }).catch((error) => {
          console.log('Error deleting article', error);
        });
    },
    async getSettings(state) {
      await db.collection('settings')
        .doc('general')
        .get()
        .then(doc => {
          const settings = {
            daysBefore: doc.data().daysBefore,
            articlePopularityLimit: doc.data().articlePopularityLimit,
            paginationPageSize: doc.data().paginationPageSize
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
        state.commit('changeErrorCode', '');
        setTimeout(() => {
          state.commit('changeErrorCode', err.message);
        }, 100);
      }
    },

    uploadImage(state, [image, id]) {
      uploadImage(image, id);
    }
  },
  getters: {
    errorCode(state) {
      return state.auth.error;
    },
    adminAccess(state) {
      return state.auth.hasAccess;
    },
    allArticles(state) {
      return state.articles;
    },
    activeArticles(state) {
      return state.articles.filter((article) => article.isActive);
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
    articlesTitle(state) {
      return state.articles.map((article) => {
        return {
          id: article.id,
          title: article.title
        };
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

function uploadImage(image, id) {
  storage.ref().child(`preview-images/${id}.jpg`)
    .put(image)
    .then((snapshot) => {
      console.log(snapshot, 'success');
    });
}

function deleteImage(id) {
  storage.ref().child(`preview-images/${id}.jpg`)
    .delete()
    .then(() => {
      console.log('success delete image');
    }).catch((error) => {
      console.log('Error deleting image');
    });
}
