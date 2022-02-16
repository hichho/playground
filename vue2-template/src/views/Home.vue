<template>
  <div class="home">
    <!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <button @click="goVisual()">
      let's go visual!
    </button>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Router from '@/router/RouterPush';

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {};
  },
  methods: {
    goVisual() {
      Router.goHome();
    }
  }
};
</script>
