<template>
  <div class="user-info">
    <a href="" class="user-link">
      <slot name="user-icon">
        <svg class="icon head">
          <use xlink:href="#icon-touxiang"></use>
        </svg>
      </slot>
      <div class="user-info-item">
        <slot name="user-login">
          <div class="login">登录/注册</div>
        </slot>
        <div class="user-phone phone">
          <span>
            <svg class="icon">
              <use xlink:href="#icon-Phone"></use>
            </svg>
          </span>
          <slot name="user-phone"> 暂无绑定手机 </slot>
        </div>
      </div>
      <div>
        <svg class="icon">
          <use xlink:href="#icon-you"></use>
        </svg>
      </div>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/hepler.scss";
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.user-info {
  @extend %bg;
  color: white;
  font-size: 16px;
  .user-link {
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > .head {
      width: 60px;
      height: 60px;
    }
    .user-info-item {
      margin-right: auto;
      margin-left: 12px;
      display: flex;
      flex-direction: column;
      .login {
        //   border: 1px solid red;
        margin-left: 4px;
        margin-bottom: 6px;
      }
    }
  }
}
</style>