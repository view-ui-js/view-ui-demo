:::demo
```html
<vi-button size="small">默认</vi-button>
<vi-button size="small" color="success">成功</vi-button>
<vi-button size="small" color="warning">警告</vi-button>
<vi-button size="small" color="info">info</vi-button>
<vi-button disable size="small" @click="click">禁用</vi-button>
```
:::

### icon

:::demo
```html
<vi-button size="small"><i class="iconfont icon-dingwei"></i> 默认</vi-button>
<vi-button size="small" color="success"><i class="iconfont icon-jia"></i> 成功</vi-button>
<vi-button size="small" color="warning"><i class="iconfont icon-lajitong1"></i> 警告</vi-button>
<vi-button disable size="small"><i class="iconfont icon-dingwei"></i> 禁用</vi-button>
```
:::

### flat

:::demo
```html
<vi-button flat @click="click">默认</vi-button>
<vi-button flat @click="click">成功</vi-button>
<vi-button flat @click="click">警告</vi-button>
<vi-button flat disable @click="click">禁用</vi-button>
```
:::

### fab

:::demo
```html
<vi-button fab><i class="iconfont icon-dingwei"></i></vi-button>
```
:::

<script>
export default {
  // data() {
  //   return {};
  // },
  methods: {
    click(ev) {
      console.log(666);
    }
  }
};
</script>