<template>
  <grid-view>
    <goods-list-item
      v-for="(item, index) in categoryDetail"
      :key="index"
      :item="item"
    ></goods-list-item>
  </grid-view>
</template>

<script>
import GridView from "common/gridView/GridView";
import GoodsListItem from "content/goods/GoodsListItem";
export default {
  components: { GridView, GoodsListItem },
  props: {
    categoryDetail: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
};
</script>