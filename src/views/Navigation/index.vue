<template>
   <div class="flex-level">
      <SubNav parent="/navigation/" :menu="menu"></SubNav>
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
          icon: "\ue600"
        },
        "paging": {
          name: "分页",
          icon: "\ue600"
        },
      }
    };
  }
};
</script>