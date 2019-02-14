<template>
   <div class="flex-vertical">

      <div class="appbar">
         <div class="appbar-nav">样式1</div>
         <div class="appbar-menu">
            <span class="appbar-button" @click="drawer=!drawer">
               <span class="name">侧栏</span>
               <i class="iconfont">&#xeb29;</i>
            </span>
            <span class="appbar-button" @click="dialog=true">
               <span class="name">新建</span>
               <i class="iconfont">&#xe63b;</i>
            </span>
            <span class="appbar-button">
               <span class="name">更多</span>
               <i class="iconfont">&#xe66a;</i>
               <vi-float-menu :options="options2"></vi-float-menu>
            </span>
         </div>
      </div>

      <vi-loading v-if="loading"></vi-loading>

      <table class="table-base table-list table-item">
         <thead>
            <tr>
               <th class="sort">
                  <span>商品名称</span>
                  <i class="iconfont"></i>
               </th>
               <th>规格</th>
               <th class="sort ASC">
                  <span>
                     价格
                  </span>
                  <i class="iconfont"></i>
               </th>
               <th>
                  <span>
                     成本价
                     <i class="iconfont"></i>
                  </span>
               </th>
               <th>
                  <span>
                     库存
                     <i class="iconfont"></i>
                  </span>
               </th>
               <th>
                  <span>
                     更新日期
                     <i class="iconfont"></i>
                  </span>
               </th>
               <th>
                  <i class="iconfont check" :class="{'all-select':allSelect}" @click="AllSelect"></i>
               </th>
            </tr>
         </thead>
      </table>

      <div class="flex scroll-y">
         <table class="table-base table-list table-item">
            <tbody>
               <tr v-for="(item,key) in list" :key="key" :class="{'select':item.select}" @click.stop="Select(item, $event)"  @contextmenu="Contextmenu(item)">
                  <td>
                     <!-- <img class="images" v-if="item.images" :src="item.images"> -->
                     {{item.name}}
                  </td>
                  <td>
                     {{item.specification}}
                  </td>
                  <td>
                     {{item.price}}
                  </td>
                  <td>
                     {{item.cost}}
                  </td>
                  <td>
                     {{item.stock}}
                  </td>
                  <td>
                     {{item.updatedAt}}
                  </td>
                  <td>
                     <i class="iconfont check"></i>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>

      <div class="bottom-bar">
         <span class="appbar-button">
            <span class="name">查看</span>
            <i class="iconfont">&#xe60a;</i>
         </span>
         <span class="appbar-button warning">
            <span class="name">删除</span>
            <i class="iconfont">&#xe60a;</i>
         </span>
         <span class="appbar-button">
            <span class="name">更多</span>
            <i class="iconfont">&#xe60a;</i>
            <vi-float-menu :options="options3"></vi-float-menu>
         </span>
      </div>

      <vi-dialog v-if="dialog" width="960px" height="650px" @close="dialog=false" @confirm="confirm">
        <vi-tabs class="tabs-form">
            <div slot="新建任务">
              <table class="table-form">
                  <tbody>
                    <tr>
                        <th>名称：</th>
                        <td>
                          <vi-input placeholder="描述文本" v-model="form.domain"></vi-input>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>状态A：</th>
                        <td>
                          <vi-switch></vi-switch>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>状态B：</th>
                        <td>
                          <vi-switch></vi-switch>
                        </td>
                        <td></td>
                    </tr>
                  </tbody>
              </table>
            </div>
            <div slot="数据模型">
            </div>
            <div slot="扩展选项">
            </div>
         </vi-tabs>
      </vi-dialog>

      <vi-drawer v-if="drawer" @close="drawer=false"></vi-drawer>

   </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      drawer: false,
      dialog: false,
      form: {},
      options2: [
        {
          name: "数据导入",
          icon: "\ue60a",
          action() {
            console.log(666);
          }
        },
        {
          name: "网格视图",
          icon: "\ue60a",
          action() {}
        },
        {
          name: "快速编辑",
          icon: "\ue60a",
          action() {}
        },
        {
          name: "跳转链接",
          icon: "\ue60a",
          path: "/document"
        }
      ],
      options3: [
        {
          name: "数据导出",
          icon: "\ue60a",
          action() {
            console.log(666);
          }
        },
        {
          name: "批量删除",
          icon: "\ue60a",
          action() {}
        }
      ],
      list: (function() {
        let list = [];
        for (let i = 0; i < 10; i++) {
          list.push(
            {
              name: "test 1",
              images: "http://localhost:8989/static/wk.jpg",
              specification: "黑/L",
              price: 25,
              cost: 16,
              stock: 12,
              updatedAt: "2018年1月12日",
              select: false
            },
            {
              name: "test 2",
              images: "http://localhost:8989/static/wk.jpg",
              specification: "白/L",
              price: 25,
              cost: 16,
              stock: 12,
              updatedAt: "2018年1月12日",
              select: false
            }
          );
        }
        return list;
      })(),
      selectCount: 0,
      allSelect: false
    };
  },
  methods: {
    Select(item, $event) {
      // 单项勾选
      if (item.select) {
        item.select = false;
        this.selectCount--;
      } else {
        item.select = true;
        this.selectCount++;
      }
      this.IsAllSelect();
    },
    // 全选按钮状态
    IsAllSelect() {
      let count = 0;
      let list = this.list;
      for (let item of list) {
        if (item.select) {
          count++;
        }
      }
      if (count > 0 && count === list.length) {
        this.allSelect = true;
      } else {
        this.allSelect = false;
      }
    },
    // 全选/取消全选
    AllSelect() {
      let count = 0;
      let list = this.list;
      // 获取当前页选中项数
      for (let item of list) {
        if (item.select) {
          count++;
        }
      }
      if (count === list.length) {
        // 取消全选
        for (let item of list) {
          if (item.select) {
            item.select = false;
            this.selectCount--;
          }
        }
        this.allSelect = false;
      } else {
        // 全选
        for (let item of list) {
          if (!item.select) {
            item.select = true;
            this.selectCount++;
          }
        }
        this.allSelect = true;
      }
    },
    confirm() {},
    Contextmenu(data) {
      this.$contextmenu(data, [
        {
          name: "编辑任务",
          icon: "\ue61e",
          action() {}
        },
        {
          name: "删除任务",
          icon: "\ue633",
          action() {}
        }
      ]);
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
};
</script>

<style lang="scss">
@import "~view-ui/style/var.scss";
table.table-form {
  margin: 12px 0;
  tr {
    height: 46px;
    th {
      width: 100px;
      text-align: right;
      // padding: 16px 0 0 0;
      // vertical-align: top;
    }
    td {
    }
    td:nth-child(2) {
      width: 236px;
    }
    td:nth-child(3) {
      color: #bbb;
      font-size: 13px;
    }
  }
}

.table-list {
  tr:nth-child(1) {
    th:nth-child(2),
    td:nth-child(2) {
      width: 12%;
    }
    th:nth-child(3),
    td:nth-child(3) {
      width: 11%;
    }
    th:nth-child(4),
    td:nth-child(4) {
      width: 9%;
    }
    th:nth-child(5),
    td:nth-child(5) {
      width: 9%;
    }
    th:nth-child(6),
    td:nth-child(6) {
      width: 9%;
    }
    th:nth-child(7),
    td:nth-child(7) {
      width: 8%;
    }
    th:nth-last-child(1),
    td:nth-last-child(1) {
      width: 50px;
    }
  }
}
</style>
