<template>
  <div class="add-todo">
    <input v-model="value" class="add-input"/>
    <div @click="add" class="add-button">
      添加
    </div>
  </div>
</template>
<script>
export default {
  name: 'AddTodo',
  data() {
    return { value: undefined };
  },
  methods: {
    add() {
      if (!this.value) {
        alert('🐶请🐶填🐶写🐶');
        return;
      }
      this.$emit('addTodo', {
        id: new Date().getTime(),
        content: this.value,
        toggle: false,
      });
      this.value = undefined;
    }
  }
};
</script>
<style lang="less" scoped>
.add-todo {
  width: 380px;
  border-radius: 24px;
  height: 48px;
  font-size: 22px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(12, 12, 12, 0.12);
  margin: 8px 0;

  .add-input {
    margin-left: 14px;
    background: transparent;
    border: none;
    outline: none;
    color: white;
    width: 280px;
    font-size: 18px;
  }

  .add-button {
    font-size: 16px;
    cursor: pointer;
    padding-right: 16px;
  }

}
</style>
