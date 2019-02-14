<template>
   <div class="flex-level">
      <div ref="mountNode" id="mountNode"></div>
   </div>
</template>

<script>
import G2 from "@antv/g2";
export default {
  mounted() {
    const data = [
      { year: "1951 年", sales: 38 },
      { year: "1952 年", sales: 52 },
      { year: "1956 年", sales: 61 },
      { year: "1957 年", sales: 145 },
      { year: "1958 年", sales: 48 },
      { year: "1959 年", sales: 38 },
      { year: "1960 年", sales: 38 },
      { year: "1962 年", sales: 38 }
    ];
    const chart = new G2.Chart({
      container: "mountNode",
      forceFit: true,
      height: window.innerHeight
    });
    chart.source(data);
    chart.scale("sales", {
      tickInterval: 20
    });
    chart.interval().position("year*sales");
    chart.render();
  }
};
</script>

<style lang="scss">
#mountNode {
  width: 800px;
  height: 550px;
}
</style>