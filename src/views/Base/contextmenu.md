:::demo
```html
<div class="contextmenu">
  <div class="fl" @contextmenu="contextmenu(data1)">
      <Button>右键菜单</Button>
  </div>
  <div class="fr" @contextmenu="contextmenu(data2)">
      <Button>右键菜单右</Button>
  </div>
  <div class="bottom" @contextmenu="contextmenu(data2)">
      <Button>右键菜单下</Button>
  </div>
  <div class="bottom-rigth" @contextmenu="contextmenu(data2)">
      <Button>右键菜单右下</Button>
  </div>
</div>
```
:::

<script>
export default {
  data() {
    return {
      data1: {
        a: 1,
        b: 2
      },
      data2: {
        a: 1111,
        b: 2222
      }
    };
  },
  methods: {
    contextmenu(data) {
      this.$contextmenu(data, [
        {
          name: "编辑",
          icon: "\ue61e",
          action(data) {
            console.log("编辑", data);
          }
        },
        {
          name: "复制",
          icon: "\ue668",
          action(data) {
            console.log("复制", data);
          }
        },
        {
          name: "删除",
          icon: "\ue633",
          action(data) {
            console.log("删除", data);
          }
        }
      ]);
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
.contextmenu {
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