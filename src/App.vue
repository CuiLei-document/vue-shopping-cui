<template>
  <div id="app">
    <router-view></router-view>
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
</style>
