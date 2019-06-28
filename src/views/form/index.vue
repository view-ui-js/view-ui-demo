<template>
   <div class="flex-level">
      <vi-sub-nav parent="/form/" :menu="menu"></vi-sub-nav>
      <router-view class="router"></router-view>
   </div>
</template>

<script>
export default {
  data() {
    return {
      menu: {
        "input/input": {
          name: "input",
          icon: "\ue60a"
        },
        "input/range": {
          name: "input range",
          icon: "\ue60a"
        },
        radio: {
          name: "radio",
          icon: "\ue60a"
        },
        select: {
          name: "select",
          icon: "\ue60a"
        },
        cascader: {
          name: "cascader",
          icon: "\ue60a"
        },
        date: {
          name: "date picker",
          icon: "\ue60a"
        },
        upload: {
          name: "upload",
          icon: "\ue60a"
        },
        slider: {
          name: "slider",
          icon: "\ue60a"
        },
        tag: {
          name: "tag",
          icon: "\ue60a"
        },
        switch: {
          name: "switch",
          icon: "\ue60a"
        }
      }
    };
  }
};
</script>