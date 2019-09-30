<template>
  <Layout class = "layout full">

    <Layout style = "background:#57b0d8;">

      <Sider ref = "side" style = "overflow-y:scroll !important;" :collapsed-width="80" class = "sider">
        <Menu :active-name = "menuActiveName" :open-name = "menuOpenNames" ref = "mainMenu" width="auto">





        </Menu>
      </Sider>
    </Layout>



  </Layout>
</template>
<script>
export default {
  data(){
    return {
      menu:[
        {menuId:'1', name:'首页', path:'/home'},
        {menuId:'2', name:'防火墙管理', items:[{ menuId : '2-1', name : '防火墙信息管理', path:'/firewallBaseMessage'}]},
      ],
      menuActiveName: '1',
      menuOpenNames : []
    }
  }





};
</script>
<style scoped>

.layout{
  position:relative;
  overflow:hidden;
}
.full {
  margin:0;
  padding:0;
  width:100%;
  height:100%;
}
.sider{
  border-right:1px solid #eee;
  background:inherit;
}


</style>