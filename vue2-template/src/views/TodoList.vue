<template>
  <div class="t-frame">
    <div class="card">
      <div class="head">
        <div v-for="(item,index) in status" class="t-s-item" :style="getColor(index)"
             @click="changeStatus(index)">
          {{ item }}
        </div>
      </div>

      <TodoItem v-for="(item) in filterList" :key="item.id"
                :todo-item="item" @toggle="handleToggle"
      />

      <AddTodo @addTodo="handleAdd"/>
    </div>
  </div>
</template>
<script>
import TodoItem from '@/components/TodoItem';
import AddTodo from '@/components/AddTodo';

export default {
  name: 'TodoList',
  components: { AddTodo, TodoItem },
  data() {
    return {
      status: {
        0: '所有',
        1: '未完成',
        2: '已完成',
      },
      value: 0,
      todoList: [
        { id: 1, content: '语文课', toggle: false },
        { id: 2, content: '数学课', toggle: false },
        { id: 3, content: '英语课', toggle: false },
      ],
    };
  },
  computed: {
    getColor() {
      return function(index) {
        return Number(index) === this.value ? { color: 'white' } : undefined;
      };
    },
    filterList() {
      switch (this.value) {
        case 1:
          return this.todoList.filter(item => !item.toggle);
        case 2:
          return this.todoList.filter(item => item.toggle);
        default:
          return this.todoList;
      }
    }
  },
  methods: {
    changeStatus(index) {
      this.value = Number(index);
    },
    handleToggle(id) {
      this.todoList = this.todoList.map(item => {
        if (item.id === id) {
          item.toggle = !item.toggle;
        }
        return item;
      });
    },
    handleAdd(addItem) {
      this.todoList.unshift(addItem);
    }
  }
}
;
</script>
<style lang="less" scoped>
.t-frame {
  width: 100vw;
  height: 100vh;
  background: #23282f;
  position: relative;

  .card {
    width: 400px;
    position: absolute;
    top: 120px;
    left: calc(50% - 200px);
    box-shadow: 0 0 12px 12px rgba(0, 0, 0, 0.5);
    background: linear-gradient(to top right, blue, pink);
    padding: 24px;
    border-radius: 24px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;

    .head {
      width: 340px;
      background: rgba(0, 0, 0, 0.2);
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: rgba(210, 210, 210, 1);
      border-radius: 32px;
      padding: 0 4px;
      margin-bottom: 16px;

      .t-s-item {
        cursor: pointer;
        padding: 12px 24px;
      }
    }
  }
}
</style>
