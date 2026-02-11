import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'products', component: () => import('pages/ProductsPage.vue') },
      { path: 'corporate', component: () => import('pages/CorporatePage.vue') },
      { path: 'contact', component: () => import('pages/ContactPage.vue') },
    ],
  },

  // Hata sayfası (404)
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;