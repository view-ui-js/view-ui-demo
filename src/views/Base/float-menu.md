:::demo
```html
<div class="float-menu">
  <Button>
      上中心
      <FloatMenu :options="options"></FloatMenu>
  </Button>
  <Button class="fr">
      右上
      <FloatMenu :options="options"></FloatMenu>
  </Button>
  <Button class="bottom">
      下中心
      <FloatMenu :options="options"></FloatMenu>
  </Button>
  <Button class="bottom-rigth">
      右下
      <FloatMenu :options="options"></FloatMenu>
  </Button>
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
          icon: "\ue600",
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
          icon: "\ue600",
          action() {}
        },
        {
          name: "网格视图",
          icon: "\ue600",
          action() {}
        },
        {
          name: "快速编辑",
          icon: "\ue600",
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
   
