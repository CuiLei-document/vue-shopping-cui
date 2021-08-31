<template>
  <div class="tab-bar">
    <slot />
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem.vue";
export default {
  components: { TabBarItem },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/css/hepler.scss";
.tab-bar {
  @extend %tabShow;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  // box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.15);
  justify-content: center;
  //   align-items: center;
  font-size: 16px;
}
</style>