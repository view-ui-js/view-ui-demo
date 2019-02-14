:::demo
```html
<div class="float-menu">
  <vi-button>
      上中心
      <vi-float-menu :options="options"></vi-float-menu>
  </vi-button>
  <vi-button class="fr">
      右上
      <vi-float-menu :options="options"></vi-float-menu>
  </vi-button>
  <vi-button class="bottom">
      下中心
      <vi-float-menu :options="options"></vi-float-menu>
  </vi-button>
  <vi-button class="bottom-rigth">
      右下
      <vi-float-menu :options="options"></vi-float-menu>
  </vi-button>
</div>
```
:::

<script>
export default {
  data() {
    return {
      options: [
        {
          name: "数据同步",
          icon: "\ue60a",
          action(options) {
            if (options.name === "数据同步a") {
              options.name = "数据同步b";
            } else {
              options.name = "数据同步a";
            }
          }
        },
        {
          name: "导入商品",
          icon: "\ue60a",
          action() {}
        },
        {
          name: "网格视图",
          icon: "\ue60a",
          action() {}
        },
        {
          name: "快速编辑",
          icon: "\ue60a",
          action() {}
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.float-menu {
  .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .bottom-rigth {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>
   
