<script lang="ts">
import {defineComponent} from "vue";
import {useRequest} from "vue-request";

export default defineComponent({
  name: 'Index',
  setup() {
    const service = '/app/banner/list';
    const {data, loading} = useRequest(service);
    return {
      data, loading
    }
  }
})
</script>
<template>
<!--  <div class="frame">-->
<!--  </div>-->
</template>
<style lang="less" scoped>
.frame {
  margin: 0;
  padding: 0;
  width: 50vw;
  height: 50vw;
  background: #00f3fe;
}
</style>
