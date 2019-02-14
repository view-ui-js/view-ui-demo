<template>
   <div class="flex-level">
      <vi-sub-nav parent="/navigation/" :menu="menu"></vi-sub-nav>
      <router-view class="router"></router-view>
   </div>
</template>

<script>
export default {
  data() {
    return {
      menu: {
        "navbar": {
          name: "导航",
          icon: "\ue60a"
        },
        "paging": {
          name: "分页",
          icon: "\ue60a"
        },
      }
    };
  }
};
</script>