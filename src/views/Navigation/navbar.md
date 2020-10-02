:::demo

```html
<NavBar :menu="menu">
  <div class="logo" slot="top">
    <router-link to="/">
      <i class="iconfont">&#xe600;</i>
    </router-link>
  </div>
  <a class="nav-user">
    <i class="iconfont">&#xe604;</i>
    <div class="nav-user-layer">
      <div class="nav-user-main">
        <span class="black" @click="theme.use('black')"></span>
        <span class="green" @click="theme.use('green')"></span>
        <span class="lightGreen" @click="theme.use('lightGreen')"></span>
      </div>
      <div class="nav-user-footer"></div>
    </div>
  </a>
</NavBar>
```

:::

<script>
import theme from 'view-ui/theme.js';
export default {
  data() {
    return {
      theme,
      menu:global.menu
    };
  }
};
</script>

<style lang="scss">
main .vi-navbar {

}
</style>
