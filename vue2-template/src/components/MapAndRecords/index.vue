<template>
  <div class="frame">
    <div class="map-area">
      <img src="../../../public/image/map_container.png" class="map-container"/>
      <!--      <img src="../../../public/image/map.png" class="map"/>-->
      <dv-flyline-chart :config="config" style="width:100%;height:100%;"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MapAndRecords',
  data(){
    return {
      config:{
        centerPoint: [0.48, 0.35],
        points: [
          [0.52, 0.23],
          [0.43, 0.29],
          [0.59, 0.35],
          [0.53, 0.47],
          [0.45, 0.54],
          [0.36, 0.38],
          [0.62, 0.55],
          [0.56, 0.56],
          [0.37, 0.66],
          [0.55, 0.81],
          [0.55, 0.67],
          [0.37, 0.29],
          [0.20, 0.36],
          [0.76, 0.41],
          [0.59, 0.18],
          [0.68, 0.17],
          [0.59, 0.10]
        ],
        bgImgUrl: '../../public/image/map_container.png'
      }
    };
  }
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