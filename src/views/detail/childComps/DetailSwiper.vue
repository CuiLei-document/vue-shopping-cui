<template>
  <Swiper class="content">
    <SwiperItem v-for="(item, index) in topImages" :key="index">
      <img :src="item" alt="" />
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/swipers/index";
export default {
  components: { Swiper, SwiperItem },
  props: {
    topImages: {
      type: Array,
      default: [],
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  height: 300px;
  overflow: hidden;
}
</style>