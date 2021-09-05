<template>
  <div class="user-list">
    <div v-for="(item, index) in list" :key="index" class="item-list">
      <span class="item-icon">
        <svg class="icon">
          <use :xlink:href="`#icon-${item.icon}`"></use>
        </svg>
      </span>
      <span class="item-title">
        {{ item.title }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: [],
    },
  },
  mounted() {
    console.log(this.list);
  },
};
</script>
<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.user-list {
  // height: 60px;
  background: white;
  font-size: 16px;
  .item-list {
    border-bottom: 1px solid #eee;
    margin-left: 20px;
    margin-top: 20px;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    .item-icon {
      margin-right: 10px;
      > svg {
        width: 30px;
        height: 30px;
      }
    }
    .item-title {
    }
  }
  .item-list:last-child {
    border-bottom: none;
  }
}
</style>