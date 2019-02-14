<div class="p10 w300">
    <div>数值</div>
    <vi-input-range v-model="number"></vi-input-range>
    <p>{{number}}</p>
</div>

<div class="p10 w300">
    <div>使用插槽自定义中间文本</div>
    <vi-input-range v-model="number">:</vi-input-range>
    <p>{{number}}</p>
</div>

<div class="p10 w300">
    <div>带图标</div>
    <vi-input-range v-model="number" iconfont="&#xe628;"></vi-input-range>
    <p>{{number}}</p>
</div>

<div class="p10 w300">
    <div>字符串</div>
    <vi-input-range v-model="string" type="text" :placeholder="['开始时间','结束时间']"></vi-input-range>
    <p>{{string}}</p>
</div>

<div class="p10 w300">
    <div>对象结构range</div>
    <vi-input-range v-model="kv" :keys="['min','max']" type="number"></vi-input-range>
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
.w300 {
  width: 300px;
}
</style>
