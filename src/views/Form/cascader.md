### 级联菜单

<div class="p10">
    <Cascader v-model="value" :options="area" placeholder="选择地区"></Cascader>
</div>

<script>
export default {
  data() {
    return {
      value: ["广东"],
      area: [
        {
          label: "广东",
          value: "gd",
          children: [
            {
              label: "深圳",
              value: "sz",
              children: [
                {
                  label: "福田",
                  value: "ft",
                  children: [
                    {
                      label: "购物公园",
                      value: "gwgy"
                    },
                    {
                      label: "华强北",
                      value: "hqb"
                    }
                  ]
                },
                {
                  label: "宝安",
                  value: "ba",
                  children: [
                    {
                      label: "灵芝",
                      value: "ba"
                    },
                    {
                      label: "宝体",
                      value: "ns"
                    }
                  ]
                },
                {
                  label: "南山",
                  value: "ns"
                }
              ]
            },
            {
              label: "广州",
              value: "gz",
              children: [
                {
                  label: "天河",
                  value: "c1"
                },
                {
                  label: "番禺",
                  value: "c2"
                }
              ]
            },
            {
              label: "惠州",
              value: "hz"
            },
            {
              label: "东莞",
              value: "dw"
            },
            {
              label: "江门",
              value: "jm"
            },
            {
              label: "揭阳",
              value: "jy"
            },
            {
              label: "珠海",
              value: "zh"
            },
            {
              label: "云浮",
              value: "yf"
            },
            {
              label: "茂名",
              value: "mm"
            },
            {
              label: "中山",
              value: "zs"
            },
            {
              label: "佛山",
              value: "fs"
            },
            {
              label: "河源",
              value: "hy"
            },
            {
              label: "湛江",
              value: "zj"
            }
          ]
        },
        {
          label: "浙江",
          value: "zj",
          children: [
            {
              label: "杭州",
              value: "c1"
            }
          ]
        },
        {
          label: "湖北",
          value: "hb",
          children: [
            {
              label: "武汉",
              value: "wh"
            },
            {
              label: "荆州",
              value: "jz"
            }
          ]
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss">

</style>