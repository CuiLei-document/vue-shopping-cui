<template>
  <div class="shopping">
    <!-- 顶部栏 -->
    <nav-bar class="nav">
      <template v-slot:content>
        <div>购物车({{ cartList.length }})</div>
      </template>
    </nav-bar>
      <!-- 商品选择 -->
    <cart-list />
    <!-- 底部菜单栏 -->
    <cart-bottom-bar />
  </div>
</template>

<script>
import CartList from "./childlist/CartList.vue";
import CartBottomBar from './childlist/CartBottomBar.vue'

import NavBar from "common/NavBar.vue";

import { mapState, mapGetters } from "vuex";

export default {
  components: { CartList, CartBottomBar, NavBar },
  computed: {
    ...mapState(["cartList"]),
    ...mapGetters(["cartLength"]),
  },
};
</script>
<style lang="scss" scoped>
.shopping{
    height: 100vh;
}
.nav {
  background: rgb(204, 80, 100);
  color: white;
}
</style>