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
          icon: "\ue600"
        },
        dialog: {
          name: "弹层",
          icon: "\ue600"
        },
        tabs: {
          name: "选项卡",
          icon: "\ue600"
        },
        message: {
          name: "消息框",
          icon: "\ue600"
        },
        contextmenu: {
          name: "右键菜单",
          icon: "\ue600"
        },
        bubble: {
          name: "气泡",
          icon: "\ue600"
        },
        floatMenu: {
          name: "浮动菜单",
          icon: "\ue600"
        },
        dropdown: {
          name: "下拉框",
          icon: "\ue600"
        },
        tip: {
          name: "tip",
          icon: "\ue600"
        },
        drawer: {
          name: "drawer",
          icon: "\ue600"
        },
        loading: {
          name: "loading",
          icon: "\ue600"
        }
      }
    };
  }
};
</script>