<template>
  <div class="frame">
    <div class="map-area">
      <img src="../../../public/image/map_container.png" class="map-container"/>
      <img src="../../../public/image/map.png" class="map"/>
    </div>


  </div>
</template>
<script>
export default {
  name: 'MapAndRecords',
}
</script>
<style lang="less" scoped>
.frame {
  width: 48vw;
  //background: rgba(244, 244, 244, 0.5);
  height: calc(100vh - 9vw);
  margin-top: 1vw;
  display: flex;
  flex-direction: column;

  .map-area {
    width: 48vw;
    object-fit: contain;
    position: relative;
    height: 24vw;
    overflow: hidden;

    .map-container {
      width: 48vw;
      position: absolute;
      height: 24vw;
      top: 0;
      left: 0;
      z-index: 12;
    }

    .map {
      width: 46.8vw;
      position: absolute;
      height: 24vw;
      top: 0;
      z-index: 11;
      left: 0.6vw;
    }
  }
}
</style>