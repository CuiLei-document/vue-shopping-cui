<template>
  <div class="goods">
    <goods-list-item
      class="goods-item"
      v-for="(item, index) in goods"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  components: { GoodsListItem },
  props: {
    goods: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped>
.goods {
  //   border: 1px solid red;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-left: 4px;
  padding-right: 4px;
  padding-bottom: 20px;
  // margin-bottom: 20px;
}
</style>