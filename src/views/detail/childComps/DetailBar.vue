<template>
  <div>
    <nav-bar class="navbar">
      <template v-slot:left>
        <div class="image" @click="goBack">
          <img src="~assets/common/back.svg" alt="" />
        </div>
      </template>
      <template v-slot:content>
        <div class="content">
          <div
            class="item"
            v-for="(item, index) in titles"
            :key="index"
            :class="{ active: index === currentIndex }"
            @click="tabIndex(index)"
          >
            {{ item }}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "common/NavBar.vue";
export default {
  components: { NavBar },
  data() {
    return {
      id: null,
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  mounted() {
    console.log(this.currentIndex);
  },
  methods: {
    tabIndex(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  font-size: 16px;
  .item {
    flex: 1;
    &.active {
      color: red;
    }
  }
}
.image {
  margin-top: 4px;
}
</style>