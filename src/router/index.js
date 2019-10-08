import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Params from '@/components/params'
import Hi1 from '@/components/Hi1'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      alias: '/home1'
    },
    {
      path: '/params/:newsId(\\d+)/:newsTitle',
      component: Params,
      // beforeEnter: (to, from, next) => {
      //   console.log(to);
      //   console.log(from);
      //   next({ path: '/' })
      // }
    },
    {
      path: '/goHome',
      redirect: '/'
    },
    {
      path: '/hi1',
      component: Hi1,
      alias: '/jspang'
    },
    {
      path: '*',
      component: Error
    }
  ]
})
