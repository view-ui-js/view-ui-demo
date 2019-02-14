<template>
   <div class="flex-level">
      <vi-sub-nav parent="/base/" :menu="menu"></vi-sub-nav>
      <router-view class="router"></router-view>
   </div>
</template>

<script>
export default {
  data() {
    return {
      menu: {
        button: {
          name: "按钮",
          icon: "\ue60a"
        },
        dialog: {
          name: "弹层",
          icon: "\ue60a"
        },
        tabs: {
          name: "选项卡",
          icon: "\ue60a"
        },
        message: {
          name: "消息框",
          icon: "\ue60a"
        },
        contextmenu: {
          name: "右键菜单",
          icon: "\ue60a"
        },
        bubble: {
          name: "气泡",
          icon: "\ue60a"
        },
        floatMenu: {
          name: "浮动菜单",
          icon: "\ue60a"
        },
        dropdown: {
          name: "下拉框",
          icon: "\ue60a"
        },
        tip: {
          name: "tip",
          icon: "\ue60a"
        },
        drawer: {
          name: "drawer",
          icon: "\ue60a"
        },
        loading: {
          name: "loading",
          icon: "\ue60a"
        }
      }
    };
  }
};
</script>