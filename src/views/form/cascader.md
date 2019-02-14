### 级联菜单

<div class="p10" style="width:360px">
    <vi-cascader v-model="value" :options="area" placeholder="选择地区"></vi-cascader>
</div>

<script>
export default {
  data() {
    return {
      value: ["广东"],
      area: {
        gd: {
          value: "广东",
          subset: {
            sz: {
              value: "深圳",
              subset: {
                ft: {
                  value: "福田",
                  subset: {
                    ba: "购物公园",
                    ns: "华强北"
                  }
                },
                ba: {
                  value: "宝安",
                  subset: {
                    ba: "灵芝",
                    ns: "宝体"
                  }
                },
                ns: "南山"
              }
            },
            gz: {
              value: "广州",
              subset: {
                c1: "天河",
                c2: "番禺"
              }
            },
            hz: "惠州",
            dw: "东莞",
            jm: "江门",
            jy: "揭阳",
            zh: "珠海",
            yf: "云浮",
            mm: "茂名",
            zs: "中山",
            fs: "佛山",
            hy: "河源",
            mz: "梅州",
            xy: "新余",
            zj: "湛江",
          }
        },
        zj: {
          value: "浙江",
          subset: {
            c1: {
              value: "杭州"
            }
          }
        },
        hb: {
          value: "湖北",
          subset: {
            wh: {
              value: "武汉",
              subset: {
                wc: "武昌",
                hk: "汉口"
              }
            },
            jz: "荆州"
          }
        }
      }
    };
  },
  methods: {}
};
</script>

<style lang="scss">

</style>