<template>
  <div>
    <div v-if="commentLength" class="comment-info">
      <div class="info-header">
        <div class="header-title">用户评论</div>
        <div class="header-more">
          更多
          <i class="arrow-right"></i>
        </div>
      </div>
      <div class="info-user">
        <img :src="commentInfo.user.avatar" alt="" />
        <span> {{ commentInfo.user.uname }}</span>
      </div>
      <div class="info-detail">
        <p>{{ commentInfo.content }}</p>
        <div class="info-other">
          <span class="date">{{ getCreated }} </span>
          <span>{{ commentInfo.style }}</span>
        </div>
        <div class="info-imgs">
          <img
            v-for="(item, index) in commentInfo.images"
            :key="index"
            :src="item"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  props: {
    commentInfo: {
      type: Object,
      default: {},
    },
  },
  computed: {
    commentLength() {
      return Object.keys(this.commentInfo).length !== 0;
    },
    getCreated() {
      let day = dayjs(this.commentInfo.created);
      let now = dayjs();
      if (day.isSame(now, "day")) {
        return "今天";
      } else if (day.isSame(now.subtract("1", "day"), "day")) {
        return "昨天";
      } else {
        return now.format("YYYY年-MM月-DD日");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.comment-info {
  padding: 4px 6px;
  > .info-header {
    display: flex;
    justify-content: space-between;
    padding: 12px 8px;
    font-size: 20px;
    border-bottom: 1px solid #dddada;
    margin-bottom: 15px;

  }
  > .info-user {
    display: flex;
    align-items: center;
    > img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    > span {
      margin-left: 8px;
    }
  }
  .info-detail {
    font-size: 14px;
    margin-top: 16px;
    > p {
      line-height: 20px;
      color: #4e4e4e;
      padding-bottom: 8px;
    }
    > .info-other {
      color: #919191;
    }
    > .info-imgs {
      padding: 8px;
      > img {
        width: 160px;
        height: 160px;
      }
    }
  }
}
</style>