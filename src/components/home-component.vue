<template>
  <div class="home-component">
    <div class="logo"></div>
    <div class="content">我是{{componentName}}组件，从这里开始业务之旅</div>
  </div>
</template>

<script>
export default {
  name: 'home-component',
  data () {
    return {
      componentName: 'home'
    };
  },
  mounted: function () {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .home-component {
    position: relative;
    width: 100%;
    height: 100%;

    .logo {
      margin: 0 auto;
      width: 200px;
      height: 200px;
      background: url(../assets/logo.png) no-repeat;
      background-size: 100% 100%;
    }

    .content {
      width: 100%;
      line-height: 50px;
      text-align: center;
      font-size: 32px;
    }
  }
</style>
