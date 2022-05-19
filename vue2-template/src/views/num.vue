<template>
  <div class="frame">
    <div>
      <img
        src="../../public/image/spotify.png"
        style="width: 42px; height: 42px"
        alt=""
      />
    </div>

    <div>
      <img
        src="../../public/image/twitter.png"
        style="width: 42px; height: 42px"
        alt=""
      />
      <!--      <SelfIncreasingNum/>-->
    </div>

    <div>
      <img
        src="../../public/image/youtube.png"
        style="width: 42px; height: 42px"
        alt=""
      />
      <!--      <SelfIncreasingNum/>-->
    </div>
  </div>
</template>
<script>
export default {
  name: 'NumComponent'
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
