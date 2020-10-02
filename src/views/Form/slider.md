### 单滑块

:::demo
```html
<div class="slider">
    <Slider :min="0" :max="500" v-model="data" @change="change"></Slider>
</div>
<div class="p10">{{data}}</div>

<div class="slider">
    <div>带标尺</div>
    <Slider :min="0" :max="500" :step="5" v-model="data1" @change="change"></Slider>
</div>
<div class="p10">{{data1}}</div>
```
:::



### 双滑块

:::demo
```html
<div class="slider">
    <Slider :min="0" :max="500" v-model="data1" range @change="change"></Slider>
</div>

<div class="slider">
    <div>带标尺</div>
    <Slider :min="0" :max="500" :step="5" v-model="data1" unit="万" range @change="change"></Slider>
</div>

<div class="slider">
    <div>还原值</div>
    <Slider :min="0" :max="500" :step="5" v-model="data2" unit="个" range></Slider>
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