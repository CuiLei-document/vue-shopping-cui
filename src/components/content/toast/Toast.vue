<template>
  <div class="toast" v-show="toastVisible">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  props: {
    // toastVisible: {
    //   type: Boolean,
    //   default: false,
    // },
    // message: {
    //   type: String,
    //   default: "添加成功",
    // },
  },
  data() {
    return {
      message: "",
      toastVisible: false,
    };
  },
  methods: {
    toastShow(message='添加成功', delay = 300) {
      (this.toastVisible = true), (this.message = message);
      setTimeout(() => {
        this.toastVisible = false;
        this.message = "";
      }, delay);
    },
  },
};
</script>
<style lang="scss" scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.65);
  border-radius: 4px;
  color: white;
  z-index: 10;
}
</style>