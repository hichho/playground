<template>
  <div class="home">
    <img src="../../public/image/background.png"/>

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
