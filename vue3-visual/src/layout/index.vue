<template>
  <div>
    <h1>可视化</h1>
    <vue-final-modal
      v-model="modalVisible"
      classes="modal-container"
      content-class="modal-content"
      :drag="true"
      :dragSelector="'.modal__title'"
    >
      <button class="modal__close" @click="modalVisible = false"> x </button>
      <div class="modal__title" style="border: 1px solid red">Hello, vue-final-modal</div>
      <div class="modal__content">
        <p v-for="i in 5" :key="i">
          Vue Final Modal is a renderless, stackable, detachable and lightweight modal component.
        </p>
      </div>
    </vue-final-modal>

    <router-view />
  </div>
</template>
<script>
  import { defineComponent, ref, provide } from 'vue';
  import { VueFinalModal } from 'vue-final-modal';

  export default defineComponent({
    name: 'LayoutComponent',
    components: {
      VueFinalModal,
    },
    setup() {
      provide('openModal', openModal);
      const modalVisible = ref(false);

      function openModal() {
        modalVisible.value = true;
      }

      return {
        modalVisible,
      };
    },
  });
</script>
<style lang="less" scoped>
  ::v-deep .modal-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ::v-deep .modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    max-height: 90%;
    margin: 0 1rem;
    padding: 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 0.25rem;
    background: #fff;
  }
  .modal__title {
    margin: 0 2rem 0.5rem 0;
    font-size: 1.5rem;
    font-weight: 700;
  }
  .modal__content {
    flex-grow: 1;
    overflow-y: auto;
  }
  .modal__close {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
  .dark-mode div::v-deep .modal-content {
    border-color: #2d3748;
    background-color: #1a202c;
  }
</style>
