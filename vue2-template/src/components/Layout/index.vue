<template>
  <div class="frame">
    <div class="background_image">
      <img src="../../../public/image/title_background.png" class="title"/>
      <Navigation/>

      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Navigation from "@/components/Navigation";

export default {
  name: 'Layout',
  components: {
    Navigation
  },
  created() {

  }
}
</script>
<style lang="less" scoped>
.frame {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .background_image {
    background-image: url('/image/background.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100vw;
    object-fit: cover;
    height: 100vh;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
  }

  .title {
    width: 100vw;
    z-index: 5;
    object-fit: contain;
  }
}
</style>
