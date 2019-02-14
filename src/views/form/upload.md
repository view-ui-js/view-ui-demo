常规的图片预览上传方式是选择图片后自动上传，然后返回url填充到img src，浏览器自动下载图片显示。这样做的弊端是用户选择的所有文件都会被上传，同时上传的时候需要等待和显示上传进度，而最终所有没有被引用的图片都会变成垃圾文件。

不同与常规图片文件方式，该组件添加图片时仅在本地预览。用户点击提交按钮后，首先通过执行组件内部的submit方法上传图片，等待图片上传完成后会更新url数组，最后提交数据。

相比选择图片后自动上传方式，在提交数据前的所有图片操作都不需要提交到服务端，大大减少了产生垃圾文件的概率。

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

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|------|------|
| v-model | 包含图片url的数组，删除文件和上传文件后会同步更新数组 | Array | - | - |
| accept | 接受的文件类型 | String | - | - |
| max | 限制最大上传数量，默认最多20个 | Number | - | - |
| multiple | 是否支持同时选择多个文件 | - | - | - |


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
</style>
