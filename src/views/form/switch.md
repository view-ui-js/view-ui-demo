:::demo
```html
  <vi-button @click="setValue">外部更新值</vi-button>
  <div class="p10">
    <vi-switch v-model="data"></vi-switch>
  </div>
  <div class="p10">
    <vi-switch :disable="true" v-model="data"></vi-switch>
  </div>
  <div class="p10">{{data}}</div>
```
:::

<script>
export default {
  data() {
    return {
      data: false
    };
  },
  methods: {
    setValue() {
      this.data = !this.data;
    }
  }
};
</script>

<style lang="scss">
</style>
