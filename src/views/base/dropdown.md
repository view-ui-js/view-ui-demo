<div class="dropdown">
  <vi-dropdown-menu name="菜单" :options="options" @change="change"></vi-dropdown-menu>
  <vi-dropdown name="自定义内容">
      自定义内容.........
      <br> 自定义内容.........
  </vi-dropdown>
  <vi-dropdown name="日期">
      <vi-date-inline v-model="date"></vi-date-inline>
  </vi-dropdown>
  <vi-dropdown name="日期范围">
      <vi-date-inline v-model="date"></vi-date-inline><vi-date-inline v-model="date"></vi-date-inline>
  </vi-dropdown>
  <vi-dropdown name="滑块">
      <div class="bubble" @click.stop>
        <vi-slider :range="[0,500]" :step="5" v-model="data2"></vi-slider>
        <vi-slider-range :range="[0,500]" :step="5" v-model="data2"></vi-slider-range>
      </div>
  </vi-dropdown>
  <vi-dropdown-range name="范围" unit="元" :step="5" :options="rangeOptions" v-model="data2" @change="change({'floor':{'$scope':$event}})"></vi-dropdown-range>
  <vi-button @click="reset">初始化</vi-button>
  <vi-dropdown-menu class="fr" name="右自适应" :options="options2" @change="change"></vi-dropdown-menu>
</div>


<script>
export default {
  data() {
    return {
      options: {
        添加: "v1",
        移动: "v2",
        删除: "v3"
      },
      data1: [220, 430],
      data2: [99, 360],
      rangeOptions: [[0, 100], [100, 200], [200, 300], [300, 400], [400, 500]],
      options2: {
        价格: "v1",
        "时间---------------": "v2",
        状态: "v3"
      },
      date: "2018-2-26"
    };
  },
  methods: {
    change(data) {
      // console.log(data);
    },
    reset() {
      this.$children.forEach(item => {
        item._Reset && item._Reset();
      });
    }
  }
};
</script>


<style lang="scss">
.dropdown {
  .bubble {
    width: 260px;
    padding: 18px;
  }
}
</style>
