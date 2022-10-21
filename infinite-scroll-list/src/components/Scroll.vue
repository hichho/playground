<script setup lang="ts">
import {ref, unref, watch} from 'vue'
import {useInfiniteScroll, useIntervalFn, useElementHover} from '@vueuse/core'

const el = ref<HTMLElement>(null)
const data = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
const interval = ref(1000)
const autoScrollHeightUnit = ref(0);
const isHovered = useElementHover(el)
useInfiniteScroll(
    el,
    () => {
      console.log(123)
      let arr = [];
      for (let i = 0; i <= 10; i++) {
        arr.push(Math.floor(Math.random() * 10))
      }
      data.value = arr;
    },
    {distance: 10}
)

const {pause, resume,} = useIntervalFn(() => {
  const wrapEl = unref(el);
  autoScrollHeightUnit.value += 40;
  wrapEl.scrollTop = autoScrollHeightUnit.value;
}, interval)

watch(()=>isHovered.value,(val)=>{
  if(val){
    pause();
  }else{
    resume();
  }
})

</script>

<template>
  <div>
    {{isHovered}}
  </div>
  <div ref="el" style="width:80vw;height: 80vh;overflow:scroll;">
    <div v-for="item in data" style="height: 10vh;width:60vw;border: 1px solid red;">
      {{ item }}
    </div>
  </div>
</template>