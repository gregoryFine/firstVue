export const routeNameArr = [
    {
        id : '1',
        name : '首页',
        path:'/first'
    },
    {
        id:'2-1',
        name:'pdf预览',
        path:'/pdfpre1'
    },
    {
        id:'3-1',
        name:'测试管理1',
        path:'/testone'
    },
    {
        id:'5-1',
        name:'测试管理2',
        path:'/testtwo'
    }
]

export const menu =  [
    { menuId: "1", name: "首页", path: "/first" },
    {
      menuId: "2",
      name: "pdf管理",
      items: [
        {
          menuId: "2-1",
          name: "pdf预览",
          path: "/pdfpre1"
        }
      ]
    },
    {
      menuId: "3",
      name: "测试管理1",
      items: [
        {
          menuId: "3-1",
          name: "测试管理1-1",
          path: "/testone"
        }
      ]
    },
    {
      menuId: "5",
      name: "测试管理2",
      items: [
        {
          menuId: "5-1",
          name: "测试管理2-1",
          path: "/testtwo"
        }
      ]
    }
  ]