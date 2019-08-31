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
          icon: "\ue600"
        },
        "input/range": {
          name: "input range",
          icon: "\ue600"
        },
        radio: {
          name: "radio",
          icon: "\ue600"
        },
        select: {
          name: "select",
          icon: "\ue600"
        },
        cascader: {
          name: "cascader",
          icon: "\ue600"
        },
        date: {
          name: "date picker",
          icon: "\ue600"
        },
        image: {
          name: "image",
          icon: "\ue600"
        },
        upload: {
          name: "upload",
          icon: "\ue600"
        },
        slider: {
          name: "slider",
          icon: "\ue600"
        },
        tag: {
          name: "tag",
          icon: "\ue600"
        },
        switch: {
          name: "switch",
          icon: "\ue600"
        }
      }
    };
  }
};
</script>