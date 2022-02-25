<template>
  <div class="container">

    <Operation/>

  </div>
</template>
<script>
	import Operation from '@/components/Operation';
export default {
  name: 'RightPart',
  components: {
    Operation
  },
};
</script>
<style lang="less" scoped>
.container {
  width: 640px;
  height: 100px;
  z-index: 10;
  //background: rgba(12, 12, 120, 0.3);
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
