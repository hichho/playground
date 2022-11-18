<template>
  <div>
    <h1 class="title">
      {{ namePool[index] }}
    </h1>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useIntervalFn} from "./useIntervalFn.js";

const namePool = ['🤖', '👽', '🎃'];
const index = ref(0);
useIntervalFn();
</script>

<style scoped>
.title {
  font-size: 64vw;
}
</style>
