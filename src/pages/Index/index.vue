<template>
  <Layout class="layout full">
    <Layout style="background:#57b0d8;">
      <Sider
        ref="side"
        style="overflow-y:auto !important;"
        :collapsed-width="80"
        class="sider"
        id="siderId"
      >
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

        <div class="content main_bg">
          <router-view class="full" />
        </div>
      </Content>
    </Layout>
  </Layout>
</template>
<script>
import Breadcrumb from "../header/Breadcrumb";
import indexMixin from './indexMixin'
export default {
  mixins:[indexMixin],
  components: {
    Breadcrumb
  }
}
</script>
<style scoped>
.layout {
  position: relative;
  overflow: auto;
}
.full {
  margin: 0;
  padding: 0;
  width: 90%;
  height: 90%;
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
.content {
  padding: 92px 3px 20px 20px;
  min-height: 100%;
  width: 100%;
}
</style>