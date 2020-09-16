:::demo
```html
<Menu :items="items"></Menu>

<br>

<Menu :items="items"></Menu>

<br>

<Menu class="Menu-round" :items="items"></Menu>

<br>

<MenuLine :items="items"></MenuLine>

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
.Menu {
   height: 50px;
   box-shadow: 0 2px 5px #f3f3f3;
}
</style>