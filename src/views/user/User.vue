<template>
  <div>
    <nav-bar class="navbar">
      <template v-slot:content>
        <div>磊哥小商城</div>
      </template>
    </nav-bar>

    <user-info></user-info>
    <user-select></user-select>
    <user-list :list="x"></user-list>
    <user-list :list="y"></user-list>
  </div>
</template>

<script>
import UserInfo from "./userChild/UserInfo.vue";
import UserSelect from "./userChild/UserSelect.vue";
import UserList from "./userChild/UserList.vue";

import NavBar from "common/NavBar.vue";
export default {
  components: { NavBar, UserInfo, UserList, UserSelect },
  data: function () {
    return {
      x: [
        { title: "我的消息", icon: "email" },
        { title: "我的积分", icon: "jifen" },
        { title: "超级VIP", icon: "king" },
      ],
      y: [
        { title: "我的购物车", icon: "shopping" },
        { title: "下载购物App", icon: "bag" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  background: linear-gradient(
    140deg,
    rgba(103, 246, 228, 1) 0%,
    rgba(128, 203, 251, 1) 100%
  );

  color: white;
}
</style>