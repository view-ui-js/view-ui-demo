:::demo
```html
<vi-paging :data="paging"></vi-paging>
```
:::

<script>
export default {
  data() {
    return {
      paging: { page: 1, total: 200, limit: 20 }
    };
  }
};
</script>
