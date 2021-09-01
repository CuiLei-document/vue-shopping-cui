<template>
  <TabBar>
    <tab-bar-item path="/home">
      <template v-slot:tabbar-icon>
        <img src="../assets/images/home.svg" alt="" />
      </template>
      <template v-slot:tabbar-active-icon>
        <img src="../assets/images/active-home.svg" alt="" />
      </template>
      <template v-slot:tarbar-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <template v-slot:tabbar-icon>
        <img src="../assets/images/classification.svg" alt="" />
      </template>

      <template v-slot:tabbar-active-icon>
        <img src="../assets/images/active-classification.svg" alt="" />
      </template>
      <template v-slot:tarbar-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/shopping">
      <template v-slot:tabbar-icon>
        <img src="../assets/images/shoppingCart.svg" alt="" />
      </template>
      <template v-slot:tabbar-active-icon>
        <img src="../assets/images/active-shoppingCart.svg" alt="" />
      </template>
      <template v-slot:tarbar-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/user">
      <template v-slot:tabbar-icon>
        <img src="../assets/images/user.svg" alt="" />
      </template>
      <template v-slot:tabbar-active-icon>
        <img src="../assets/images/active-user.svg" alt="" />
      </template>
      <template v-slot:tarbar-text>
        <div>用户</div>
      </template>
    </tab-bar-item>
  </TabBar>
</template>

<script>
import TabBar from "../views/tabbars/BottomBar.vue";
import TabBarItem from "../views/tabbars/TabBarItem.vue";
export default {
  components: { TabBar, TabBarItem },
};
</script>