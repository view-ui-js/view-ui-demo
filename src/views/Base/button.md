:::demo
```html
<Button size="small">默认</Button>
<Button size="small" color="success">成功</Button>
<Button size="small" color="warning">警告</Button>
<Button size="small" color="info">info</Button>
<Button disable size="small" @click="click">禁用</Button>
```
:::

### icon

:::demo
```html
<Button size="small"><i class="iconfont icon-dingwei"></i> 默认</Button>
<Button size="small" color="success"><i class="iconfont icon-jia"></i> 成功</Button>
<Button size="small" color="warning"><i class="iconfont icon-lajitong1"></i> 警告</Button>
<Button disable size="small"><i class="iconfont icon-dingwei"></i> 禁用</Button>
```
:::

### flat

:::demo
```html
<Button flat @click="click">默认</Button>
<Button flat @click="click">成功</Button>
<Button flat @click="click">警告</Button>
<Button flat disable @click="click">禁用</Button>
```
:::

### fab

:::demo
```html
<Button fab><i class="iconfont icon-dingwei"></i></Button>
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