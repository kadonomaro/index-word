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
      paginationPageSize: 8
    },
    auth: {
      hasAccess: false,
      error: ''
    }
  },
  mutations: {
    CHANGE_ERROR_CODE(state, code) {
      state.auth.error = code;
    },
    CHANGE_AUTH_STATUS(state, status) {
      state.auth.hasAccess = status;
    },

    ADD_NEW_ARTICLE(state, article) {
      state.articles.unshift(article);
    },
    UPDATE_ARTICLES(state, articles) {
      state.articles = articles;
    },
    DELETE_ARTICLE(state, index) {
      state.articles.splice(index, 1);
    },

    UPDATE_SETTINGS(state, settings) {
      state.settings = settings;
    },
  },
  actions: {
    async getArticles({ commit }) {
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
							tags: doc.data().tags || [],
              isActive: doc.data().isActive
            };
            getImages(article, article.id);
            articles.unshift(article);
          });
        });
      commit('UPDATE_ARTICLES', articles);
		},

    createArticle(state, [article, image]) {
      db.collection('articles').add({
        url: article.url,
        title: article.title,
        text: article.text,
        date: firebase.firestore.Timestamp.fromDate(article.date),
        popularity: article.popularity,
        isActive: article.isActive,
				comments: article.comments,
				tags: article.tags || []
      }).then((doc) => {
        if (image) {
          uploadImage(image, doc.id);
        }
        article.id = doc.id;
        state.commit('ADD_NEW_ARTICLE', article);
      }).catch((error) => {
        console.log('Error creating new article', error);
      });
		},

    updateArticle(state, [id, article]) {
      db.collection('articles').doc(id).update({
        url: article.url,
        title: article.title,
        text: article.text,
        date: firebase.firestore.Timestamp.fromDate(article.date),
        popularity: article.popularity,
        isActive: article.isActive,
				comments: article.comments,
				tags: article.tags
      });
		},

    deleteArticle(state, id) {
      db.collection('articles')
        .doc(id)
        .delete()
        .then(() => {
          deleteImage(id);
          const index = this.state.articles.findIndex((article) => article.id === id);
          state.commit('DELETE_ARTICLE', index);

        }).catch((error) => {
          console.log('Error deleting article', error);
        });
    },

    updateComments(state, [id, comment]) {
      const article = this.state.articles.find(article => article.id === id);
      comment.date = firebase.firestore.Timestamp.fromDate(comment.date);
      article.comments.unshift(comment);
      setTimeout(() => {
        db.collection('articles').doc(id).update({
          comments: article.comments
        });
      }, 100);
    },

    increasePopularity(state, id) {
      const article = this.state.articles.find(article => article.id === id);
      db.collection('articles').doc(id).update({
        popularity: ++article.popularity
      });
    },

    async getSettings({ commit }) {
      await db.collection('settings')
        .doc('general')
        .get()
        .then(doc => {
          const settings = {
            daysBefore: doc.data().daysBefore,
            articlePopularityLimit: doc.data().articlePopularityLimit,
            paginationPageSize: doc.data().paginationPageSize
          };
					commit('UPDATE_SETTINGS', settings);

        });
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

    async login({ commit }, [email, password]) {
      try {
        await auth.signInWithEmailAndPassword(email, password);
        auth.onAuthStateChanged(user => {
          if (user) {
            commit('CHANGE_AUTH_STATUS', true);
          } else {
            commit('CHANGE_AUTH_STATUS', false);
          }
        });
      } catch (err) {
        commit('CHANGE_ERROR_CODE', '');
        setTimeout(() => {
          commit('CHANGE_ERROR_CODE', err.message);
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
		relatedArticles(state) {
			return (tags, id) => {
				const articles = [...state.articles];
				return articles.filter(article => {
					return article.tags.some(tag => tags.includes(tag)) && article.id !== id;
				}).splice(0, 3);
			}
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
		getArticlesByTag(state) {
			return (tag) => {
				return state.articles.filter(article => article.tags.includes(tag))
			}
		},
    getSettings(state) {
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
