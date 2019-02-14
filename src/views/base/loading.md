<vi-loading v-if="loading"></vi-loading>

<div class="p10">
    <vi-button @click="loading=!loading">进度条</vi-button>
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