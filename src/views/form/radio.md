<vi-radio v-model="radio" :label="true">是</vi-radio>
<vi-radio v-model="radio" :label="false">否</vi-radio>
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
