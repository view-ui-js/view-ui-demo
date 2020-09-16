:::demo
```html
  <Button @click="setValue">外部更新值</Button>
  <div class="p10">
    <vSwitch v-model="data"></vSwitch>
  </div>
  <div class="p10">
    <vSwitch :disable="true" v-model="data"></vSwitch>
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
