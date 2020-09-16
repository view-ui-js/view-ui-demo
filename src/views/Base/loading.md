<Loading v-if="loading"></Loading>

<div class="p10">
    <Button @click="loading=!loading">进度条</Button>
</div>

<script>
export default {
  data() {
    return {
      loading: false
    };
  }
};
</script>

<style lang="scss">

</style>