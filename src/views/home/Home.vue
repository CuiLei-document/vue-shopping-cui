<template>
  <div id="home">
    <NavBar class="navbar">
      <template v-slot:content> 购物 </template>
    </NavBar>
    <TabControl
      ref="tabControl1"
      :titles="tabTitles"
      @tabClick="tabClick"
      v-show="isTabControl"
      class="flex"
    ></TabControl>
    <Scroll
      class="scroll"
      ref="scroll"
      :probe-type="2"
      @scroll="contentScroll"
      :pullUpLoad="true"
      @pullingUp="loadMode"
    >
      <Swiper @swiperImgLoad="swiperImgLoad" />
      <home-recommend :recommend="recommend"></home-recommend>
      <featrue-home></featrue-home>
      <TabControl
        ref="tabControl2"
        :titles="tabTitles"
        @tabClick="tabClick"
      ></TabControl>
      <GoodsList :goods="tabItem"></GoodsList>
    </Scroll>
    <BackTop @click.native="backTop" v-show="isVisible" />
  </div>
</template>

<script>
import HomeRecommend from "./homeChild/SHomeRecommend.vue";
import FeatrueHome from "./homeChild/FeatrueHome.vue";

import Swiper from "@/components/swiper/Swiper.vue";
import NavBar from "common/NavBar.vue";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "content/goods/GoodsList.vue";
import Scroll from "@/components/common/scroll/Scroll.vue";
import BackTop from "content/backTop/BackTop.vue";

import { getHomeMultiData, getHomeGoods } from "network/home.js";
import { itemImgListenerMixins, backTopListenerMixins } from "common/mixins.js";

export default {
  components: {
    HomeRecommend,
    FeatrueHome,
    NavBar,
    Swiper,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      recommend: [],
      tabTitles: ["流行", "新款", "精选"],
      types: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentTab: "pop",
      isVisible: false,
      tabOffsetTop: 0,
      isTabControl: false,
      saveY: 0,
    };
  },
  created() {
    // 请求多个数据
    this.getHomeMultiData();
    // 请求下拉数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mixins: [itemImgListenerMixins, backTopListenerMixins],
  computed: {
    tabItem() {
      return this.types[this.currentTab].list;
    },
  },
  methods: {
    // 获取offsetTop 图片加载完成的时机
    swiperImgLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    // 上拉加载更多
    loadMode() {
      this.getHomeGoods(this.currentTab);
    },
    // 返回顶部
    backTop() {
      this.$refs.scroll.scroll.scrollTo(0, 0);
    },
    // 计算滚动位置
    contentScroll(position) {
      this.backTopListener(position);
      this.isTabControl = -position.y > this.tabOffsetTop;
    },
    // 点击判断
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentTab = "pop";
          break;
        case 1:
          this.currentTab = "new";
          break;
        case 2:
          this.currentTab = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    // 请求网络的数据 - List
    getHomeMultiData() {
      getHomeMultiData().then(
        (res) => {
          console.log(res);
          this.recommend = res.data.recommend.list;
        },
        (err) => {
          console.log(err);
        }
      );
    },
    // 请求网络数据 - 图片数据分页
    getHomeGoods(type) {
      let page = this.types[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.types[type].list.push(...res.data.list);
        this.types[type].page += 1;

        this.$refs.scroll.finishPullUp();
      });
    },
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
    this.$eventBus.$off("itemImageLoad", this.itemImgListener);
  },
};
</script>
<style lang="scss" scoped>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.navbar {
  background: #ff8e96;
  color: white;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 9;
}
.scroll {
  position: absolute;
  bottom: 49px;
  top: 44px;
  left: 0;
  right: 0;
  // z-index: 1;
  margin-bottom: 49px;
}
.flex {
  position: relative;
  // top: 40px;
  left: 0;
  z-index: 2;
}
// .scroll {
//   height: calc(100% - 93px);
//   overflow: hidden;
//   // margin-bottom: 20px;
//   padding-bottom: 40px;
// }
</style>