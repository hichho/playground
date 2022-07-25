<template>
      <a-button type="primary" @click="handleOpenModal"> download</a-button>
</template>
<script>
import {defineComponent} from 'vue'
export default defineComponent(
  {
  name:'IndexPage',
  setup(props) {
    function handleOpenModal(){
      console.log(123)
    }
    return {handleOpenModal}
  }
}
)
</script>