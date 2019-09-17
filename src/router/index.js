import HelloWorld from '@/components/HelloWorld'
import first from '@/pages/first'

export default {
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/first',
      name:'first',
      component: first
    }
  ]
}
