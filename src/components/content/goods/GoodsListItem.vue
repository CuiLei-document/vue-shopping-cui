<template>
  <div class="goods-item">
    <!-- <a :href="item.link"> -->
    <img v-lazy="getImg" alt="" @load="loadItem" @click="backLink" />
    <!-- </a> -->
    <div class="goods-item-info">
      <p>{{ item.title }}</p>
      <span class="price">{{ item.price }}</span>
      <span class="collect">{{ item.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: {},
    },
  },
  computed: {
    getImg() {
      return this.item.img || this.item.image || this.item.show.img;
    },
  },
  methods: {
    loadItem() {
      this.$eventBus.$emit("itemImageLoad");
    },
    backLink() {
      this.$router.push("/detail/" + this.item.iid);
    },
  },
};
</script>
<style lang="scss" scoped>
.goods-item {
  //   border: 1px solid red;
  padding-bottom: 40px;
  position: relative;
  width: 48%;

  img {
    width: 100%;
    border-radius: 5px;
  }
  &-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0px;
    right: 0px;
    overflow: hidden;
    text-align: center;

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 3px;
    }
    .price {
      color: red;
      margin-right: 20px;
    }
    .collect {
      position: relative;
    }
    .collect::before {
      content: "";
      position: absolute;
      left: -15px;
      top: -1px;
      width: 14px;
      height: 14px;
      background: url("~assets/images/common/collect.svg") 0 0/14px 14px;
    }
  }
}

// .goods-item {
//     padding-bottom: 40px;
//     position: relative;

//     width: 48%;
//   }

//   .goods-item img {
//     width: 100%;
//     border-radius: 5px;
//   }

//   .goods-info {
//     font-size: 12px;
//     position: absolute;
//     bottom: 5px;
//     left: 0;
//     right: 0;
//     overflow: hidden;
//     text-align: center;
//   }

//   .goods-info p {
//     overflow: hidden;
//     text-overflow: ellipsis;
//     white-space: nowrap;
//     margin-bottom: 3px;
//   }

//   .goods-info .price {
//     color: var(--color-high-text);
//     margin-right: 20px;
//   }

//   .goods-info .collect {
//     position: relative;
//   }

//   .goods-info .collect::before {
//     content: '';
//     position: absolute;
//     left: -15px;
//     top: -1px;
//     width: 14px;
//     height: 14px;
//     background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
//   }
</style>