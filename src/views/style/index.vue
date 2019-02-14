<template>
   <div class="flex-level">
      <vi-sub-nav parent="/style/" :menu="menu"></vi-sub-nav>
      <router-view class="router"></router-view>
   </div>
</template>

<script>
export default {
  data() {
    return {
      menu: {
        "menu": {
          name: "菜单",
          icon: "\ue60a"
        },
      }
    };
  }
};
</script>