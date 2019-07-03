<template>
   <div class="flex-level">
      <vi-navbar :menu="menu">
         <div class="logo" slot="top">
            <router-link to="/">
               <i class="iconfont">&#xe60a;</i>
            </router-link>
         </div>
         <a class="nav-user">
            <i class="iconfont">&#xe604;</i>
            <div class="nav-user-layer">
               <div class="nav-user-main">
                  <span class="black" @click="$theme.use('black')"></span>
                  <span class="green" @click="$theme.use('green')"></span>
                  <span class="lightGreen" @click="$theme.use('lightGreen')"></span>
               </div>
               <div class="nav-user-footer"></div>
            </div>
         </a>
      </vi-navbar>
      <main class="flex">
         <router-view class="router"></router-view>
      </main>
   </div>
</template>

<script>
export default {
  data() {
    return {
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
        // layout: {
        //   name: "布局",
        //   icon: "\ue61a"
        // },
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
.logo {
  a {
    display: block;
    color: #ffffff;
    text-align: center;
    padding: 14px 0;
    .iconfont {
      font-size: 18px;
    }
  }
}
.nav-user {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 14px 17px;
  color: #ffffff;
  &:hover .nav-user-layer {
    display: flex;
  }
  .nav-user-layer {
    display: none;
    flex-direction: column;
    color: #828282;
    position: absolute;
    z-index: 100;
    bottom: 0;
    left: 100%;
    width: 360px;
    height: 500px;
    background-color: #fff;
    padding: 16px 20px 0 20px;
    box-shadow: 2px -2px 6px rgba(0, 0, 0, 0.1);
    .nav-user-main {
      flex: auto;
      span {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin: 5px;
        cursor: pointer;
      }
      .black {
        background-color: #3a3f51;
      }
      .green {
        background-color: #27c24c;
      }
      .lightGreen {
        background-color: #6fdfa5;
      }
    }
  }
}
</style>