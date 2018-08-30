<template>
  <div class="pageLoad" v-if="showPageLoad">
    <div class="pageLoad-img"></div>
    <div class="pageLoad-text" v-if="showPercentage">{{percentage}}%</div>
  </div>
</template>

<script>
let loadLength = 0;

export default {
  name: 'page-load',
  props: {
    loadImgList: {
      type: Array,
      default: function () {
        return [];
      }
    },
    loadEndCallback: {
      type: Function,
      required: true
    }
  },
  data: function () {
    return {
      showPageLoad: true,
      showPercentage: false,
      percentage: 0
    };
  },
  methods: {
    destory: function () {
      if (this.percentage === 100) {
        this.showPageLoad = false;
        this.loadEnd();
      }
    },
    loadImgCallBack: function () {
      const totalLen = this.loadImgList.length;

      loadLength++;
      this.percentage = parseInt((loadLength / totalLen) * 100, 10);
      this.destory();
    },
    loadImg: function () {
      const len = this.loadImgList.length;

      if (len) {
        this.loadImgList.forEach((item) => {
          const tempImg = new Image();
          tempImg.onload = () => {
            this.loadImgCallBack();
          };
          tempImg.onerror = () => {
            this.loadImgCallBack();
          };
          tempImg.src = item;
        });
      } else {
        this.percentage = 100;
        this.destory();
      }
    },
    loadEnd: function () {
      this.loadEndCallback();
    },
    init: function () {
      this.loadImg();
    }
  },
  created: function () {
    this.init();
  }
};
</script>

<style lang="scss" scoped>
  .pageLoad {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #f5f5f5;

    .pageLoad-img {
      width: 248px;
      height: 280px;
      background: url(./assets/loading.gif) no-repeat;
      background-size: 100% 100%;
    }

    .pageLoad-text {
      margin-top: 30px;
      width: 100%;
      height: 36px;
      text-align: center;
      line-height: 36px;
      font-size: 32px;
      color: #000;
    }
  }
</style>
