<script lang="ts" setup>
import {reactive} from "vue";

const keywordContainer = reactive({
  keyword: ''
});
</script>
<template>
  <div class="frame">
    <img src="/image/logo.png" class="logo"/>
    <div class="search">
      <input :value="keywordContainer.keyword"
             placeholder="请输入关键字"
      />
      <img src="/image/search.png" class="icon"/>
    </div>
    <router-view/>
  </div>
</template>
<style lang="less" scoped>
@import "./src/styles/global.less";

.frame {
  width: calc(100% - 48px);
  min-width: 952px;
  border: 1px solid rgba(12, 120, 120, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;
  padding: 0 24px;

  .logo {
    width: 280px;
    object-fit: contain;
  }

  .search {
    width: 180px;
    height: 36px;
    border-radius: 36px;
    border: 1px solid @color;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;


    input {
      height: 32px;
      width: 120px;
      border-radius: 32px;
      padding-left: 24px;
      border: none;

      input::-webkit-input-placeholder {
        color: white;
      }

      input::-moz-placeholder {
        color: white;
      }

      input::-ms-input-placeholder {
        color: white;
      }
    }

    .icon {
      width: 36px;
      height: 36px;

    }
  }
}
</style>
