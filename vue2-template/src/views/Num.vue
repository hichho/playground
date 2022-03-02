<template>
  <div class="frame">
    <div>
      <img src="../../public/image/spotify.png"
           style="width:42px;height: 42px;"/>
      <SelfIncreasingNum class-name="num" :value="9666" init-percent="75"
                         :isUseWebApiAnimation="true" unit="12"
      />
    </div>

    <div>
      <img src="../../public/image/twitter.png"
           style="width:42px;height: 42px;"/>
<!--      <SelfIncreasingNum/>-->
    </div>

    <div>
      <img src="../../public/image/youtube.png"
           style="width:42px;height: 42px;"/>
<!--      <SelfIncreasingNum/>-->
    </div>

  </div>
</template>
<script>
import SelfIncreasingNum from "@/components/SelfIncreasingNum";

export default {
  name: 'Num',
  components: {SelfIncreasingNum}
}
</script>
<style scoped lang="less">
.frame {
  width: 60vw;
  height: 100vh;
  background: #8e44ad;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 20vw;

  .num {
    font-size: 20px;
    color: white;
    font-weight: bold;
  }
}
</style>