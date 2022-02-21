<template>
  <div class="frame">


    <div class="container"></div>
    <dv-full-screen-container>
      <dv-active-ring-chart :config="testConfig_1" style="width:400px;height:400px"/>

      <dv-percent-pond :config="testConfig_2" style="width:200px;height:100px;"/>

      <!--    <img src="../../public/image/background.png"/>-->
      <!--    <button @click="goVisual">-->
      <!--      i am going to visual!-->
      <!--    </button>-->
    </dv-full-screen-container>
  </div>
</template>

<script>
import Router from '@/router/RouterPush';
import axios from '@/api/axios';

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      testConfig_1: null,//则会使数据,
      testConfig_2: null,//则会使数据,
    };
  },
  mounted() {
    // this.getData();
    this.mockData();//mock数据
  },
  methods: {
    getData() {
      axios.get('', {
        demoParams: '1'
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err);
      })
    },
    goVisual() {
      Router.goVisual();
    },
    mockData() {
      this.testConfig_1 = {
        activeTimeGap: 1000,
        radius: '50%',
        data: [
          {
            name: '周口',
            value: 55
          },
          {
            name: '南阳',
            value: 120
          },
          {
            name: '西峡',
            value: 78
          },
          {
            name: '驻马店',
            value: 66
          },
          {
            name: '新乡',
            value: 80
          }
        ]
      }
      this.testConfig_2 = {
        value: 12
      }
    }
  }
};
</script>
<style lang="less" scoped>

.frame {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  .container{
    width:320px;
    height: 320px;
    background: red;
  }
}
</style>