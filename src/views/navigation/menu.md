:::demo
```html
<vi-menu :items="items"></vi-menu>

<br>

<vi-menu :items="items"></vi-menu>

<br>

<vi-menu class="vi-menu-round" :items="items"></vi-menu>

<br>

<vi-menu-line :items="items"></vi-menu-line>

<br>

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
@import "view-ui/menu/round.scss";
.vi-menu {
   height: 50px;
   box-shadow: 0 2px 5px #f3f3f3;
}
</style>