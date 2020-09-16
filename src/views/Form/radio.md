<Radio v-model="radio" :label="true">是</Radio>
<Radio v-model="radio" :label="false">否</Radio>
<div class="p10-tb">{{radio}}</div>

<script>
export default {
  data() {
    return {
      radio: true
    };
  },
  methods: {}
};
</script>

<style lang="scss">
</style>
