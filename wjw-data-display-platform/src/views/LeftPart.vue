<template>
  <div class="container">
    <Property/>
    <Security/>
    <div class="part-3">3</div>
  </div>
</template>
<script>
import Property from '@/components/Property';
import Security from "@/components/Security";

export default {
  name: 'LeftPart',
  components: {
    Security,
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
  .part-3 {
    background: gray;
    height: 120px;
  }
}
</style>
