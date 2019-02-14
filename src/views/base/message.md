:::demo
```html
<vi-button @click="$success('操作成功')">成功</vi-button>

<vi-button @click="$warning('警告')">警告</vi-button>

<vi-button @click="$error('操作失败')">失败</vi-button>

<vi-button @click="$load('加载中...')">加载中</vi-button>
```
:::

message组件为全局引用，可通过vm.$message访问，也可以直接在模板中使用$message('...')