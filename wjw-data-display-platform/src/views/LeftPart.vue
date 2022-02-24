<template>
  <div class="container">

    <Property/>
    <div class="part-2">2</div>
    <div class="part-3">3</div>

  </div>
</template>
<script>

import Property from '@/components/Property';

export default {
  name: 'LeftPart',
  components: {
    Property
  },
};
</script>
<style lang="less" scoped>
@color: gold;
.container {
  width: 650px;
  height: 1080px;
  color: white;
  //background: rgba(12, 12, 120, 0.3);
  display: flex;
  flex-direction: column;
  .part-2 {
    background: rgba(12, 120, 12, 0.3);
    height: 480px;
  }

  .part-3 {
    background: gray;
    height: 120px;
  }
}
</style>
