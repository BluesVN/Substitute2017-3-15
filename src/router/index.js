//
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: () => import('@/pages/home/Home')
    // },
    {
      path: '/jobdetail',
      name: 'JobDetail',
      component: () => import('@/pages/jobdetail/JobDetail')
    },
    {
      path: '/cir',
      name: 'Cir',
      component: () => import('@/pages/cir/Cir')
    },
    {
      path: '/shoucang',
      neme: 'Collection',
      component: () => import('@/pages/shoucang/Collection')
    },
    {
      path: '/test',
      name: 'Test',
      component: () => import('@/pages/test/Test')
    }
  ]
})
