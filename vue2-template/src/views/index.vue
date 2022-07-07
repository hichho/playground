<template>
  <div class="i-frame">123</div>
</template>
<script>
import MockApi from '@/api/mockApi'

export default {
  name: 'IndexComponent',
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      MockApi.mockDemo().then((res) => {
        console.log(res)
      })
    }
  }
}
</script>
<style lang="less">
.i-frame {
  width: 100vw;
  height: 100vh;
}
</style>
