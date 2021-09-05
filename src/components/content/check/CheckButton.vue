<template>
  <div class="check" :class="{ active: isCheck }">
    <img src="~assets/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    isCheck: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.check {
  border-radius: 50%;
  border: 2px solid #aaa;
}
.active{
    background:red;
    border-color:red;
}
</style>