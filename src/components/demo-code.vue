<template>
  <div class="demo-code">
    <h4>示例代码</h4>
    <slot></slot>
    <div class="demo-code-script">
      <slot name="script"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.demo-code {
  background-color: #e0e0e0;
  margin: 10px 0 0 0;
  h4 {
    line-height: 36px;
    margin: 0 0 0 10px;
  }
}
</style>