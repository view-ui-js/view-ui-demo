dialog 由 header、main、footer 三部分组成，配置优先级依次为 slot -> events -> attributes

:::demo
```html
<Button @click="dialog=true">dialog</Button>
<Button @click="dialogBlank=true">空白</Button>
<Button @click="dialogTab=true">dialog tab</Button>
<Button @click="$confirm('hello！')">$confirm()字符串</Button>
<Button @click="confirm">$confirm()模态</Button>
```

:::
<Dialog v-if="dialog" title="提示" @confirm="dialog=false" @close="dialog=false" @mask="dialog=false">
    <div slot="header">自定义header</div>
    内容区
    <template slot="footer">
      <Button @click="dialog=false">取消</Button>
      <Button color="success" @click="dialog=false">确认</Button>
    </template>
</Dialog>

<Dialog v-if="dialogTab" @confirm="dialogTab=false" @close="dialogTab=false">
    <Tabs :tabs="tabs">
      <div slot="商品信息" class="p10">
          <br><br><br>
          <Select :options="colors" v-model="color" placeholder="选择颜色"></Select>
          <div>{{color}}</div>
          <br><br><br>
          <Select placeholder="选择颜色">
            <Option v-for="(key, value) in units" :key="key">{{value}}</Option>
          </Select>
          <div>{{unit}}</div>
          <br><br><br>
          <Select :options="units" v-model="unit" placeholder="选择颜色"></Select>
          <div>{{unit}}</div>
          <br><br><br>
      </div>
      <div slot="价格属性" class="p10">
          b
      </div>
      <div slot="更多" class="p10">
          c
      </div>
    </Tabs>
</Dialog>

<Dialog v-if="dialogBlank" @close="dialogBlank=false">
    空容器
</Dialog>

#### header 示例

```html
<template>
  <div>
    <!-- attributes定义title时，显示footer -->
    <Dialog title="提示"></Dialog>

    <!-- attributes和slot同时存在时，以slot为准 -->
    <Dialog title="提示">
      <div slot="title">自定义标题</div>
    </Dialog>

    <!-- attributes和slot都不存在时，不显示header -->
    <Dialog></Dialog>
  </div>
</template>
```

#### footer 示例

```html
<template>
  <div>
    <!-- events绑定confirm时，显示footer -->
    <Dialog @confirm="confirm"></Dialog>

    <!-- events和slot同时存在时，以slot为准 -->
    <Dialog @confirm="confirm">
      <div slot="footer">自定义footer</div>
    </Dialog>

    <!-- events和slot都不存在时，不显示footer -->
    <Dialog></Dialog>
  </div>
</template>
```

### Attributes

| 参数        | 说明                     | 类型   | 默认值 | 可选值 |
| ----------- | ------------------------ | ------ | ------ | ------ |
| title       | 定义标题                 | String | -      | -      |
| width       | 定义弹框宽度             | String | -      | -      |
| hide-mask   | 是否启用遮罩层，默认启用 | -      | -      | -      |
| lock-scroll | 是否溢出滚动，默认否     | -      | -      | -      |

### Slots

| name   | 说明         |
| ------ | ------------ |
| header | 定义标题     |
| footer | 定义弹框宽度 |

### Events

| 事件名称 | 说明       | 回调参数 |
| -------- | ---------- | -------- |
| confirm  | 确认       | String   | - | - |
| close    | 关闭       | String   | - | - |
| mask     | 点击遮罩层 | -        | - | - |

### 模态函数 this.\$confirm(options)

内置成功（success）、警告（warning）、禁用（disable）三种模态，区别仅仅是按钮颜色不同

- `body` _String_ - 提示文本

- `model` _String_ - 显示模式

- `ButtonText` _String_ - 自定义按钮文本

- `confirm` _Function_ - 确认回调

#### 模态示例

```html
<script>
  export default {
    methods: {
      dialog() {
        // 成功
        this.$confirm({
          body: "是否确认",
          model: "warning",
          confirm() {
            console.log(666);
          },
        });

        // 警告
        this.$confirm({
          body: "是否确认删除",
          model: "warning",
          ButtonText: "删除",
          confirm() {
            console.log(666);
          },
        });
      },
    },
  };
</script>
```

<script>
export default {
  data() {
    return {
      dialog: false,
      dialogTab: false,
      dialogBlank: false,
      tabs: {
        商品信息: "商品信息",
        价格属性: "价格属性",
        更多: "更多"
      },
      units: {
        a: "个",
        b: "只",
        c: "包"
      },
      unit: "包",
      colors: {
        a: "黑",
        b: "白",
        c: "红"
      },
      color: "红"
    };
  },
  methods: {
    confirm() {
      this.$confirm({
        body: "是否确认删除",
        model: "warning",
        ButtonText: "删除",
        confirm() {
          console.log(666);
        }
      });
    }
  },
  mounted() {}
};
</script>
