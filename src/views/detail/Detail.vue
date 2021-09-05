<template>
  <div id="detail">
    <DetailBar class="detailbar" @tabClick="tabClick" ref="nav" />
    <Scroll class="scroll" ref="scroll" @scroll="contentScroll" :probeType="3">
      <DetailSwiper :top-images="topImages" class="swipers" />
      <DetailBaseInfo :goods="goods" class="base" />
      <DetailShopInfo :shop="shop" class="shop" />
      <DetailGoodsInfo
        :detailInfo="detailInfo"
        @imageLoad="imageLoad"
        class="goods"
      />
      <DetailParamInfo :paramInfo="paramInfo" class="param" ref="param" />
      <DetailCommentInfo
        :commentInfo="commentInfo"
        class="comment"
        ref="comment"
      />
      <goods-list :goods="recommend" ref="goods" />
    </Scroll>
    <BackTop @click.native="backTop" v-show="isVisible" />
    <detail-bottom-bar @addCart="addToCart" />
  </div>
</template>

<script>
import DetailBar from "./childComps/DetailBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";

import Toast from "content/toast/Toast.vue";

import Scroll from "common/scroll/Scroll.vue";
import GoodsList from "content/goods/GoodsList.vue";
import BackTop from "content/backTop/BackTop.vue";

import { debounce } from "common/utify.js";
import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam,
} from "network/detail.js";
import { itemImgListenerMixins, backTopListenerMixins } from "common/mixins.js";
import { mapActions } from "vuex";

export default {
  name: "Detail",
  components: {
    DetailBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,

    GoodsList,
    Scroll,
    BackTop,
    Toast,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
    };
  },
  created() {
    // 保存 ID
    this.iid = this.$route.params.iid;

    // 根据ID  展示不同的数据
    getDetail(this.iid).then((res) => {
      let data = res.result;
      // 获取顶部轮播图展示
      this.topImages = data.itemInfo.topImages;
      // 获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 保存店家信息
      this.shop = new Shop(data.shopInfo);
      // 保存商家图片信息
      this.detailInfo = data.detailInfo;
      // 获取商家的规格参数
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 获取 商家评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }

      // 获取getThemeTopY 进行防抖 防止重新多次数据
      this.getThemeTopY = debounce(() => {
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.param.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.goods.$el.offsetTop);
        this.themeTopYs.push(Number.MAX_VALUE);
      }, 200);
    });
    getRecommend().then((res) => {
      this.recommend = res.data.list;
    });
  },
  mixins: [itemImgListenerMixins, backTopListenerMixins],
  methods: {
    ...mapActions(["addCart"]),
    imageLoad() {
      // 重新计算
      this.newRefresh();

      // 跳转当前锚点 获取最新的Top值
      this.getThemeTopY();
    },
    tabClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 300);
    },
    // 获取滚动 值进行计算
    contentScroll(position) {
      // 进行滚动计算 Y值是否在什么位置
      let positionY = -position.y;
      let length = this.themeTopYs.length;
      for (let i = 0; i < length; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      // 设置返回顶部
      this.backTopListener(position);
    },
    addToCart() {
      // 获取商品信息 加入购物车进行展示
      console.log(this.goods.realPrice);
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      this.addCart(product).then((res) => {
        this.$toast.toastShow(res, 500);
        console.log(this.$toast);
      });
      // this.$store.dispatch("addCart", product).then(res=>{
      //   console.log(res)
      // })
    },
  },
  destroyed() {
    this.$eventBus.$off("itemImageLoad", this.itemImgListener);
  },
};
</script>

<style lang="scss" scoped>
#detail {
  position: relative;
  z-index: 10;
  height: 100vh;
  background-color: #fff;
}
.detailbar {
  position: relative;
  z-index: 10;
  background-color: #fff;
}
.scroll {
  height: calc(100% - 44px - 58px);
}
.swipers,
.base,
.shop,
.goods,
.param,
.comment {
  position: relative;
  z-index: 9;
  background: #fff;
}
</style>