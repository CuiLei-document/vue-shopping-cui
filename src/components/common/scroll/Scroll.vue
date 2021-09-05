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
    // 再次计算加载值
    finishPullUp() {
      this.scroll?.finishPullUp();
    },
    // 时时刷新
    refresh() {
      this.scroll?.refresh();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
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
    // 上拉加载更多触发事件
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
        console.log('上拉加载更多')
      });
    }
  },
};
</script>

<style lang="scss" scoped>
</style>