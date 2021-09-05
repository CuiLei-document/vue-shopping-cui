<template>
  <div class="cart-bottom">
    <div class="content">
      <div class="check-content">
        <check-button
          class="check"
          :is-check="isSelectAll"
          @click.native="onSelectAll"
        />
        <span>全选</span>
      </div>
      <div class="total">
        <span>合计:</span>
        <span>{{ totalPrice }}</span>
      </div>
    </div>
    <div class="btn">
      <div>计算({{ totalLength }})</div>
    </div>
  </div>
</template>

<script>
import CheckButton from "content/check/CheckButton.vue";

import { mapState } from "vuex";
export default {
  components: { CheckButton },
  computed: {
    ...mapState(["cartList"]),
    totalPrice() {
      return (
        "￥" +
        this.$store.getters.cartList
          .filter((item) => {
            return item.check;
          })
          .reduce((oldValue, nowValue) => {
            return (oldValue += nowValue.price * nowValue.count);
          }, 0)
      );
    },
    totalLength() {
      return this.cartList.filter((item) => item.check).length;
    },
    isSelectAll() {
      if (this.cartList.length === 0) return false;
      return !this.cartList.find((item) => !item.check);
    },
  },
  methods: {
    onSelectAll() {
      if(this.isSelectAll){
          this.cartList.forEach(item => item.check = false)
      }else{
          this.cartList.forEach(item => item.check = true)
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.cart-bar {
  height: 44px;
  //   background: red;
}
</style>
<style lang="scss" scoped>
.cart-bottom {
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  height: 49px;
  .content {
    display: flex;
    align-items: center;
    width: 180px;
    font-size: 16px;
    vertical-align: middle;
    padding-bottom: 6px;
    .check-content {
      display: flex;
      align-items: center;
      //   margin-right: 20px;
      .check {
        width: 16px;
        height: 16px;
        margin-right: 4px;
      }
    }
    .total {
      display: flex;
      align-items: center;
      margin-left: 20px;
      justify-content: center;
      //   margin-bottom: 8px;
    }
  }
  .btn {
    width: 100px;
    line-height: 49px;
    background: #ff5300;
    color: white;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>