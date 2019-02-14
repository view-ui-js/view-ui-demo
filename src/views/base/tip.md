<div class="tip">
  <vi-button class="block">
      Right Tip
      <vi-tip placement="right">提示...</vi-tip>
  </vi-button>
  <vi-button class="block">
      Left Tip
      <vi-tip placement="left">提示...</vi-tip>
  </vi-button>
  <vi-button class="block">
      Top Tip
      <vi-tip placement="top">提示...</vi-tip>
  </vi-button>
  <vi-button class="block">
      Bottom Tip
      <vi-tip placement="bottom">提示...</vi-tip>
  </vi-button>
</div>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.tip {
  .block {
    width: 130px;
    display: block;
    margin: 80px;
  }
}
</style>