<template>
  <Scroll class="tab-menu">
    <div class="menu-list">
      <div
        class="menu-list-item"
        v-for="(item, index) in categories"
        :key="index"
        @click="itemClick(index)"
        :class="{ active: index === currentIndex }"
      >
        {{ item.title }}
      </div>
    </div>
  </Scroll>
</template>

<script>
import Scroll from "common/scroll/Scroll.vue";
export default {
  components: { Scroll },
  props: {
    categories: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("selectItem", index);
    },
  },
};
</script>
<style lang="scss" scoped>
.tab-menu {
  background-color: #f6f6f6;
  height: 100%;
  width: 100px;
  box-sizing: border-box;
  .menu-list-item {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
    position: relative;
    &.active {
      background: rgb(255, 253, 255);
      color: red;
      transition: all 1s;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 3px;
        height: 100%;
        background: red;
      }
    }
  }
}
</style>