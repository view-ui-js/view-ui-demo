<div class="p10 w300">
    <div>数值</div>
    <InputRange v-model="number"></InputRange>
    <p>{{number}}</p>
</div>

<div class="p10 w300">
    <div>使用插槽自定义中间文本</div>
    <InputRange v-model="number">:</InputRange>
    <p>{{number}}</p>
</div>

<div class="p10 w300">
    <div>带图标</div>
    <InputRange v-model="number" iconfont="&#xe628;"></InputRange>
    <p>{{number}}</p>
</div>

<div class="p10 w300">
    <div>字符串</div>
    <InputRange v-model="string" type="text" :placeholder="['开始时间','结束时间']"></InputRange>
    <p>{{string}}</p>
</div>

<div class="p10">
    <div>对象结构range</div>
    <InputRange v-model="kv" :keys="['min','max']" type="number"></InputRange>
    <p>{{kv}}</p>
</div>

<script>
export default {
  data() {
    return {
      number: [1, 15],
      string: ["2018-05-26", "2018-09-26"],
      kv: {
        min: 666,
        max: 888
      }
    };
  }
};
</script>

<style lang="scss">
</style>
