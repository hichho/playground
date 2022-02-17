<template>
  <dv-full-screen-container>
  <div class="frame">
    <dv-loading>Loading...</dv-loading>

    <img src="../../public/image/background.png"/>
  </div>
  </dv-full-screen-container>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import Router from '@/router/RouterPush';

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {};
  },
  methods: {
    goVisual() {
      Router.goVisual();
    }
  }
};
</script>
<style lang="less">
@import "../styles/home.less";
</style>