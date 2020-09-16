:::demo
```html
<Button @click="$success('操作成功')">success</Button>

<Button @click="$warning('警告')">warning</Button>

<Button @click="$error('操作失败')">error</Button>

<Button @click="$info('提示信息...')">info</Button>

<Button @click="$load('加载中...')">加载中</Button>
```
:::

message组件为全局引用，可通过vm.$message访问，也可以直接在模板中使用$message('...')