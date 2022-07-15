<template>
  <div>
    <h1>可视化</h1>
    <vue-final-modal name="model-1" classes="modal-container" v-model="modalVisible"
                     content-class="modal-content" :drag="true"
    >
      <button class="modal__close" @click="modalVisible = false">
        X
      </button>
      <span class="modal__title">Hello, vue-final-modal</span>
      <div class="modal__content" @click="popConfirmVisible=true">
        <p>Vue Final Modal is a renderless, stackable, detachable and lightweight modal component.</p>
      </div>
    </vue-final-modal>


    <vue-final-modal name="model-1" classes="modal-container" v-model="popConfirmVisible"
                     content-class="modal-content"
    >
      <div style="width:100px;height: 100px;border: 1px solid gold">
        123
      </div>
    </vue-final-modal>
    <router-view></router-view>
  </div>
</template>
<script>
import {defineComponent, ref, provide} from "vue";
import {VueFinalModal} from 'vue-final-modal'

export default defineComponent({
  name: "LayoutComponent",
  components: {
    VueFinalModal
  },
  setup() {
    provide('openModal', openModal)
    const modalVisible = ref(false);
    const popConfirmVisible = ref(false);

    function openModal() {
      modalVisible.value = true;
    }



    return {
      modalVisible, popConfirmVisible
    }
  }
})
</script>
<style lang="less" scoped>
@import url(../styles/global.less);

.modal__title {
  font-size: 1.5rem;
  font-weight: 700;
  color: black;
}

</style>