<template>
  <div id="app">
    <NavBar :menu="menu">
      <template v-slot:top>
        <router-link class="navbar-logo" to="/">
          <i class="vd-logo"></i>
        </router-link>
      </template>
      <template v-slot:bottom>
        <a class="user-button vt-hover" @mousedown.stop>
          <i class="vd-yonghutouxiang"></i>
        </a>
      </template>
    </NavBar>
    <router-view class="router"></router-view>
  </div>
</template>

<script>
import theme from "view-ui/theme.js";
export default {
  data() {
    return {
      theme,
      menu: global.menu,
    };
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  height: 100%;
  .navbar-logo {
    display: block;
    color: #fff;
    text-align: center;
    padding: 12px 0 12px 0;
    cursor: pointer;
    i {
      font-size: 22px;
    }
    // .vi-bubble {
    //   .vi-bubble-content {
    //     width: 250px;
    //     height: 600px;
    //   }
    // }
  }
  .user-button {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 14px 17px;
    color: #ffffff;
  }
}
</style>
