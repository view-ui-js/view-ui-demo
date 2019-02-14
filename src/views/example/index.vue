<template>
   <div class="flex-level">
      <vi-sub-nav parent="/example/" :menu="menu"></vi-sub-nav>
      <router-view class="router"></router-view>
   </div>
</template>

<script>
export default {
  data() {
    return {
      menu: {
        list1: {
          name: "列表1",
          icon: "\ue60a"
        },
        list2: {
          name: "列表2",
          icon: "\ue60a"
        }
      }
    };
  }
};
</script>


<style lang="scss">
.xxxxx {
  width: 100px;
}
</style>