<template>
  <div class="index-frame">
    <h3 @click="handleClick" class="title">资产信息</h3>
    <h3>modal</h3>
    <a-button type="primary" @click="handleOpenModal"> open modal</a-button>

    <h1 v-if="loading">loading...</h1>
    <div>
      {{ JSON.stringify(data) }}
    </div>
  </div>
</template>
<script>
import {defineComponent, inject} from "vue";
import {Button} from 'ant-design-vue'
import RouterPush from "@/router/routerPush";
import {useGetDemoList} from "../request/indexPageApi";

export default defineComponent({
  name: 'IndexPage',
  components:{AButton:Button},
  setup() {
    const openModal = inject('openModal')
    const {loading, data} = useGetDemoList();

    function handleClick() {
      RouterPush.goProperty()
    }

    function handleOpenModal() {
      openModal()
    }

    return {loading, data, handleClick, handleOpenModal}
  }
})
</script>
<style lang="less" scoped>
.index-frame {
  width: 100%;
  height: 100%;

  .title {
    color: gold;
    cursor: pointer;
  }
}
</style>