<template>
   <div class="flex-level">
      <div ref="mountNode" id="mountNode"></div>
   </div>
</template>

<script>
import G2 from "@antv/g2";
import DataSet from '@antv/data-set';
export default {
  mounted() {
    const { DataView } = DataSet;
    const data = [
      { item: "事例一", count: 40 },
      { item: "事例二", count: 21 },
      { item: "事例三", count: 17 },
      { item: "事例四", count: 13 },
      { item: "事例五", count: 9 }
    ];
    const dv = new DataView();
    dv.source(data).transform({
      type: "percent",
      field: "count",
      dimension: "item",
      as: "percent"
    });
    const chart = new G2.Chart({
      container: "mountNode",
      forceFit: true,
      height: window.innerHeight
    });
    chart.source(dv, {
      percent: {
        formatter: val => {
          val = val * 100 + "%";
          return val;
        }
      }
    });
    chart.coord("theta", {
      radius: 0.75
    });
    chart.tooltip({
      showTitle: false,
      itemTpl:
        '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
    });
    chart
      .intervalStack()
      .position("percent")
      .color("item")
      .label("percent", {
        formatter: (val, item) => {
          return item.point.item + ": " + val;
        }
      })
      .tooltip("item*percent", (item, percent) => {
        percent = percent * 100 + "%";
        return {
          name: item,
          value: percent
        };
      })
      .style({
        lineWidth: 1,
        stroke: "#fff"
      });
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