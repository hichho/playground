<template>
  <dv-full-screen-container>
  <div class="frame">
    <dv-loading>Loading...</dv-loading>

<!--    <img src="../../public/image/background.png"/>-->

    <div class="normal_text">
      我是14px 的字
    </div>
    <div class="small_text">
      我是12px 的字
    </div>
    <div class="smallest_text">
      我是最小的字
    </div>

    <button @click="goVisual">
      i am going to visual!
    </button>

  </div>
  </dv-full-screen-container>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import Router from '@/router/RouterPush';
import axios from '@/api/axios';

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {};
  },
  mounted() {
    // this.getData();
  },
  methods: {
    getData(){
      axios.get('',{
        demoParams:'1'
      }).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err);
      })
    },
    goVisual() {
      Router.goVisual();
    }
  }
};
</script>
<style lang="less">
@import "../styles/home.less";
</style>