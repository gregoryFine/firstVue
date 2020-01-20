import HelloWorld from '@/components/HelloWorld'
import first from '@/pages/first'
import Login from '@/pages/Login'
import Index from '@/pages/Index'
import pdfpre from '@/pages/pdfpre'
import pdfpre1 from '@/pages/pdfpre1'
import testone from '@/pages/testone'
import testtwo from '@/pages/testtwo'
import marqueetest from '@/pages/marqueetest'
import treetest from '@/pages/treetest'


export default {
  // routes: [
  //   {
  //     path: '/',
  //     component: Login
  //   },
  //   {
  //     path:'/first',
  //     name:'first',
  //     component: first
  //   },
  //   {
  //     path:'/index',
  //     component: Index
  //   },
  //   {
  //     path:'/pdfpre',
  //     component: pdfpre
  //   },
  //   {
  //     path:'/pdfpre1',
  //     component: pdfpre1
  //   },
  // ]


  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path:'/',
      component: Index,
      name: 'index',
      redirect:'/first',
      children : [
        {
          path:'first',
          name:'first',
          component: first
        },
        {
          path:'pdfpre',
          component: pdfpre
        },
        {
          path:'pdfpre1',
          component: pdfpre1
        },
        {
          path:'testone',
          component: testone
        },
        {
          path:'testtwo',
          component: testtwo
        },
        {
          path:'marqueetest',
          component: marqueetest
        },
        {
          path:'treetest',
          component:treetest
        },
          
          

      ]
    }
  ]
}
