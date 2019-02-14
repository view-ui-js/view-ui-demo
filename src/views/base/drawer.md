<vi-button @click="drawer=!drawer">左侧栏</vi-button>
<vi-drawer v-if="drawer" @close="drawer=false">
    内容...
</vi-drawer>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  }
};
</script>

<style lang="scss">

</style>