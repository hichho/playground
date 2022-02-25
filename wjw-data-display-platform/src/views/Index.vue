<template>
  <div class="frame">
    <LeftPart />
    <CenterPart />
    <RightPart />
  </div>
</template>
<script>
import LeftPart from "@/views/LeftPart";
import CenterPart from "@/views/CenterPart";
import RightPart from "@/views/RightPart";

export default {
  name: "Index",
  components: {
    LeftPart,
    CenterPart,
    RightPart,
  },
};
</script>
<style lang="less" scoped>
.frame {
  width: 1920px;
  height: 1080px;
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  position: relative;
  background: url("../../public/images/background.png") no-repeat;
}
</style>
