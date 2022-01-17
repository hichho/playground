<template>
  <div>
    <input type="number" v-model="searchData.score"/>
    <select v-model="searchData.type">
      <option v-for="(v,k) in optionData"
              :value="k" :key="k">
        {{ v }}
      </option>
    </select>
  </div>
</template>
<script>

import _ from 'lodash';

const typeOptions = {
  'greater': '大于',
  'less': '小于',
  'equal': '等于'
};

export default {
  name: 'SearchForm',
  props: {
    initialType: {
      validator(value) {
        return Object.keys(typeOptions)
            .includes(value);
      }
    }
  },
  data() {
    return {
      optionData: typeOptions,
      searchData: {
        type: this.initialType,
        score: 0
      }
    };
  },
  watch: {
    searchData: {
      handler() {
        this.formatScore();
        this.submitData();
      },
      deep: true
    },
  },
  methods: {
    formatScore() {
      const searchScore = this.searchData.score;
      const score = Number(searchScore);
      if (searchScore === '' || isNaN(score)) {
        this.searchData.score = 0;
        return;
      }
      this.searchData.score = score;
    },
    submitData: _.debounce(function() {
      this.$emit('submit:data', { ...this.searchData });
    }, 1000),
  }
};
</script>
<style>

</style>
