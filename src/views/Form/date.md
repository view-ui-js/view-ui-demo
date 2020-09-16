<div class="date">
  <div class="flex-level">
      <div class="p10">
        <DateInline :value="ymd"></DateInline>
      </div>
      <div class="p10">
        <div>单选</div>
        <DatePicker v-model="date"></DatePicker>
        <div>{{date}}</div>
      </div>
      <div class="p10">
        <div>范围</div>
        <DatePicker-range v-model="range"></DatePicker-range>
        <div>{{range}}</div>
      </div>
  </div>
</div>

<script>
export default {
  data() {
    return {
      ymd: [2018, 2, 26],
      date: "2018-2-26",
      range: ["2018-5-15", "2018-6-21"]
    };
  }
};
</script>

<style lang="scss">
.date {
  overflow: visible;
  .flex-level {
    > div {
      flex: 1;
      flex-grow: 1;
    }
  }
}
</style>
