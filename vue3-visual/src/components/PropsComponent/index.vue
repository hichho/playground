<template>
  <h2>
    {{count}}
  </h2>
</template>
<script lang="ts">
import {defineComponent, unref, watch} from 'vue';

export default defineComponent({
  name: 'PropsComponent',
  props:{
    count:Number
  },
  setup(props) {
    watch(() => unref(props.count), (value) => {
      console.log(value,'123')
    },{deep:true})
    return {props}
  }
})
</script>