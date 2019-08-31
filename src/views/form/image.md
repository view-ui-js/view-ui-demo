:::demo

```html
<div class="p10">
  <vi-image-upload
    ref="upload"
    :base="base"
    multiple
    v-model="form.images"
    @preview="preview"
  ></vi-image-upload>
</div>
```

:::

<script>
export default {
  data() {
    const { base } = this.config.upload;
    return {
      base,
      form: {
         images:[],
         name:'test'
      }
    };
  },
  methods: {
    async submit() {
      // await this.$refs.upload.submit("upload/test");
    },
    preview(index){
      const { base } = this;
      const { images, name } = this.form;
      this.$imgPreview({ base, images, index, title: name });
    }
  }
};
</script>

<style lang="scss">
.vi-upload-drag{
    height: 180px;
}
</style>

### Attributes

| 参数     | 说明                     | 类型 | 默认值 | 可选值 |
| -------- | ------------------------ | ---- | ------ | ------ |
| multiple | 是否支持同时选择多个文件 | -    | -      | -      |
