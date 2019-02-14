<template>
   <div class="list-box flex-vertical">
      <div class="appbar">
         <div class="appbar-menu">
            <span class="appbar-button">
               <span class="name">新建</span>
               <i class="iconfont">&#xe63b;</i>
            </span>
            <vi-float-menu :options="options1">
               <span class="appbar-button">
                  <span class="name">更多</span>
                  <i class="iconfont">&#xe66a;</i>
               </span>
            </vi-float-menu>
         </div>
         <!-- <div class="search">
            <input type="text" placeholder="搜索商品名称、编号">
            <i class="iconfont search-button">&#xe600;</i>
         </div> -->
      </div>

      <div class="flex p10">
         内容区
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
         <vi-float-menu :options="options2">
            <span class="appbar-button">
               <span class="name">更多</span>
               <i class="iconfont">&#xe60a;</i>
            </span>
         </vi-float-menu>
      </div>
   </div>
</template>

<script>
export default {
  data() {
    return {
      options1: [
        {
          name: "商品导入",
          icon: "\ue60a",
          action() {
            console.log(666);
          }
        },
        {
          name: "存储引擎",
          icon: "\ue60a",
          action() {}
        },
        {
          name: "帮助中心",
          icon: "\ue60a",
          path: "/document"
        }
      ],
      options2: [
        {
          name: "商品导入",
          icon: "\ue60a",
          action() {
            console.log(666);
          }
        },
        {
          name: "存储引擎",
          icon: "\ue60a",
          action() {}
        }
      ]
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss">
@import "~view-ui/style/var.scss";
.active-border {
  color: $active;
  border-bottom: 3px solid $active;
}
</style>
