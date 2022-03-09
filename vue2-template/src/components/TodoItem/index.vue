<template>
  <div class="t-item">
    <div class="t-text">
      {{ todoItem.content }}
    </div>

    <div :class="getToggleClass()" @click="toggle">
      <div v-if="data.toggle" class="checked-circle"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TodoItem',
  props: [ 'todoItem' ],
  data() {
    return {
      data: this.todoItem,
    };
  },
  mounted() {
  },
  computed: {
    getToggleClass() {
      return function() {
        return this.data.toggle ? 'checked' : 'un-checked';
      };
    }
  },
  methods: {
    toggle() {
      this.$emit('toggle', this.data.id);
    }
  },
  watch: {}
};
</script>
<style lang="less" scoped>
.t-item {
  width: 380px;
  border-radius: 24px;
  height: 48px;
  font-size: 22px;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(12, 12, 12, 0.12);
  margin: 8px 0;

  .t-text {
    user-select: none;
    display: flex;
    flex-grow: 1;
    padding-left: 18px;
    font-size: 18px;
  }

  .checked {
    width: 32px;
    height: 32px;
    display: flex;
    border: 1px solid white;
    justify-content: center;
    align-items: center;
    z-index: 1;
    border-radius: 100%;
    cursor: pointer;
    margin-right: 12px;

    .checked-circle {
      width: 24px;
      height: 24px;
      background: white;
      border-radius: 100%;
    }
  }

  .un-checked {
    width: 32px;
    height: 32px;
    border: 1px solid rgba(244, 244, 244, 0.7);
    border-radius: 100%;
    margin-right: 12px;
    cursor: pointer;
  }
}
</style>
