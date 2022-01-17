<template>
  <div>
    <search-form initial-type="less"
                 @submit:data="submitData"
    />
    <search-list :list-data="studentData">
      {{ errorMsg }}
    </search-list>
  </div>
</template>
<script>

import { getStudents } from './services';
import SearchForm from './components/SearchForm';
import SearchList from './components/SearchList';
import { tableMsg } from './config';

export default {
  name: 'App',
  components: { SearchForm, SearchList },
  data() {
    return {
      studentData: [],
      errorMsg: tableMsg.INIT
    };
  },
  methods: {
    async submitData(data) {
      const { type, score } = data;
      this.showMsg('LOADING');
      try {
        const { errorNo, data } = await getStudents(type, score);
        setTimeout(() => {
          if (errorNo !== 0) {
            switch (errorNo) {
              case 1001:
                this.showMsg('NODATA');
                break;
              default:
                break;
            }
            return;
          }
          this.studentData = data;
        }, 1000);
        console.log(errorNo, data);
      } catch (e) {
        //do sth;
        this.showMsg('ERROR');
        console.log(e);
      }
    },
    showMsg(type) {
      this.studentData = [];
      const { ERROR, LOADING, NODATA } = tableMsg;
      switch (type) {
        case 'ERROR':
          this.errorMsg = ERROR;
          break;
        case 'NODATA':
          this.errorMsg = NODATA;
          break;
        case 'LOADING':
          this.errorMsg = LOADING;
          break;
        default:
          break;
      }
    }
  }
};
</script>
<style>

</style>
