:::demo

```html
<div class="p10">
  <div class="p10-tb">单文件上传</div>
  <vi-upload :max="1"></vi-upload>
</div>

<div class="p10">
  <div class="p10-tb">多文件上传</div>
  <vi-upload multiple></vi-upload>
</div>
```

:::

### 拖拽上传

:::demo

```html
<div class="p10">
  <vi-upload-drag ref="upload" multiple v-model="imgs"></vi-upload-drag>
</div>
<div class="p10">
  <vi-button @click="submit">提交</vi-button>
</div>
```

:::

### Attributes

| 参数     | 说明                                                    | 类型   | 默认值 | 可选值 |
| -------- | ------------------------------------------------------- | ------ | ------ | ------ |
| v-model  | 包含图片 url 的数组，删除文件和上传文件后会同步更新数组 | Array  | -      | -      |
| accept   | 接受的文件类型                                          | String | -      | -      |
| max      | 限制最大上传数量，默认最多 20 个                        | Number | -      | -      |
| multiple | 是否支持同时选择多个文件                                | -      | -      | -      |

<script>
export default {
  data() {
    return {
      imgs: []
    };
  },
  methods: {
    async submit() {
      await this.$refs.upload.submit("upload/test");
    }
  }
};
</script>

<style lang="scss">
.vi-upload-drag{
    height: 180px;
}
</style>
