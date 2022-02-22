<template>
  <div class="title_text">{{ titleText }}</div>
</template>
<script>
export default {
  name: 'Title',
  props: {
    titleText: String,
  },
}
</script>
<style>
.title_text {
  padding: 16px 28px;
  color: #FFFFFF;
  box-shadow: inset 0 0 8px 8px rgba(255, 255, 255, 0.3);
  line-height: 100%;
  border-radius: 12px;
  font-size: 18px;
  background-color: #004674;
  margin-top: -1.45vw;
  width:8vw;
  height: 0.4vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>