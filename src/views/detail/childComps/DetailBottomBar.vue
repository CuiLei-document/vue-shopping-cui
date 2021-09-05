<template>
  <div class="bottom-bar">
    <div class="bar-left bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-right bar-right">
      <div class="cart" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    addCart(){
      this.$emit('addCart')
    }
  }
};
</script>
<style lang="scss" scoped>
.bottom-bar {
  height: 58px;
  background: #fcfcfc;
  position: relative;
  left: 0;

  z-index: 10;
  display: flex;
  justify-content: space-between;
  padding-left: 6px;
  > .bar-left {
    display: flex;
    width: 50%;
    text-align: center;
    justify-content: space-between;
    color: rgb(141, 140, 140);

    .service,
    .shop,
    .select {
      display: block;
      width: 22px;
      height: 22px;
      margin: 10px auto 3px;
    }
    .select {
      background: url("~assets/detail/detail_bottom.png") 0 0/100%;
    }
    .shop {
      background: url("~assets/detail/cart.png") 0 0/100%;
    }
    .service {
      background: url("~assets/detail/service.svg") 0 0/100%;
    }
  }
  > .bar-right {
    width: 50%;
    display: flex;
    margin-left: 14px;
    font-size: 16px;

    > .cart {
      background: #f6d70d;
      line-height: 58px;
    }
    > .buy {
      background: #f97595;
      line-height: 58px;
      flex: 1;
      text-align: center;
      color: white;
    }
  }
}
</style>