<template>
    <div>
    <Table :height = "300" @on-selection-change="tableSelectionChange" :data="data1" :columns="columns1"></Table>
    <Page show-sizer :style = "{'margin-top':'10px'}" 
    :page-size ="searchKey.pageSize"
    :current="searchKey.pageIndex"
    :total="tableConfig.totalCount"
    @on-change="tableConfig.onPageChange"
    @on-page-size-change="tableConfig.onPageSizeChange"
    ></Page>
    </div>
</template>

<script>
export default {
  props:{
      data1:{
          type:Array,
          default(){
              return this.$parent.data1;
          }
      },
      columns1:{
          type:Array,
          default(){
              return this.$parent.columns1;
          }
      },
      searchKey:{
        type:Object,
        default(){
          return {};
        }
      },
      tableConfig:{
        type:Object,
        default(){
          return {};
        }
      }
  },
  data() {
    return {
      
    };
  },
  methods: {
    tableSelectionChange(val) {
      this.$emit("tableSelectionChange", val);
    }
  }
   
};
</script>

<style scoped>
</style>