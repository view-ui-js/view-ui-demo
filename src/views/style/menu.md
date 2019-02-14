:::demo
```html
<vi-menu class="vi-menu-demo" :items="items"></vi-menu>

<br>

<vi-menu class="vi-menu-demo" :items="items" skin="null"></vi-menu>

<br>

<vi-menu-line class="vi-menu-demo" :items="items"></vi-menu-line>

<script>
export default {
  data() {
    return {
      items: [
        {
          name:'全部',
          icon:'icon-dingwei',
          active: true,
          action(item){
            console.log(item.name);
          }
        },
        {
          name:'内容',
          icon:'icon-dingwei',
        },
        {
          name:'话题',
          icon:'icon-dingwei',
        },
        {
          name:'用户',
          icon:'icon-dingwei',
        }
      ]
    };
  }
};
</script>
```
:::

<style lang="scss">
.vi-menu-demo {
  height: 40px;
  background-color: #fff;
  box-shadow: 0 2px 2px #f3f3f3;
}
</style>