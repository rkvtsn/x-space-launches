import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'views.main',
    component: () => import('../views/Main.vue'),
    meta: {
      title: 'Главная'
    }
  },
  {
    path: '/history/:type?',
    name: 'views.history',
    component: () => import('../views/History.vue'),
    props: true,
    meta: {
      title: 'История'
    }
  },
  {
    path: '*',
    name: 'views.errors.404',
    component: () => import('../views/errors/404.vue'),
    meta: {
      title: 'Ошибка 404 - страница не найдена'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
