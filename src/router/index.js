// Imports
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/home/Index.vue'),
      children: [
        {
          path: '',
          name: 'Главная',
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: 'about',
          name: 'О нас',
          component: () => import('@/views/about/Index.vue'),
        },
        {
          path: 'services',
          name: 'Услуги',
          component: () => import('@/views/services/Index.vue'),
        },
        {
          path: 'contacts',
          name: 'Контакты',
          component: () => import('@/views/contacts/Index.vue'),
        },
        {
          path: 'reservation',
          name: 'Забронировать',
          component: () => import('@/views/reservation/Index.vue'),
        },
      ],
    },

  ],
})

export default router
