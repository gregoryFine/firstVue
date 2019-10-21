<template>
  <Layout class="layout full">
    <Layout style="background:#57b0d8;">
      <Sider ref="side" style="overflow-y:auto !important;" :collapsed-width="80" class="sider" id = "siderId">
        <Menu :active-name="menuActiveName" :open-name="menuOpenNames" ref="mainMenu" width="auto">
          <div v-for="i in menu" :key="i.menuId">
            <Submenu v-if="i.items" :name="i.menuId">
              <template slot="title">{{i.name}}</template>
              <MenuItem
                class="menuitem"
                v-for="s in i.items"
                :key="s.menuId"
                :to="s.path"
                :name="s.menuId"
              >{{s.name}}</MenuItem>
            </Submenu>
            <MenuItem
              v-else
              :name="i.menuId"
              :to="i.path"
              class="menuitem"
              :key="i.menuId"
            >{{i.name}}</MenuItem>
          </div>
        </Menu>
      </Sider>
      <Content class="main_content">
        <Breadcrumb
          @gotoPage="gotoPage"
          @showOrCloseMenu="showOrCloseMenu"
          @removeBut="removeBut"
          :currentPageName="currentPageName"
          :data="dataMenu"
        ></Breadcrumb>
      </Content>
    </Layout>
  </Layout>
</template>
<script>
import Breadcrumb from "../header/Breadcrumb"
import {routeNameArr} from './routeNameArr'
export default {
  data() {
    return {
      menu: [
        { menuId: "1", name: "首页", path: "/index" },
        {
          menuId: "2",
          name: "防火墙管理",
          items: [
            {
              menuId: "2-1",
              name: "防火墙信息管理",
              path: "/index"
            }
          ]
        }
      ],
      menuActiveName: "1",
      menuOpenNames: [],
      currentPageName:'aa',
      dataMenu:[],
      routeNameArr:[]
    };
  },
  methods:{
    getFirstPage(){
      this.menu.forEach((item, index) => {
        if(item){
          return item.path;
        } else if(item.items && item.items.length > 0 && item.items[0].path){
          return item.items[0].path
        }
      })
      return '/';
    },
    gotoPage(path){
      this.$router.push(path)
    },
    showOrCloseMenu(open){
      let menuEle = document.getElementById('siderId');
      if(open){
        menuEle.style.marginLeft = '0px';
      }else{
        menuEle.style.marginLeft = '-185px'
      }
    },
    removeBut(){

    },
    initData(){
      let path = this.$route.path;
      if(!path || this.menu.length == 0){
        return;
      }
      let indexSelected = -1;
      for(let key in this.dataMenu){
        this.dataMenu[key].isCurrent = false
      }
      
      for (let index = 0; index < this.dataMenu.length; index++) {
        if(path == this.dataMenu[index].path){
          this.dataMenu[index].isCurrent = true;
          indexSelected = index;
          this.currentPageName = this.dataMenu[index].name;
          break;
        }
      }

      if(indexSelected == -1){
        for (let index = 0; index < this.routeNameArr.length; index++) {
          if(this.routeNameArr[i].path != path){
            continue;
          }
          let obj = this.$deepCopy(this.routeNameArr[i]);
          obj.key = new Date().getTime();
          obj.isCurrent = true;
          this.currentPageName = obj.name;
          this.dataMenu.push(obj);
          while(this.dataMenu.length > 7){
            this.dataMenu.splice(0, 1);
          }
          indexSelected = this.dataMenu.length - 1;
          break;
        }
      }
    }
  },
  components:{
    Breadcrumb
  },
  create(){
    this.routeNameArr = routeNameArr;
    if(this.$route.path == '/'){
      this.$router.push(this.getFirstPage)
    }else{
      this.routeNameArr.forEach((item, index) => {
        let obj = this.$deepCopy(item);
        obj.key = new Date().getTime() -10;
        this.dataMenu.unshift(obj)
      })
    }
  },
  mounted(){

  }
};
</script>
<style scoped>
.layout {
  position: relative;
  overflow: auto;
}
.full {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
.sider {
  border-right: 1px solid #eee;
  background: #ffffff;
}
menuitem {
  color: #000000;
}
.main_content {
  background: #ffffff;
}
</style>