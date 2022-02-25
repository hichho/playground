<template>
<div class="security">
  <div class="head">
    <!--      title-left-->
    <div class="head-left">
      <img src="../../../public/images/left_title_bg.png" class="head-bg"/>
      <span class="head-text">资产总览</span>
    </div>
    <!--      title-right-->
    <div>555</div>
  </div>
</div>
</template>
<script>
export default {
  name:'Security',
  components:{},
  data(){
    return {
      a:'12'
    };
  },
}
</script>
<style scoped lang="less">
.security{
  width:100%;
  background: rgba(120, 12, 12, 0.3);
  height: 480px;
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .head-left {
      width: 100%;
      position: relative;
      z-index: 5;

      .head-bg {
        width: 100%;
      }

      .head-text {
        position: absolute;
        top: 2px;
        left: 48px;
        line-height: 100%;
        font-size: 14px;
        font-family: "Microsoft YaHei";
      }
    }
  }
}
</style>