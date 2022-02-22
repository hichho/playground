<template>
  <div class="navigation">
    <!--  left-->
    <div class="left-area">
    <span class="menu_item" :style="{'color':getStyle('/')}"
          @click="handleRouterClick('/')">
定位
    </span>
      <span class="menu_item"  :style="{'color':getStyle('/fireControl')}"
            @click="handleRouterClick('/fireControl')">
消防
    </span>
    </div>
    <!--  right-->
    <div class="right-area">
      <span class="menu_item"  :style="{'color':getStyle('/call')}"
            @click="handleRouterClick('/call')">
报警
    </span>
      <span class="menu_item"  :style="{'color':getStyle('/video')}"
            @click="handleRouterClick('/video')">
监控
    </span>
    </div>
  </div>
</template>
<script>
import router from '@/router/index';

const Menu = [
  {key: '1', name: '定位', path: '/',},
  {key: '2', name: '消防', path: '/fireControl',},
  {key: '3', name: '报警', path: '/call',},
  {key: '4', name: '监控', path: '/video'},
];

export default {
  data() {
    return {
      test_1: true,
      test_2: false,
    }
  },
  mounted() {
    // console.log(this?.$route.path)
  },
  methods: {
    handleRouterClick(path) {
      console.log(path)
      router.push(path);
    }
  },
  computed: {
    getStyle() {
      return function (path) {
        return path === this.$route.path?'#00A4C4':'white';
      }
    }
  },
}
</script>
<style lang="less" scoped>
.navigation {
  position: absolute;
  top:0;
  height: 6.8vw;
  width:72vw;
  left:14vw;
  display: flex;
  justify-content: space-between;

  .left-area{
    width:20vw;
    height: 7.4vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .menu_item{
      cursor: pointer;
      padding: 12px 24px;
    }
  }
  .right-area{
    width:20vw;
    height: 7.4vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .menu_item{
      cursor: pointer;
    }
  }
}
</style>