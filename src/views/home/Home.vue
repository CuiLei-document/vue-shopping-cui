<template>
  <div id="home">
    <NavBar class="navbar">
      <template v-slot:content> 购物 </template>
    </NavBar>
    <Scroll
      class="scroll"
      ref="scroll"
      :probe-type="2"
      @scroll="contentScroll"
      :pullUpLoad="true"
      @pullingUp="loadMode"
    >
      <Swiper></Swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <featrue-home></featrue-home>
      <TabControl
        :titles="tabTitles"
        class="tab-control"
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
import { debounce } from "@/components/common/utify.js";

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
  mounted() {
    // 监听 GoodsItemImg 数据
    // debugger
    let refresh = debounce(this.$refs.scroll.refresh, 500);
    this.$eventBus.$on("itemImageLoad", () => {
      refresh();
    });
  },
  computed: {
    tabItem() {
      return this.types[this.currentTab].list;
    },
  },
  methods: {
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
      this.isVisible = -position.y > 500;
    },
    // 点击判断
    tabClick(index) {
      console.log(index);
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
    },
    // 请求网络的数据 - List
    getHomeMultiData() {
      getHomeMultiData().then(
        (res) => {
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

        this.$refs.scroll.finishPullUp()
      });
    },
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
  z-index: 1;
  margin-bottom: 49px;
}
// .scroll {
//   height: calc(100% - 93px);
//   overflow: hidden;
//   // margin-bottom: 20px;
//   padding-bottom: 40px;
// }
.tab-control {
  position: -webkit-sticky;
  position: sticky;
  top: 44px;
  z-index: 2;
}
</style>