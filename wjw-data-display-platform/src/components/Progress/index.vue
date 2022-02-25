<template>
  <div class="yw-progress-box">
    <div
      v-for="(item, index) in twoData"
      :key="item.id"
      class="yw-progress-bar"
    >
      <div class="yw-progress-detail">
        <span class="yw-progress-text">{{ item.label }}</span>
        <span class="yw-progress-info">{{ item.value }}%</span>
      </div>
      <div class="yw-progress-item">
        <div
          class="yw-progress-bg animate"
          :class="getColor(index)"
          :style="getWidth(item.value)"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Progress",
  components: {},
  data() {
    return {
      //
      twoData: [
        { id: "1", label: "杭州市", value: "96" },
        { id: "2", label: "宁波市", value: "95" },
        { id: "3", label: "嘉兴市", value: "91" },
        { id: "4", label: "绍兴市", value: "90" },
      ],
      //
    };
  },
  computed: {
    getColor() {
      return function (index) {
        return "color" + (index + 1);
      };
    },
    getWidth() {
      return function (value) {
        return {width:value+'%' };
      };
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../global.less";

.yw-progress-box {
  .yw-progress-bar {
    position: relative;
    clear: both;
    margin-top: 20px;
    .yw-progress-detail {
    }
    .yw-progress-text {
      position: relative;
      top: -18px;
      float: left;
      color: #fff;
    }
    .yw-progress-info {
      position: relative;
      top: -16px;
      float: right;
      color: #fff;
    }
    .yw-progress-item {
      position: relative;
      background: #002a68;
      width: 100%;
      height: 7px;
      display: block;
    }
    .yw-progress-bg {
      height: 100%;
      width: 0;
      -webkit-transition: width 0.6s ease;
      -o-transition: width 0.6s ease;
      transition: width 0.6s ease;
      .linear(@one,@two) {
        background: -webkit-linear-gradient(to right, @one, @two); //safar
        background: -o-linear-gradient(to right, @one, @two); //opear
        background: -moz-linear-gradient(to right, @one, @two); //firefox
        background: linear-gradient(to right, @one, @two);
      }
      &.color1 {
        .linear(#ffd3d3,#ff5454);
      }
      &.color2 {
        .linear(#fff5d3,#ffa800);
      }
      &.color3 {
        .linear(#a3f3f2,#16a2a0);
      }
      &.color4 {
        .linear(#91dbf9,#0a81b3);
      }
    }
    .animate {
        animation: animate-positive 3s linear;
      }
      @-webkit-keyframes animate-positive {
        0% {
          width: 0;
        }
      }
      @keyframes animate-positive {
        0% {
          width: 0;
        }
      }
    @keyframes fade-in {
      0% {
        opacity: 0;
      }
      40% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
}
</style>
