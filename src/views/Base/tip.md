<div class="tip">
  <Button class="block">
      Right Tip
      <Tip placement="right">提示...</Tip>
  </Button>
  <Button class="block">
      Left Tip
      <Tip placement="left">提示...</Tip>
  </Button>
  <Button class="block">
      Top Tip
      <Tip placement="top">提示...</Tip>
  </Button>
  <Button class="block">
      Bottom Tip
      <Tip placement="bottom">提示...</Tip>
  </Button>
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