<template>
  <div class="index-frame">
    <h4 class="title" @click="handleClick">首页</h4>
  </div>
</template>
<script>
import {defineComponent} from "vue";
import RouterPush from "@/router/routerPush";

export default defineComponent({
  name: 'IndexPage',
  setup() {
    function handleClick(){
      RouterPush.goIndex();
    }
    return {
      handleClick
    }
  }
})
</script>
<style lang="less" scoped>
.index-frame {
  width: 100%;
  height: 100%;
  .title{
    cursor: pointer;
    color:red;
  }
}
</style>