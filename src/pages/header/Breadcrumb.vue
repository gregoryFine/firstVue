<template>
  <div class="breadcrumb">
    <div>
      <div style = "width:5%;float:left;">
        <Icon
          @click="showOrCloseMenu"
          style="padding:0 10px 2px 0px;font-size:25px;"
          size="20"
          :type="leftMenuOpened ? 'md-arrow-round-back':'md-arrow-round-forward'"
        ></Icon>
      </div>
      <div class="color_main">您当前的位置：{{currentPageName}}</div>
      <div class="main_bg" style="padding:10px 20px;max-width:90%;">
        <span v-for="item in data" :key="item.key">
          <Button
            v-if="item.isCurrent"
            :style="item.path != '/home' ? '':'padding-right:5px;'"
            class="click_current"
          >
            <span class="click_text">{{item.name}}</span>
          </Button>
          <Button v-else :style="item.path != '/home' ? '': 'padding-right:5px;'" class="click_but">
            <span class="click_text">{{item.name}}</span>
          </Button>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    currentPageName: {
      type: String,
      default() {
        return '';
      }
    }
  },
  data() {
    return {
        leftMenuOpened:true
    };
  },
  methods:{
      showOrCloseMenu(){
          this.leftMenuOpened = !this.leftMenuOpened;
          this.$emit('showOrCloseMenu', this.leftMenuOpened);
      }
  }
};
</script>
<style>
.color_main{
    width:10%;
    float:left;
}

.breadcrumb{
    width:100%;
    padding:0 0;
    color:#999999;
    font-size:14px;
    line-height:35px;
    position:fixed;
    z-index:1000;
}

.click_but{
    padding:0
}
.click_current{
    padding:0;
    color:#000000;
    border:solid 1px red;
}
.click_text{
    color:#000000;
}
</style>