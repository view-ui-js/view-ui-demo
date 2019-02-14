### 单滑块

:::demo
```html
<div class="slider">
    <vi-slider :range="[0,500]" v-model="data" @change="change"></vi-slider>
</div>
<div class="p10">{{data}}</div>

<div class="slider">
    <div>带标尺</div>
    <vi-slider :range="[0,500]" :step="5" v-model="data1" @change="change"></vi-slider>
</div>
<div class="p10">{{data1}}</div>
```
:::



### 双滑块

:::demo
```html
<div class="slider">
    <vi-slider-range :range="[0,500]" v-model="data1" @change="change"></vi-slider-range>
</div>

<div class="slider">
    <div>带标尺</div>
    <vi-slider-range :range="[0,500]" :step="5" v-model="data1" unit="万" @change="change"></vi-slider-range>
</div>

<div class="slider">
    <div>还原值</div>
    <vi-slider-range :range="[0,500]" :step="5" v-model="data2" unit="个"></vi-slider-range>
</div>

<div class="p10">{{data2}}</div>
```
:::


<script>
export default {
  data() {
    return {
      data: [0, 200],
      data1: [0, 400],
      data2: [88, 398]
    };
  },
  methods: {
    change(data) {
      this.data = data;
    }
  }
};
</script>

<style lang="scss">
.slider {
  width: 380px;
  padding: 10px;
}
</style>