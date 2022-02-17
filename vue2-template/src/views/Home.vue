<template>
  <dv-full-screen-container>
  <div class="frame">
    <dv-loading>Loading...</dv-loading>

    <img src="../../public/image/background.png"/>
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
    this.getData();
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