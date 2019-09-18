import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
// import VueRouterMiddleware from 'vue-router-middleware'

Vue.use(Router)
// Vue.use(VueRouterMiddleware, { Router })

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About'),
      children: [
        {
          path: 'test',
          name: 'test',
          component: () => import('../views/test1')
        },
        {
          path: 'test2',
          name: 'test2',
          component: () => import('../views/test2')
        }
      ]
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import('../views/NotFound')
    },
    {
      path: '/require-auth',
      name: 'require-auth',
      component: () => import('../views/comp')
    },
    {
      path: '/Capture',
      name: 'Capture',
      component: () => import('../views/Capture')
    }
  ]
})
