:::demo
```html
  <div class="tag">
    <div class="p10">
        <Tag v-model="data"></Tag>
    </div>
    <div class="p10">
        {{data}}
    </div>
  </div>
```
:::

<script>
export default {
  data() {
    return {
      data: ["孙悟空", "比克", "布玛", "龟仙人","弗利萨"]
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.tag {

}
</style>
