> input 的默认宽度为 100%，建议通过外部容器控制宽度

### Text

:::demo

```html
<div class="p10">
  <Input v-model="value1" @input="input" @change="change" placeholder="输入文本"></Input>
  <p>{{value1}}</p>
  <Button @click="setValue">外部赋值</Button>
</div>
```

:::

### 带图标

:::demo

```html
<div class="p10">
  <Input v-model="value2" placeholder="输入文本" icon="vd-dingwei"></Input>
  <p>{{value2}}</p>
</div>
```

:::

### 带单位

:::demo

```html
<div class="p10">
  <Input v-model="value3" placeholder="提示文本" unit="㎡"></Input>
  <p>{{value3}}</p>
</div>
```

:::

### Number

:::demo

```html
<div class="p10">
  <Input v-model="value4" type="number" placeholder="输入数值" unit="元" @click="click"></Input>
  <p>{{value4}}</p>
</div>
```

:::

### Date

:::demo

```html
<div class="p10">
  <Input type="date" v-model="date" placeholder="选择日期"></Input>
</div>
```

:::

<script>
export default {
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      value4: 23,
      date: ""
    };
  },
  methods: {
    input() {
      console.log("input");
    },
    change() {
      console.log("change");
    },
    setValue() {
      this.value1 = String(Math.random());
    },
    click() {
      console.log(999);
    }
  }
};
</script>

<style lang="scss">
</style>
