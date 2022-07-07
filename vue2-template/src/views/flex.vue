<template>
  <div class="i-frame">
    <div class="part">left</div>
    <div class="center">center</div>
    <div class="part">right</div>
  </div>
</template>
<script>
export default {
  name: 'IndexComponent'
}
</script>
<style lang="less">
.i-frame {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 14px;
  .part {
    width: 360px;
    background: gold;
    height: 1080px;
  }
  .center {
    width: 1200px;
    height: 1080px;
    background: red;
  }
}
</style>
