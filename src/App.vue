<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <my-tab-bar />
  </div>
</template>
<script>
import myTabBar from "./components/myTabbar.vue";
export default {
  components: { myTabBar },
};
</script>
<style lang="scss">
body{
  padding:0;
  margin:0;
  box-sizing: border-box;
  background:#f2f2f2;
}
</style>
