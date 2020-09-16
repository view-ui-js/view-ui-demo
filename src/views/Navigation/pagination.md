:::demo
```html
<Pagination :page="page" :total="total" :limit="limit"></Pagination>
```
:::

<script>
export default {
  data() {
    return { page: 1, total: 200, limit: 20 };
  }
};
</script>
