<template>
  <div class="f-container">
    <a-modal
      title="父级弹窗"
      :visible="visible"
      @ok="visible = false"
      @cancel="visible = false"
      cancelText="关闭"
      okText="好"
    >
      <div>
        <h1>{{ data.name }}</h1>
        <h3>{{ data.content }}</h3>
      </div>
    </a-modal>

    <div class="left">
      <div class="left-top" @click="fatherClick">left-top</div>
      <div class="left-bottom">left-bottom</div>
    </div>

    <div class="right">
      <iframe
        ref="fIframe"
        class="right-top"
        src="http://172.16.11.34:8081/#/childFrame"
      ></iframe>
      <div class="right-bottom">right-bottom</div>
    </div>

    <!--    <div class="btn" @click="fClick">父页面传参</div>-->
  </div>
</template>

<script>
import http from '@/api/axios'

export default {
  name: 'FrameComponent',
  data() {
    return {
      visible: false,
      data: {
        name: '省卫健委',
        content: '省卫健委数据'
      }
    }
  },
  mounted() {
    window.addEventListener('message', this.handleClick)

    http({ url: '/app/banner/list', method: 'get', data: { id: '123' } }).then(
      () => {
        // console.log(res);
      }
    )
  },
  methods: {
    // 父页面处发向子页面传参
    fClick() {
      const data = {
        type: 2,
        code: 200,
        data: '父页面面传输数据过来了'
      }
      this.$refs.fIframe.contentWindow.postMessage(data, '*')
    },
    handleClick(e) {
      if (e.data.data) {
        this.data = e.data.data
        this.visible = true
      }
    },
    fatherClick() {
      this.data = {
        name: '省卫健委',
        content: '省卫健委数据'
      }
      this.visible = true
    }
  }
}
</script>
<style scoped lang="less">
.f-container {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 200, 0.6);
  display: flex;
  flex-direction: row;
  color: white;

  .left {
    display: flex;
    flex-direction: column;

    .left-top {
      width: 50vw;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(12, 12, 12, 0.2);
      height: 50vh;
    }

    .left-bottom {
      width: 50vw;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(120, 120, 120, 0.4);
      height: 50vh;
    }
  }

  .right {
    display: flex;
    flex-direction: column;

    .right-top {
      width: 50vw;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(120, 12, 12, 0.2);
      height: 50vh;
    }

    .right-bottom {
      width: 50vw;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(220, 120, 120, 0.4);
      height: 50vh;
    }
  }
}
</style>
