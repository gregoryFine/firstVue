<template>
<div class = "outer_div"> 
    <div class="inner_div">
      <Row >
        <Icon type="md-game-controller-b" size="50" color="red" />
      </Row>
      <Row class="mt1">
        <Input placeholder="请输入姓名" :style="{'width':'auto'}">
          <Icon type="ios-contact" slot="prefix" />
        </Input>
      </Row>
      <Row class="mt1">
        <Input placeholder="请输入密码" :style="{'width':'auto'}" type="password">
          <Icon type="logo-xbox" slot="prefix" />
        </Input>
      </Row>
      <Row class="mt1">
        <Button type="success" @click="goIndex">登录</Button>
      </Row>
    </div>
    </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
      goIndex(){
          this.$router.push({path:"/index"})
      }
  },
  created() {},
  mounted() {},
  components: {}
};
</script>
<style scoped>
.outer_div{
    width:100%;
    height:100%;
    background:url('../../assets/image/aa.jpg') no-repeat;
}

.inner_div {
  width: 30%;
  height: 30%;
  position:absolute;
  left:35%;
  top:35%;
  border-radius: 5px;
  margin:0 auto;
  border: solid 1px #653a3a;
  background:url('../../assets/image/bb.jpg') no-repeat;
  background-size: 100% 100%;
}

.mt1 {
  margin-top: 20px;
}
.mt5 {
    margin-top:50px;
}
</style>