import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const importComponentFunctionFromView = (fileName: string) => {
  return import(`../views/${fileName}.vue`)
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => importComponentFunctionFromView('HomeView'),
    meta: {
      layout: 'DefaultLayout',
    },
  },
  {
    path: '/counter',
    name: 'Counter',
    meta: {
      layout: 'DefaultLayout',
    },
    component: () => importComponentFunctionFromView('CounterView'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: {
      layout: 'NoneLayout',
    },
    component: () => importComponentFunctionFromView('NotFoundView'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
