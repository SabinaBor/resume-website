import Vue from 'vue'
import VueRouter from 'vue-router'
import { Trans } from '@/plugins/translation'

function load(component) {
  return () => import(`@/components/${component}.vue`)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/:locale',
    component: {
      template: "<router-view></router-view>"
    },
    beforeEnter: Trans.routeMiddleware,
    children: [
      {
        path: '',
        name: 'MainPage',
        component: load('MainPage')
      }
    ]
  },
  {
    path: '*',
    redirect() {
      return Trans.defaultLocale;
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
