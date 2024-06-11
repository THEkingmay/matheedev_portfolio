import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import C from '../views/CView.vue'
import Java from '../views/JavaView.vue'
import Web from '../views/WebView.vue'
import selectproject from '../views/selectproject.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/C',
      name: 'C',
      component: C
    },
    {
      path: '/Java',
      name: 'Java',
      component: Java
    },
    {
      path: '/Web',
      name: 'Web',
      component: Web
    },
    {
      path: '/project/:lang/:index',
      name: 'project',
      component: selectproject
    },
  ]
})

export default router
