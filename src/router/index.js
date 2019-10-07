import HelloWorld from '@/components/HelloWorld'
import first from '@/pages/first'
import Login from '@/pages/Login'
import Index from '@/pages/Index'
import pdfpre from '@/pages/pdfpre'
import pdfpre1 from '@/pages/pdfpre1'


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
    },
    {
      path:'/pdfpre',
      component: pdfpre
    },
    {
      path:'/pdfpre1',
      component: pdfpre1
    },
  ]
}
