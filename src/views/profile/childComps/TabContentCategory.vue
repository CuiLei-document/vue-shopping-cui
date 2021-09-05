<template>
  <div>
    <grid-view
      :cols="2"
      :lineSpace="15"
      :v-margin="20"
      v-if="subcategories.list"
    >
      <div
        class="item"
        v-for="(item, index) in subcategories.list"
        :key="index"
      >
        <a :href="item.link">
          <img class="item-img" :src="item.image" alt="" />
          <div class="item-title">{{ item.title }}</div>
        </a>
      </div>
    </grid-view>
  </div>
</template>

<script>
import GridView from "common/gridView/GridView.vue";
export default {
  components: { GridView },
  props: {
    subcategories: {
      type: Object,
      default: function () {
        return [];
      },
    },
  },
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
}
.item {
  text-align: center;
  font-size: 12px;
  //   background:red;
}
.item-img {
  width: 80%;
}
.item-text {
  margin-top: 15px;
}
</style>