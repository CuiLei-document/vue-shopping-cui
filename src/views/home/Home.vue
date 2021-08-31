<template>
  <div>
    <NavBar class="navbar">
      <template v-slot:content> 蘑菇街 </template>
    </NavBar>
    <Swiper :banner="banner" />
    <home-recommend :recommend="recommend" />
  </div>
</template>

<script>
import NavBar from "common/NavBar.vue";
import Swiper from "@/components/swiper/Swiper.vue";
import HomeRecommend from "./homeChild/SHomeRecommend.vue";
import { getHomeMultiData } from "network/home.js";
export default {
  components: { NavBar, Swiper, HomeRecommend },
  data() {
    return {
      banner: [],
      recommend: [],
    };
  },
  created() {
    getHomeMultiData().then((res) => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
      console.log(this.recommend);
    });
  },
};
</script>
<style lang="scss" scoped>
.navbar {
  background: #ff8e96;
  color: white;
}
</style>