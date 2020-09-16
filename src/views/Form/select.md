options 分为对象类型和数组类型，对象类型适用于需要 key/value 映射关系的应用场景，以 key 作为返回值。数组类型适用于所见即所得，直接取 value 值的场景。

select 分为可编辑和不可编辑两种使用方式。当 options 为对象类型时是不支持编辑的，因为对象类型以 key 作为返回值，编辑 value 没有任何意义，而且 key 通常是基于约定的，不允许随意变更。数组类型以 value 作为返回值，允许随意编辑。

### 普通下拉菜单，默认不可编辑，options 可以是数组或对象类型

:::demo
```html
<Select v-model="select" placeholder="选择颜色">
  <Option v-for="(item, key) of colorObject" :key="key" :value="item" :label="item" />
</Select>
<p>{{select}}</p>
```
:::

### 可编辑下拉菜单，options 只接受数组类型

:::demo
```html
<Select v-model="editSelect" placeholder="选择颜色" edit>
  <Option
    v-for="(item, key) of colorObject" :key="key"
    :value="item"
    :label="item"
  />
</Select>
<p>{{editSelect}}</p>
```
:::

<script>
export default {
  data() {
    return {
      select: "b",
      editSelect: "绿",
      colorObject: {
        a: "黑",
        b: "白",
        c: "红"
      },
      colorArray: ["黑", "白", "红"]
    };
  },
  methods: {}
};
</script>

<style lang="scss">

</style>
