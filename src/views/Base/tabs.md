### 静态Tabs

:::demo
```html
<Tabs>
    <div slot="商品" class="p10">
      商品
    </div>
    <div slot="价格" class="p10">
      价格
    </div>
    <div slot="更多" class="p10">
      更多
    </div>
</Tabs>
```
:::

### 动态Tabs

:::demo
```html
<Tabs :tabs="tabs">
    <div slot="商品" class="p10">
      商品
    </div>
    <div slot="价格" class="p10">
      价格
    </div>
    <div slot="更多" class="p10">
      更多
    </div>
</Tabs>
```
:::


<script>
export default {
  data() {
    return {
      tabs: {
        商品: "新建商品",
        价格: "价格属性",
      //   更多: "其它"
      }
    };
  },
  methods: {},
  mounted() {}
};
</script>


### Attributes

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|------|------|
| tabs | 缺省状态用slot值代替tab值。用于动态定义选项卡中slot名与选项名之间的映射关系，实现多态选项卡。 | Object | - | - |

### Slots

| name | 说明 |
|------|------|
| $ | 每个tab对应一个slot，name对应attributes.tabs对象中的key |