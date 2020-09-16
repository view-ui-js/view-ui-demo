<template>
  <aside class="vi-nav2 vt-sub">
    <h3 class="title">
      <i :class="currentMenu.icon"></i>
      {{currentMenu.name}}
      <span class="subName">{{subName}}</span>
    </h3>
    <slot>
      <div class="vi-nav2-main">
        <router-link
          class="vt-link-active2"
          v-for="(sub, subKey) in currentMenu.children"
          :to="`/${key}/${subKey}`"
          :key="subKey"
        >
          <i v-if="sub.icon" :class="sub.icon"></i>
          <span>{{sub.name}}</span>
        </router-link>
      </div>
    </slot>
  </aside>
</template>

<script>
export default {
  data() {
    const { path } = this.$router.currentRoute;
    return this.setNav(path);
  },
  methods: {
    setNav(path) {
      const [, one, two] = path.split("/");
      const { menu } = global;

      const value = menu[one];

      const data = {
        key: one,
        subName: "",
        currentMenu: {}
      };

      if (value) {
        data.currentMenu = value;
        if (two && value.children) {
          const subValue = value.children[two];
          if (subValue) {
            data.subName = ` / ${subValue.name}`;
          }
        }
      }

      return data;
    }
  },
  watch: {
    $route(value) {
      const data = this.setNav(value.path);
      Object.assign(this, data);
    }
  }
};
</script>

<style lang="scss">
.vi-nav2 {
  flex: none;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 100;
  width: 160px;
  h3 {
    flex: none;
    font-size: 16px;
    padding-left: 15px;
    height: 52px;
    line-height: 52px;
    color: #999999;
    white-space: nowrap;
    i {
      font-weight: normal;
    }
    .subName {
      font-size: 14px;
    }
  }
  .vi-nav2-main {
    height: 100%;
    padding-bottom: 20px;
    overflow-y: overlay;
    a {
      display: block;
      padding: 12px 0 12px 15px;
      font-size: 14px;
      text-align: initial;
      // margin-left: 8px;
      // border-radius: 3px 0 0 3px;
      i {
        margin-right: 8px;
        font-size: 18px;
      }
    }
  }
}
</style>
