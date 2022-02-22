<template>
  <div class="frame">
<!--    <button @click="checkData">-->
<!--      checkData-->
<!--    </button>-->
    <Title title-text="demo"></Title>
  </div>
</template>
<script>
import axios from "@/api/axios";
import Title from '@/components/Title';

export default {
  name: 'LocationDeviceList',
  components:{
    Title
  },
  data() {
    return {
      sourceData:null,
      list: null,
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
        if (res.status.code === 200) {
          this.sourceData = res.res.widgets;
        }
      }).catch(error => {
        this.notify({
          message: error, center: true
          , duration: 1500
        });
      })
    },
    checkData(){
      console.log(this.sourceData,this.loading,this.list)
    }
  }
}
</script>
<style lang="less" scoped>
.frame {
  width: 30vw;
  border: 2px solid #00f3fe;
  height: calc(100vh - 9vw);
  border-radius: 12px;
  margin-top: 1vw;
  display: flex;
  justify-content: center;
}

</style>