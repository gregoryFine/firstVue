<template>
  <div>
    <h1>firstPage:{{this.$store.state.count}}</h1>
    <Table :data="data6" :columns="columns7"></Table>
    <div style="margin-top:100px;"></div>
    <Table border strip :columns="columns10" :data="data10"></Table>

    <List
      border
      strip
      :data="data1"
      :columns="columns1"
      @tableSelectionChange="tableSelectionChange"
      :tableConfig="tableConfig"
      :searchKey="searchKey"
    ></List>
    <div :style="{width:'300px',height:'300px'}" id="echarts_test"></div>
    <firstPreview v-if="isPreviewShow" :theIndex = "theIndex"></firstPreview>
  </div>
</template>
<script>
import { columns, columns1 } from "./table";
import List from "../../components/List";
import firstPreview from './firstPreview1'
import PDFJS from 'pdfjs-dist'
export default {
  data() {
    const that = this;
    return {
      isPreviewShow: true,
      theIndex : 0,
      pObj: { name: "fuck you", age: 18, address: "fuck street" },
      columns7: [],
      data6: [],
      data10: [],
      data1: [],
      columns1: [],
      columns10: [
        {
          title: "product_name",
          key: "product_name"
        },
        {
          title: "product_version",
          key: "product_version",
          sortable: true
        },
        {
          title: "components",
          className: "no_padding",
          render: (h, params) => {
            return h("div", [
              h("Table", {
                props: {
                  columns: [
                    { title: "component", key: "component" },
                    { title: "version_name", key: "version_name" }
                  ],
                  data: params.row.components
                }
              })
            ]);
          }
        }
      ],
      searchKey: {
        pageIndex: 1,
        pageSize: 10,
        filter: {}
      },
      tableConfig: {
        totalCount: 0,
        onPageChange: (page) => {
          this.searchKey.pageIndex = page;
          this.queryTrueNameAndValue();
        },
        onPageSizeChange: (pageSize) => {
          this.searchKey.pageSize = pageSize;
          this.queryTrueNameAndValue();
        }
      }
    };
  },
  methods: {
    showInfo(index) {
      this.$Modal.info({
        title: "用户信息",
        content: `姓名：${this.data6[index].name}<br/>年龄：${this.data6[index].age}<br/>地址：${this.data6[index].address}`
      });
    },
    deleteInfo(index) {
      this.data6.splice(index, 1);
    },
    tableSelectionChange(arr) {
      console.log("arr", arr);
    },
    createEchats() {
      let firstEchartsDom = document.getElementById("echarts_test");
      let echartsGet = this.$echarts.getInstanceByDom(firstEchartsDom);
      if (null != echartsGet) {
        echartsGet.dispose();
      }
      let echartsObj = this.$echarts.init(firstEchartsDom);
      let option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar"
          }
        ]
      };
      echartsObj.setOption(option);
    },
    queryTrueNameAndValue() {
      let that = this;
      for (let index = 0; index < this.searchKey.filter; index++) {
        if(!this.searchKey.filter[index]){
          delete this.searchKey.filter[index];
        }
      }
      this.$httpGet(this.$path.basic.test, {
        params: JSON.stringify(this.searchKey)
      })
        .then(res => {
          this.data1.splice(0);
          if (res && res.data) {
            res.data.forEach((val, i) => {
              this.data1.push(val);
            });
            this.tableConfig.totalCount = res.totalCount;
          }
        })
        .catch(err => {});
    },
    firstPreview(index){
      this.theIndex = index;
      this.isPreviewShow = true;
    }
  },
  created() {
    this.queryTrueNameAndValue();
    this.data6 = [
      {
        name: "John Brown",
        age: 18,
        address: "New York No. 1 Lake Park"
      },
      {
        name: "Jim Green",
        age: 24,
        address: "London No. 1 Lake Park"
      },
      {
        name: "Joe Black",
        age: 30,
        address: "Sydney No. 1 Lake Park"
      },
      {
        name: "Jon Snow",
        age: 26,
        address: "Ottawa No. 2 Lake Park"
      }
    ];
    this.columns1 = columns1.call(this);//////////////////////
    this.columns7 = columns.call(this);
  },
  mounted() {
    // this.createEchats();
  },
  components: {
    List,
    firstPreview
  }
};
</script>
<style scoped>
</style>