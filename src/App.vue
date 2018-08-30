<template>
  <div id="app">
    <page-load :loadImgList="loadImgList" :loadEndCallback="loadEndCallback"></page-load>
    <router-view v-if="showRouterView"/>
  </div>
</template>

<script>
import PageLoad from './lib/common/DYPageLoad/page-load';

export default {
  name: 'App',
  components: {
    'page-load': PageLoad
  },
  data: function () {
    return {
      showRouterView: false,
      loadImgList: []
    };
  },
  methods: {
    loadEndCallback: function () {
      this.showRouterView = true;
    }
  }
};
</script>

<style lang="scss">
@import './lib/base/index.scss';

html, body {
  width: 100%;
  height: 100%;
  font-family: 'Microsoft Yahei', PingFangSC-Regular, 'Avenir', Helvetica, Arial, sans-serif;
}
#app {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
</style>
