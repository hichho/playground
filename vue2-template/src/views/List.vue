<template>
  <div class="home_bottom_big">
    <ul class="item">
      <vue-seamless-scroll
          :data="tableData"
          class="seamless-warp"
          :class-option="optionSetting"
      >
        <li
            class="li_item"
            v-for="item in tableData"
            :key="item.sjbh"
            @click="tabs(item)"
        >
                <span class="li_sjmc" v-text="item.sjmc"></span
                ><span class="li_fssjStr" v-text="item.fssjStr"></span>
          <span class="li_zrdwname" v-text="item.zrdwname"></span
          ><span
            class="li_caseStateStr"
            v-text="item.caseStateStr"
        ></span>
          <span class="li_sjLevelStr" v-text="item.sjLevelStr"></span>
        </li>
      </vue-seamless-scroll>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      tableData: [],
      loadingAdd: false
    };
  },
  methods: {
    //获取实时事件数据
    gettableData() {
      this.loadingAdd = true;
      this.tableData = [
        {
          sjbh: '名称', sjmc: '-年龄', fssjStr: '-学校'
        },
        {
          sjbh: '名称', sjmc: '-年龄', fssjStr: '-学校'
        },
        {
          sjbh: '名称', sjmc: '-年龄', fssjStr: '-学校'
        },
        {
          sjbh: '名称', sjmc: '-年龄', fssjStr: '-学校'
        },
        {
          sjbh: '名称', sjmc: '-年龄', fssjStr: '-学校'
        },
      ];
      this.loadingAdd = false;
    }
  },
  computed: {
    optionSetting() {
      return {
        step: 0.15, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
      };
    },
  },
  mounted() {
    this.gettableData();
  },
};
</script>
<style lang="less" scoped>
.home_bottom_big {
  width: 100%;
  height: 100vh;
  background: rgba(12, 12, 12, 0.3);

  .item {
    background: rgba(120, 12, 12, 0.3);
    width: 100px;
    height: 88px;
    overflow: hidden;
  }
}
</style>
