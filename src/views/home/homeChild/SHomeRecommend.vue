<template>
  <div class="home-recommend">
    <div
      class="home-recommend-item"
      v-for="(item, index) in recommend"
      :key="index"
    >
      <a href="item.link">
        <img :src="item.image" alt="" />
        <div>
          {{ item.title }}
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
      type: Array,
      default: [],
    },
  },
};
</script>
<style lang="scss" scoped>
.home-recommend {
  display: flex;
  justify-content: center;
  font-size: 16px;
  color: red;
  padding: 10px 0 20px;
  border-bottom: 6px solid #eee;
  .home-recommend-item {
    display: flex;
    text-align: center;
    justify-content: center;
    flex: 1;
    > a {
      > img {
        width: 65px;
        height: 65px;
      }
    }
  }
}
</style>