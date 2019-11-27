import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '../store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    // name: 'home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'all',
        component: () => import('../views/articles/All.vue'),
      },
      {
        path: '/popular',
        name: 'popular',
        component: () => import('../views/articles/Popular.vue')
      },
      {
        path: '/newest',
        name: 'newest',
        component: () => import('../views/articles/Newest.vue')
      },
      {
        path: '/articles/:id',
        name: 'article-detail',
        props: true,
        component: () => import('../components/ArticleDetail.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/admin/Login.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/admin/Admin.vue'),
    beforeEnter(to, from, next) {
      let adminAccess = store.getters.adminAccess;
      if (adminAccess) {
        next();
      } else {
        next({
          name: 'login',
        });
      }
    },
    children: [
      {
        path: '/admin',
        name: 'general',
        component: () => import('../views/admin/General.vue'),
      },
      {
        path: '/admin/settings',
        name: 'settings',
        component: () => import('../views/admin/Settings.vue'),
      },
      {
        path: '/admin/editor',
        name: 'editor',
        component: () => import('../views/admin/Editor.vue'),
      },
      {
        path: '/admin/editor/:id',
        name: 'article-item-detail',
        props: true,
        component: () => import('../components/admin/ArticleItemDetail.vue')
      },
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
