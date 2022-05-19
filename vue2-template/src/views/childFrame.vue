<template>
  <div class="child-frame">
    <div @click="sonClick" style="cursor: pointer">
      我是iframe 嵌套的子页面,try to click me!
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // 监听父页面向子页面的传参
    window.addEventListener('message', () => {
      // console.log('父页面传输过来参数');
      // console.log(e.data);
    })
  },
  methods: {
    // 子页面处发向父页面传参
    sonClick() {
      const data = {
        type: 1,
        code: 200,
        data: {
          name: '宁波市卫健委',
          content: '宁波市卫健委数据'
        }
      }
      window.parent.postMessage(data, '*')
    }
  }
}
</script>
<style lang="less" scoped>
.child-frame {
  width: 100%;
  height: 100%;
  background: rgba(42, 120, 244, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
