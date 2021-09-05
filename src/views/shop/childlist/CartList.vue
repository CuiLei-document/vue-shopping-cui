<template>
  <div class="cart-list">
    <Scroll class="scroll" ref="scroll">
      <cart-list-item
        v-for="(item, index) in cartList"
        :key="index"
        :item-info="item"
      />
    </Scroll>
  </div>
</template>

<script>
import Scroll from "common/scroll/Scroll.vue";
import CartListItem from "./CartlIstItem.vue";

import { mapGetters } from "vuex";
export default {
  components: { CartListItem, Scroll },
  computed: {
    ...mapGetters(["cartList"]),
  },
  activated() {
    this.$refs.scroll.refresh();
    console.log(this.cartList)
  },
};
</script>
<style lang="scss" scoped>
.cart-list {
  height: calc(100% - 44px - 49px - 44px);
  .scroll {
    height: 100%;
    overflow: hidden;
  }
}
</style>