<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left" />
    </div>
    <div class="content">
      <slot name="content" />
    </div>
    <div class="right">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/hepler.scss";
$height: 44px;
.nav-bar {
  @extend %navBar;
  display: flex;
  height: $height;
  line-height: $height;
  text-align: center;
  > .left {
    width: 30px;
  }
  > .content {
    flex-grow: 1;
  }
  > .right {
    width: 30px;
  }
}
</style>