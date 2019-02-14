> input的默认宽度为100%，建议通过外部容器控制宽度

:::demo
```html
<vi-button @click="setValue">外部更新值</vi-button>
<div class="p10">
  <vi-input v-model="value1" @input="input" @change="change" placeholder="提示文本"></vi-input>
  <p>{{value1}}</p>
</div>
```
:::

### 带图标

:::demo
```html
<div class="p10">
  <vi-input v-model="value2" placeholder="提示文本" iconfont="&#xe640;"></vi-input>
  <p>{{value2}}</p>
</div>
```
:::


### 带单位

:::demo
```html
<div class="p10">
  <vi-input v-model="value3" placeholder="提示文本" unit="㎡"></vi-input>
</div>
```
:::

:::demo
```html
<div class="p10">
  <vi-input v-model="value3" placeholder="提示文本" unit="-----㎡-----"></vi-input>
</div>
```
:::

<p>{{value3}}</p>

<script>
export default {
  data() {
    return {
      value1: "",
      value2: "",
      value3: ""
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
      this.value1 = Date.now();
    }
  }
};
</script>

<style lang="scss">
</style>
