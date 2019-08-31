:::demo
```html
<vi-navbar :menu="menu">
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
</vi-navbar>
```
:::

<script>
import theme from 'view-ui/theme.js';
export default {
  data() {
    return {
      theme,
      menu: {
        base: {
          name: "基础",
          icon: "\ue64f"
        },
        form: {
          name: "表单",
          icon: "\ue72e"
        },
        navigation: {
          name: "导航",
          icon: "\ue61a"
        },
        page: {
          name: "页面",
          icon: "\ue615"
        },
        layout: {
          name: "布局",
          icon: "\ue61a"
        },
        chart: {
          name: "图表",
          icon: "\ue651"
        },
        example: {
          name: "示例",
          icon: "\ue63f"
        },
        user: {
          name: "用户",
          icon: "\ue61a"
        },
        settings: {
          name: "设置",
          icon: "\ue6d8"
        },
        document: {
          name: "文档",
          icon: "\ueb21"
        }
      }
    };
  }
};
</script>



<style lang="scss">
main .vi-navbar {
    width: 52px;
}
</style>