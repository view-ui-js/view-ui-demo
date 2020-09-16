<template>
  <nav class="vi-navbar vt-main">
    <slot name="logo"></slot>
    <nav class="vi-nav-menu-scroll">
      <template v-for="(value, key) in menu">
        <router-link :to="'/'+key" :key="key" class="vi-nav-menu-item vt-link-active vt-hover">
          <i :class="value.icon"></i>
          <Tip>{{value.name}}</Tip>
        </router-link>
      </template>
    </nav>
    <slot name="user"></slot>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    menu: Object
  },
  data() {
    return {
      open: false
    };
  },
  install(Vue) {
    Vue.component(this.name, this);
  }
};
</script>

<style lang="scss">
.vi-navbar {
  flex: none;
  z-index: 1000;
  -webkit-app-region: drag; // electron 拖拽专用
  position: relative;
  width: 50px;
  height: 100%;
  user-select: none;
  .vi-nav-menu-scroll {
    .vi-nav-menu-item {
      height: 50px;
      position: relative;
      display: block;
      color: #ffffff;
      text-align: center;
      padding: 14px 0;
      i {
        font-size: 18px;
      }
    }
    .router-link-active {
      border-radius: 3px 0 0 3px;
      .vi-menu {
        display: block;
      }
    }
    .router-link-active + a {
      border-radius: 0 0 3px 0;
    }
  }
}
</style>
