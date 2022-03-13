<script lang="ts">
import {RequestConfig} from 'vue-request';

export default {
  components: {RequestConfig}
}

</script>
<template>
  <RequestConfig>
    <router-view/>
  </RequestConfig>
</template>
<style lang="less">
@import "styles/global.less";
</style>
