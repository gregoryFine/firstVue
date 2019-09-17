import {firstCheckCol} from './firstCheckCol'
import {firstPlusCol} from './firstPlusCol'
export function columns(){
    let arr = [
        {
          title: "序号",
          align: "center",
          render: (c, { index }) => {
            return c("div", index + 1);
          }
        },
        {
          title: "姓名",
          align: "center",
          render: (h, params) => {
            return h("div", {attrs:{title:params.row.name}}, [h("strong", params.row.name)]);
          }
        },
        {
          title: "年龄",
          align: "center",
          render: (h, { row }) => {
            return h("div", row.age);
          }
        },
        {
          title: "地址",
          align: "center",
          render: (c, params) => {
            return c("span", params.row.address);
          }
        },
        {
          title: "操作",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary"
                  },
                  on: {
                    click: () => {
                      this.showInfo(params.index);
                    }
                  }
                },
                "查看"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error"
                  },
                  style: {
                    marginLeft: "10px"
                  },
                  on: {
                    click: () => {
                      this.deleteInfo(params.index);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ];
      arr.unshift(firstCheckCol.call(this));
      arr.unshift(firstPlusCol.call(this));
      return arr;
}


export function columns1(){
  let arr = [
      {
        title:'序号',
        align:'center',
        render:(h,{index}) => {
          return h('div', index + 1);
        }
      },
      {
        title:'姓名',
        align:'center',
        render:(h, params) => {
          return h('div', params.row.name);
        }
      },
      {
        title:'值',
        align:'center',
        render:(h, params) => {
          return h('div', params.row.value);
        }
      }
  ];
  arr.unshift(firstCheckCol.call(this));
  return arr;
}