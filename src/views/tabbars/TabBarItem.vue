<template>
  <!-- <router-link :to="{ path }"> -->
  <div class="tab-bar-item" @click="linkClick">
    <div v-if="!isVisible">
      <slot name="tabbar-icon"></slot>
    </div>
    <div v-else>
      <slot name="tabbar-active-icon"></slot>
    </div>
    <div :style="activeClass">
      <slot name="tarbar-text"></slot>
    </div>
  </div>
  <!-- </router-link> -->
</template>

<script>
export default {
  props: {
    path: String,
    activeStyle: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      // isVisible: true,
    };
  },
  computed: {
    isVisible() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeClass() {
      return this.isVisible ? { color: this.activeStyle } : {};
    },
  },
  methods: {
    linkClick() {
      this.$router.push(this.path);
    },
  },
};
</script>
<style lang="scss" scoped>
.tab-bar-item {
  height: 49px;
  z-index:1;
  flex-grow: 1;
  // text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  img {
    margin-top: 3px;
    width: 26px;
    height: 26px;
    vertical-align: middle;
  }
  .active {
    color: red;
  }
}
</style>