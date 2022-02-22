<template>

  <div class="frame">
    <dv-loading v-show="loading">获取数据中...</dv-loading>

    <div v-show="!loading" class="container">
      <Title title-text="demo"></Title>
      <div class="list">
        <div class="list-item" v-for="(item) in data" :key="item.id">
          {{ item.kind_cn }}
        </div>
      </div>
      <!--    <button @click="checkData">-->
      <!--      checkData-->
      <!--    </button>-->
    </div>
  </div>
</template>
<script>
import axios from "@/api/axios";
import Title from '@/components/Title';

export default {
  name: 'LocationDeviceList',
  components: {
    Title
  },
  data() {
    return {
      data: [],
      loading: true,
    }
  },
  created() {
    this.getMockData();
  },
  methods: {
    getMockData() {
      axios.get('/ithil_j/activity/movie_annual2021', {
        params: {with_widgets: '1'}
      }).then(res => {
        console.log(res.res.widgets)
        if (res.status.code === 200 && Array.isArray(res?.res?.widgets)) {
          this.data = res.res.widgets;
          this.loading = false;
        }
      }).catch(error => {
        this.notify({
          message: error, center: true
          , duration: 1500
        });
      })
    },
    checkData() {
      console.log(this.loading, this.data)
    }
  }
}
</script>
<style lang="less" scoped>
.frame {
  width: 30vw;
  height: calc(100vh - 9vw);
  display: flex;
  justify-content: center;
  align-items: center;
  //todo
  margin-top: 12px;

  .container {
    width: 30vw;
    border: 2px solid #00f3fe;
    height: calc(100vh - 9vw);
    border-radius: 12px;
    margin-top: 1vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .list {
    padding-top: 2vw;
    width: 30vw;
    height: calc(100vh - 9vw);
    //background: gold;
    border-radius: 12px;
    overflow-y: scroll;
    overflow-x: hidden;

    .list-item {
      width: 100%;
      height:4vw;
    }
  }
}

</style>