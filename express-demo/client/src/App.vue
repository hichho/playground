<template>
  <h1>123</h1>
</template>
<script>

import axios from 'axios';
import qs from 'qs';

export default {
  name: 'App',
  mounted() {
    axios.post('/api/getStudents', qs.stringify({
      type: 'less', score: 99
    }))
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
  }
};
</script>
<style>

</style>
