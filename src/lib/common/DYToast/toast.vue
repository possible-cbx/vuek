<template>
  <div class="toast-box">
    <div class="toast-content">{{content}}</div>
  </div>
</template>

<script>
export default {
  name: 'toast-component',
  props: {
    content: {
      type: null,
      required: true
    },
    ishowToast: {
      type: Boolean,
      required: true
    },
    time: {
      type: Number,
      default: 3000
    }
  },
  created: function () {
    if (this.ishowToast) {
      setTimeout(() => {
        this.$emit('update:ishowToast', false);
      }, this.time);
    }
  }
};
</script>

<style lang="scss" scoped>
.toast-box{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .toast-content{
    display: block;
    max-width: 80%;
    box-sizing: border-box;
    padding: 40px 40px;
    background-color: rgba(0, 0, 0, .8);
    font-size: 28px;
    color: #ffffff;
    border-radius: 16px;
    line-height: 36px;
  }
}
</style>
