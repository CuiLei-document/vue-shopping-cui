<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
      message: "hihihi",
    };
  },
  methods: {
    // 返回顶部
    scrollTo(x, y, time = 300) {
      this.scroll?.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll?.finishPullUp();
    },
    refresh() {
      this.scroll?.refresh();
    },
  },
  mounted() {
    // 创建实例
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    // 滚动事件监听
    this.scroll.on("scroll", (e) => {
      this.$emit("scroll", e);
    });
    // 上拉事件
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
};
</script>

<style lang="scss" scoped>
</style>