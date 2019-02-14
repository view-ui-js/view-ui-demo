<template>
   <div class="flex-level">
      <vi-sub-nav parent="/layout/" :menu="menu"></vi-sub-nav>
      <router-view class="router"></router-view>
   </div>
</template>

<script>
export default {
  data() {
    return {
      menu: {
        "level": {
          name: "水平",
          icon: "\ue60a"
        },
        "vertical": {
          name: "垂直",
          icon: "\ue60a"
        },
      }
    };
  }
};
</script>