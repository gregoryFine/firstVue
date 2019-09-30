import HelloWorld from '@/components/HelloWorld'
import first from '@/pages/first'
import Login from '@/pages/Login'
import Index from '@/pages/Index'

export default {
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path:'/first',
      name:'first',
      component: first
    },
    {
      path:'/index',
      component: Index
    }
  ]
}
