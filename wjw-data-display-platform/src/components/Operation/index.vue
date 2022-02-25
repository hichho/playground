<template>
  <div class="operation rightOne">
    <!--    title-->
    <div class="head">
      <!--      title-left-->
      <div class="head-left">
        <img src="../../../public/images/left_title_bg.png" class="head-bg" />
        <span class="head-text">智能运维</span>
      </div>
      <!--      title-right-->
      <select class="area-select" name="area" id="area" v-model="value">
        <option v-for="item in options" :key="item.value" :value="item.value">
          {{ item.label }}
        </option>
      </select>
    </div>

    <!--    body-->
    <div class="operation-body">
      <!-- 智能运维 -->
      <ul class=" oneCont item-ul">
        <li v-for="(item, index) in oneData" :key="item.id" class="item-li">
          <img :src="getImgSrc(index)" class="item-img" />
          <div class="item-label">{{ item.label }}</div>
          <div class="item-value">{{ item.value }}</div>
        </li>
      </ul>
      <!-- 网络拓扑 地市运维排名 云资源健康比例-->
      <div class="twoCont">
        <div class="left">
           <!--    网络拓扑-->
          <div class="hardware">
            <div class="hardware-left">
              <PropertyTitle title="网络拓扑" :has-more="false" />
            </div>
          </div>
          <div class="card-con">
            <div class="card-warp">
              <select class="area-select" name="area" id="area" v-model="value">
                <option v-for="(item) in options" :key="item.value"
                    :value="item.value">
                  {{item.label}}
                </option>
              </select>
               <!-- <img src="../../../public/images/kj.png" class="card-img"/> -->
               <span class="card-img"></span>
            </div>
          </div>
        </div>

        <div class="right">
             <!--    地市运维排名-->
          <div class="card-fixed">
            <div class="hardware">
              <div class="hardware-left">
                <PropertyTitle title="地市运维排名" :has-more="false" />
              </div>
            </div>
             <div class="card-con">
                 <Progress/>
              </div>
          </div>
          <!--    云资源健康比例-->
          <div class="card-fixed">
            <div class="hardware">
              <div class="hardware-left">
                <PropertyTitle title="云资源健康比例" :has-more="false" />
                
              </div>
            </div>
            <div class="card-con">
                云资源健康比例
              </div>
          </div>

        </div>
      </div>
       <!-- 运维变更记录 故障实时监测-->
      <div class="threeCont">
        <div class="left">
           <!--    运维变更记录-->
          <div class="hardware">
            <div class="hardware-left">
              <PropertyTitle title="运维变更记录" :has-more="false" />
            </div>
          </div>
          <div class="card-con">
            <div class="sys">
              <div class="sys-right">
                <div class="sys-table-title">
                  <span class="sys-title-1">时间</span>
                  <span class="sys-title-2">设备类型</span>
                  <span class="sys-title-3">IP地址</span>
                  <span class="sys-title-4">修改人</span>
                </div>
                <vue-seamless-scroll :data="tableData"
                                    class="table-class"
                                    :class-option="optionSetting">
                  <div class="table-item"
                      v-for="(item,index) in tableData"
                      :key="item.id"
                      :style="getBackgroundColor(index)"
                  >
                    <div class="table-item-text-1">{{ item.createTime }}</div>
                    <div class="table-item-text-2">{{ item.company }}</div>
                    <div class="table-item-text-3">{{ item.ipAddress }}</div>
                    <div class="table-item-text-3">{{ item.name }}</div>
                  </div>
                </vue-seamless-scroll>
              </div>
            </div>
          </div>
        </div>

        <div class="right">
             <!-- 故障实时监测-->
           <div class="hardware">
            <div class="hardware-left">
              <PropertyTitle title="故障实时监测" :has-more="false" />
            </div>
          </div>
          <div class="card-con">
            故障实时监测
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PropertyTitle from "@/components/PropertyTitle";
import Progress from "@/components/Progress";
export default {
  name: "Operation",
  components: { 
    PropertyTitle,
    Progress
     },
  data() {
    return {
      options: [
        {
          value: "浙江省",
          label: "浙江省",
        },
        {
          value: "杭州市",
          label: "杭州市",
        },
        {
          value: "宁波市",
          label: "宁波市",
        },
        {
          value: "温州市",
          label: "温州市",
        },
      ],
      value: "浙江省",
      //
      oneData: [
        { id: "1", label: "今日流出流量", value: "892PB" },
        { id: "2", label: "今日流入流量", value: "892PB" },
        { id: "3", label: "本月流出流量", value: "892PB" },
        { id: "4", label: "本月流入流量", value: "892PB" },
      ],
      //hardware-sum
      tableData: [
        {id: '1', createTime: '13:04:12', company: 'USP电源USP电源USP电源', ipAddress: '192.168.1.12',name:'张三'},
        {id: '2', createTime: '13:06:02', company: 'USP电源USP电源USP电源', ipAddress: '192.168.1.13',name:'张三'},
        {id: '3', createTime: '14:08:56', company: 'USP电源USP电源USP电源', ipAddress: '192.168.1.14',name:'张三'},
        {id: '4', createTime: '15:12:32', company: 'USP电源USP电源USP电源', ipAddress: '192.168.1.15'},
        {id: '5', createTime: '16:42:37', company: 'USP电源USP电源USP电源', ipAddress: '192.168.1.16',name:'张三'},
        {id: '6', createTime: '20:02:56', company: 'USP电源USP电源USP电源', ipAddress: '192.168.3.16',name:'张三'},
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    };
  },
  computed: {
    getImgSrc() {
      return function (index) {
        return index > 1 ? "../../images/tb-2.png" : "../../images/tb-1.png";
      };
    },
    //虚拟滚动
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
    //计算table-item的背景颜色
    getBackgroundColor() {
      return function (index) {
        return index % 2 === 0 ? {
          'backgroundColor': 'rgb(89,133,255,0.5)'
        } : undefined
      }
    }
  },
};
</script>
<style lang="less" scoped>
@import "../../base.less";
@import "../../global.less";
@font-face {
  font-family: "GothicThirteenStd";
  src: url("../../../public/font/GothicThirteenStd.otf") format("truetype");
}
@font-face {
  font-family: "优设标题黑";
  src: url("../../../public/font/优设标题黑.ttf") format("truetype");
}
.operation {
  width: 100%;
  height: 480px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;

  .head {
    .head-left {
      width: 100%;
      position: relative;
      z-index: 5;

      .head-bg {
        width: 100%;
      }

      .head-text {
        position: absolute;
        top: 2px;
        left: 14px;
        line-height: 100%;
        color: #fff;
        font-size: 22px;
        font-family: "优设标题黑";
      }
    }

    
  }
.area-select {
      position: absolute;
      right: 2px;
      top: 8px;
      width: 98px;
      line-height: 18px;
      z-index: 6;
      background: @background;
      color: @color;
      border: 1px solid @color;
      box-sizing: border-box;
      border-radius: 3px;
    }
  .operation-body {
    padding-bottom: 8px;
    height: 100%;
  }
}
.rightOne{
    height: 545px;
    .card-con{
      width: 100%;
      margin-top: 3px;
      height: calc(~"(100% - 20px )");
      .card-warp{
        position: absolute;
        top: 25px;
        left: 0;
        height: 30px;
      }
    }
    .oneCont{
      @h: 42px;
      width: 100%;
      height:  @h;
      margin-bottom: 2px;
    }
    .item-ul {
      width: 100%;
      .item-li {
        position: relative;
        padding: 3px 0 1px 56px;
        margin-right: 6px;
        width: calc(~"(100% - 6px * 3 )/4");
        float: left;
        color: #fff;
        border: 1px solid fade(#132d66, 40);
        box-shadow: 0px 0px 10px fade(#009cff, 40) inset;
        box-sizing: border-box;
        border-radius: 3px;
        height:100%;
        text-align: left;
        &:last-child {
          margin-right: 0;
        }
        .item-img {
          position: absolute;
          top: 6px;
          left: 15px;
        }
        .item-label {
          font-size: 12px;
        }
        .item-value {
          font-size: 16px;
          letter-spacing: 1px;
          font-family: "GothicThirteenStd";
        }
      }
    }
    .twoCont {
        width: 100%;
        overflow: hidden;
        position: relative;
        height: calc(~"(100% - 125px - 50px )");
        .area-select{
          left: 20px;
          top: 0;
          background: #08275b;
        }
        .card-warp{
          width: 402px;
        }
        .card-img{
          width: 12px;
          height: 12px;
          display: inline-block;
          top: 5px;
          right: 0;
          position: absolute;
          background-image: url("../../../public/images/kj.png");
        }
        .left {
          float: left;
          height: 100%;
          width: calc(~"(100% - 210px - 10px )");
        }
        .right {
          float: left;
          margin-left: 10px;
          width: 204px;
          height: 100%;
          .card-fixed{
            height: 50%;
          }
        }
      }
      .threeCont {
        width: 100%;
        overflow: hidden;
        height: 125px;
        .left {
          float: left;
          height: 100%;
          width: 49%;
        }
        .right {
          float: left;
          margin-left: 1%;
          width: 49%;
          height: 100%;
        }
      }
      .ellipsis() {
          overflow: hidden;
          text-overflow: ellipsis;
          -o-text-overflow: ellipsis;
          white-space: nowrap;
      }
      .sys {
      width: 100%;
      height: 128px;
      display: flex;
      justify-content: space-between;
      align-items: center;


      .sys-right {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        color: white;

        .sys-table-title {
          display: flex;
          justify-content: space-around;
          align-items: center;

          .sys-title-1 {
            width: 80px;
            display: flex;
            justify-content: flex-start;
          }

          .sys-title-2 {
            width: 190px;
            display: flex;
            justify-content: flex-start;
          }

          .sys-title-3 {
            width: 120px;
            display: flex;
            justify-content: flex-start;
            .ellipsis();
          }
          .sys-title-4 {
            width: 60px;
            display: flex;
            justify-content: flex-start;
          }
        }

        .table-class {
          width: 98%;
          height: 88px;
          margin-top: 4px;
          overflow: hidden;

          .table-item {
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 24px;

            .table-item-text-1 {
              display: flex;
              justify-content: flex-start;
              width: 80px;
            }

            .table-item-text-2 {
              display: flex;
              justify-content: flex-start;
              width: 190px;
            }

            .table-item-text-3 {
              display: flex;
              justify-content: flex-start;
              width: 120px;
              .ellipsis();
            }
            .table-item-text-4 {
              display: flex;
              justify-content: flex-start;
              width: 60px;
            }
          }
        }
      }
    }
    }
</style>
