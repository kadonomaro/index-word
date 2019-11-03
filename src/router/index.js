import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

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
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/admin/Admin.vue'),
    children: [
      {
        path: '/admin/settings',
        name: 'all',
        component: () => import('../views/admin/Settings.vue'),
      },
      {
        path: '/admin/editor',
        name: 'popular',
        component: () => import('../views/admin/Editor.vue')
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
