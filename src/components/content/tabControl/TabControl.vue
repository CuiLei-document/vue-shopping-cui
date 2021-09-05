<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      @click="tabIndex(index)"
      :class="{ active: index === currentIndex }"
    >
      <span>
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
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
    tabIndex(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);  
    },
  },
};
</script>
<style lang="scss" scoped>
.tab-control {
  display: flex;
  padding: 8px 0;
  height: 44px;
  line-height: 44px;
  font-size: 16px;
  background: rgb(250, 248, 248);
  &-item {
    text-align: center;
    flex: 1;
    span {
      padding: 4px;
    }
  }
  .active {
    color: red;
  }
  .active span {
    border-bottom: 2px solid red;
  }
}
</style>