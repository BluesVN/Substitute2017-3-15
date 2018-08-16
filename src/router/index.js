//
import Vue from 'vue'
import Router from 'vue-router'
import hot from '@/pages/lists/hot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/home'),
      children: [
        {
          path: '/',
          name: 'hot',
          component: hot
        }
      ]
    },
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
    },
    {
      path: '/findpass',
      name: 'findpass',
      component: () => import('@/pages/findpass/FindPass')
    },
    {
      path: '/findpass/two',
      name: 'findpassTwo',
      component: () => import('@/pages/findpass/components/FindTwo')
    },
    {
      path: '/findpass/end',
      name: 'findpassEnd',
      component: () => import('@/pages/findpass/components/FindEnd')
    }
  ]
})
