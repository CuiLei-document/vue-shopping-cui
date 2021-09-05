<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <a :href="slide.link">
        <img :src="slide.image" alt="" @load="imageLoad" />
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { getHomeMultiData } from "network/home.js";

export default {
  name: "carrousel",

  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: true,
      },
      swiperSlides: [],
      isLoad: false,
    };
  },
  created() {
    getHomeMultiData().then((res) => {
      this.swiperSlides = res.data.banner.list;
    });
  },
  mounted() {
    setInterval(() => {
      //   console.log("simulate async data");
      if (this.swiperSlides.length < 4) {
        this.swiperSlides.push(this.swiperSlides.length + 1);
      }
    }, 3000);
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit("swiperImgLoad");
        this.isLoad = true;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
img {
  max-width: 100%;
  max-height: 100%;
}
</style>