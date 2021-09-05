<template>
  <div class="shop-item">
    <div class="item-selector">
      <check-button :isCheck="itemInfo.check" @click.native="checkClick" />
    </div>
    <div class="item-img">
      <img :src="itemInfo.image" alt="" />
    </div>
    <div class="item-info">
      <div class="item-title">
        {{ itemInfo.title }}
      </div>
      <div class="item-desc">
        {{ itemInfo.desc }}
      </div>
      <div class="info-bottom">
        <div class="item-price left">￥{{ itemInfo.price }}</div>
        <div class="item-count right">x{{ itemInfo.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "content/check/CheckButton";
export default {
  components: { CheckButton },
  props: {
    itemInfo: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  methods: {
    checkClick() {
      this.itemInfo.check = !this.itemInfo.check;
    },
  },
};
</script>
<style lang="scss" scoped>
.shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
  .item-selector {
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-img {
    padding: 5px;
    img {
      width: 80px;
      height: 100px;
      display: block;
      border-radius: 5px;
    }
  }
  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 20px;
    position: relative;
    overflow: hidden;
    .item-title,
    .item-desc {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .item-desc {
      font-size: 14px;
      color: #666;
      margin-top: 16px;
    }
    .info-bottom {
      margin-top: 18px;
      //   position: absolute;
      //   bottom: 10px;
      //   left: 10px;
      //   right: 10px;
      display: flex;
      justify-content: space-between;
      .item-count {
        font-weight: 700;
      }
      .item-price {
        color: orangered;
      }
    }
  }
}
</style>