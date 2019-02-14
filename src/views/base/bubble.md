<div class="bubble">
   <vi-button class="fl">
      按钮
      <vi-bubble placement="left">
         左浮动<br>左浮动
         <br>左浮动
         <br>左浮动
         <br>左浮动
         <br>左浮动
      </vi-bubble>
   </vi-button>
   <vi-button class="fl">
      按钮
      <vi-bubble>
         下居中下居中下居中
         <br>下居中下居中下居中
         <br>下居中下居中下居中
         <br>下居中下居中下居中
         <br>下居中下居中下居中
         <br>下居中下居中下居中
      </vi-bubble>
   </vi-button>
   <vi-button class="fl">
      按钮
      <vi-bubble placement="right">
         右浮动
         <br>右浮动
         <br>右浮动
         <br>右浮动
         <br>右浮动
         <br>右浮动
      </vi-bubble>
   </vi-button>
   <vi-button class="margin100">
      按钮
      <vi-bubble placement="top">
         上浮动
         <br>上浮动
         <br> 上浮动
      </vi-bubble>
      <vi-bubble placement="bottom">
         下浮动
         <br>下浮动
         <br>下浮动
         <br>下浮动
      </vi-bubble>
   </vi-button>
   <vi-button class="margin100">
      按钮
      <vi-bubble placement="left">
         左浮动
         <br>左浮动
         <br>左浮动
         <br>左浮动
         <br>左浮动
         <br>左浮动
      </vi-bubble>
      <vi-bubble placement="right">
         右浮动
         <br>右浮动
         <br>右浮动
         <br>右浮动
         <br>右浮动
         <br>右浮动
      </vi-bubble>
   </vi-button>
   <vi-button class="fr">
      按钮
      <vi-bubble>
         上右浮动上右浮动上右浮动
         <br>上右浮动上右浮动上右浮动
      </vi-bubble>
      <vi-bubble placement="right">
         右浮动
         <br>左浮动
         <br>右浮动
         <br>右浮动
         <br>右浮动
         <br>右浮动
      </vi-bubble>
   </vi-button>
   <vi-button class="bottom">
      按钮
      <vi-bubble placement="left">
         左浮动
         <br>左浮动
         <br>左浮动
         <br>左浮动
         <br>左浮动
         <br>左浮动
      </vi-bubble>
      <vi-bubble placement="bottom">
         下居中下居中
         <br>下居中下居中
         <br>下居中下居中
         <br>下居中下居中
      </vi-bubble>
      <vi-bubble placement="right">
         右浮动
         <br>右浮动
         <br>右浮动
         <br>右浮动
         <br>右浮动
         <br>右浮动
      </vi-bubble>
   </vi-button>
   <vi-button class="bottom-rigth">
      按钮
      <vi-bubble placement="bottom">
         下右浮动下右浮动下右浮动
         <br>下右浮动下右浮动下右浮动
      </vi-bubble>
      <vi-bubble placement="right">
         右浮动
         <br>右浮动
         <br>右浮动
         <br>右浮动
         <br>右浮动
         <br>右浮动
      </vi-bubble>
   </vi-button>
</div>


> bubble组件所属父节点必须拥有position属性，否则会导致定位错误

### attributes

* placement *String* - bubble显示方向

* gap *Number* - 填充间隙

### slot

* default - bubble容器内容



<script>
export default {
  name: "vi-dropdown",
  props: ["options"],
  data() {
    this.target = null;
    return {
      left: false,
      top: false
    };
  },
  methods: {
    //   click() {
    //     this.top = !this.top;
    //   }
  }
};
</script>


<style lang="scss">
.bubble {
  .button {
    position: relative;
    margin: 10px;
  }
  .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .bottom-rigth {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .margin100 {
    margin: 100px;
  }
}
</style>