<template>
  <div class="module-center-title">
    <img src="../../../public/images/module_title_bg.png" class="img"/>
    <div class="title">{{ title }}</div>
  </div>
</template>
<script>
export default {
  name: 'ModuleCenterTitle',
  props: {title: String}
}
</script>
<style lang="less" scoped>
.module-center-title{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 22px;
  position: relative;
  .img{
    position: absolute;
    top:0;
    left:0;
  }
  .title{
    font-size: 14px;
    line-height: 100%;
    font-family: MicrosoftYaHei-Bold;
  }
}
</style>