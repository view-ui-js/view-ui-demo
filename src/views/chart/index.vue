<template>
   <div class="flex-level">
      <vi-sub-nav parent="/chart/" :menu="menu"></vi-sub-nav>
      <router-view class="router"></router-view>
   </div>
</template>

<script>
export default {
  data() {
    return {
      menu: {
        line: {
          name: "折线图",
          icon: "\ue60a"
        },
        column: {
          name: "柱形图",
          icon: "\ue60a"
        },
        pie: {
          name: "饼图",
          icon: "\ue60a"
        }
      }
    };
  }
};
</script>