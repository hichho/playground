<template>
  <div class="t-frame">
    <div class="card">
      <div class="head">
        <div v-for="(item,index) in status" :style="getColor(index)">
          {{ item }}
        </div>
      </div>


    </div>
  </div>
</template>
<script>
export default {
  name: 'TodoList',
  data() {
    return {
      status: {
        0: '所有',
        1: '未完成',
        2: '已完成',
      },
      value: 0,
    };
  },
  computed: {
    getColor() {
      return function(index) {
        return index === this.value ? {color:'red'} : '';
      };
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
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    width: 400px;
    box-shadow: 0 0 12px 12px rgba(0, 0, 0, 0.5);
    background: linear-gradient(to top right, blue, pink);
    padding: 24px;
    border-radius: 24px;
    justify-content: center;
    align-items: center;
    display: flex;

    .head {
      width: 340px;
      background: rgba(0, 0, 0, 0.2);
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: rgba(210, 210, 210, 1);
      padding: 12px;
      border-radius: 32px;

    }
  }
}
</style>
