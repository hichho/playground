<template>
  <div class="property-title">
    <img src="../../../public/images/property_title_bg.png"
         class="property-title-bg"
    />
    <div class="title-text">
      {{ title }}
    </div>

    <div class="title-right">
      <div>更多</div>
      <img src="../../../public/images/more.png" class="more-icon"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PropertyTitle',
  props: { title: String }
};
</script>
<style lang="less" scoped>
@import "../../global.less";

.property-title {
  width: 100%;
  position: relative;
  border-bottom: 1px solid #28548e;
  height: 16px;
  display: flex;
  justify-content: space-between;

  .property-title-bg {
    width: 100%;
    height: 16px;
    position: absolute;
    top: 0;
    left: -12px;
  }

  .title-text {
    font-weight: bold;
  }

  .title-right {
    display: flex;
    flex-direction: row;
    color: @color;
    align-items: center;

    .more-icon {
      width: 8px;
      height: 8px;
      margin-left: 4px;
    }
  }
}
</style>
