<template>
  <div class="DemoCode">
    <h4>演示代码</h4>
    <slot></slot>
    <div class="DemoCode-script">
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
.DemoCode {
  background-color: #e0e0e0;
  margin: 10px 0 0 0;
  h4 {
    line-height: 36px;
    margin: 0 0 0 10px;
  }
}
</style>