options分为对象类型和数组类型，对象类型适用于需要key/value映射关系的应用场景，以key作为返回值。数组类型适用于所见即所得，直接取value值的场景。

select分为可编辑和不可编辑两种使用方式。当options为对象类型时是不支持编辑的，因为对象类型以key作为返回值，编辑value没有任何意义，而且key通常是基于约定的，不允许随意变更。数组类型以value作为返回值，允许随意编辑。

### 普通下拉菜单，默认不可编辑，options可以是数组或对象类型

<vi-select v-model="select" :options="colorObject" placeholder="选择颜色"></vi-select>
<p>{{select}}</p>

```html
  <vi-select v-model="select" :options="colorObject" placeholder="选择颜色"></vi-select>
  <p>{{select}}</p>
```

### 可编辑下拉菜单，options只接受数组类型

<vi-select v-model="editSelect" edit :options="colorArray" placeholder="选择颜色"></vi-select>
<p>{{editSelect}}</p>

```html
  <vi-select v-model="editSelect" edit :options="colorArray" placeholder="选择颜色"></vi-select>
  <p>{{editSelect}}</p>
```

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
