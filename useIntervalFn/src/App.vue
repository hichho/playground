<template>
  <div>
    <h1 class="title">
      {{ namePool[index] }}
    </h1>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useIntervalFn } from "./useIntervalFn.js";

const namePool = ["🤖", "👽", "🎃"];
const index = ref(0);
const { isActive, pause, resume } = useIntervalFn(
  () => {
    if (index.value === namePool.length - 1) {
      index.value = 0;
    } else {
      index.value += 1;
    }
  },
  2000,
  {
    immediate: true,
    immediateCallback: true
  }
);
</script>

<style scoped>
.title {
  font-size: 64vw;
}
</style>
