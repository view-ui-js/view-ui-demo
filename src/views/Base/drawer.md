<Button @click="drawer=!drawer">侧栏</Button>
<Drawer v-if="drawer" @close="drawer=false">
    内容...
</Drawer>

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