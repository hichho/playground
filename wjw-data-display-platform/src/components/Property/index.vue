<template>
  <div class="property">
    <!--    title-->
    <div class="head">
      <!--      title-left-->
      <div class="head-left">
        <img src="../../../public/images/left_title_bg.png" class="head-bg"/>
        <span class="head-text">资产总览</span>
      </div>
      <!--      title-right-->
      <select class="area-select" name="area" id="area" v-model="value">
        <option v-for="(item) in options" :key="item.value"
                :value="item.value">
          {{ item.label }}
        </option>
      </select>
    </div>

    <!--    body-->
    <div class="property-body">
      <!--    sum-->
      <div class="sum">
        <div v-for="(item,index) in sumData" :key="item.id" class="property-item">
          <img src="../../../public/images/property_bg.png" class="property-item-bg"/>
          <img :src="getImgSrc(index)" class="item-img"/>
          <div class="data-area">
            <span class="item-label">{{ item.label }}</span>
            <span class="item-value">{{ item.value }}</span>
          </div>
        </div>
      </div>
      <!--    hardware-->
      <div class="hardware">
        <div class="hardware-left">
          <PropertyTitle title="硬件资产" :has-more="true"/>
          <div class="hardware-table-title">
            <span class="end-title">总数</span>
            <span>未注册</span>
          </div>

          <div v-for="(item,index) in hardware" :key="item.id" :class="getTableClass(index)">
            <span style="width:64px;text-align: left;">{{ item.label }}</span>
            <span style="width:64px;text-align: left;">{{ item.sumValue }}</span>
            <span style="width:32px;text-align: left;">{{ item.unRegisteredSum }}</span>
          </div>

        </div>
        <div class="hardware-center">
          <div class="hardware-more">
            <span>更多</span>
            <img src="../../../public/images/more.png"/>
          </div>
          <ModuleCenterTitle title="省卫健委"></ModuleCenterTitle>
          <div class="module-container">
            <div v-for="(item,index) in hardwareModule" :key="item.id"
                 :class="getLineClass(index)">
              <span>{{ item.label }}</span>
              <span>{{ item.sum }}</span>
            </div>
          </div>
        </div>
        <div class="hardware-right">
          <PropertyTitle title="业务系统分布"
                         :has-more="false"
          />
          <div id="hardware-chart" class="hardware-chart">

          </div>
        </div>
      </div>
      <!--  nat子网  -->
      <div class="nat">
        <!--        子网-left-->
        <div class="nat-left">
          <PropertyTitle title="NAT子网"/>
          <div v-for="(item) in natData" :key="item.id" class="nat-item">
            <img src="../../../public/images/property_nat_border_1.png" class="nat-bg"/>
            <div style="display: flex;flex-direction: column">
              <span>
              {{ item.name }}
              </span>
              <span>
                {{ item.value }}
              </span>
            </div>
          </div>
        </div>

        <div class="nat-center">
          <div class="nat-more">
            <span>更多</span>
            <img src="../../../public/images/more.png"/>
          </div>
          <ModuleCenterTitle title="杭州卫健委"></ModuleCenterTitle>
          <div class="module-container">
            <div v-for="(item,index) in hardwareModule" :key="item.id"
                 :class="getLineClass(index)">
              <span>{{ item.label }}</span>
              <span>{{ item.sum }}</span>
            </div>
          </div>
        </div>

        <div class="nat-right">
          <PropertyTitle title="云资产信息" :has-more="true"/>
          <div class="nat-center-container">
            <div v-for="(item) in cloudProperty" :key="item.id" class="nat-list-item">
              <img src="../../../public/images/property_nat_cloud_bg.png"
                   class="cloud-bg"/>
              <div class="cloud-text-frame">
                <span>{{ item.name }}</span>
                <span>{{ item.value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--    操作系统-->
      <div class="sys">
        <div class="sys-left">
          <PropertyTitle title="操作系统分布" :has-more="false"/>
          <div id="sys-chart" class="sys-chart"></div>
        </div>
        <div class="sys-right">
          <PropertyTitle title="设备入网监测"/>
          <div class="sys-table-title">
            <span class="sys-title-1">发现时间</span>
            <span class="sys-title-2">单位</span>
            <span class="sys-title-3">IP地址</span>
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
            </div>
          </vue-seamless-scroll>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PropertyTitle from '@/components/PropertyTitle';
import ModuleCenterTitle from "@/components/ModuleCenterTitle";

export default {
  name: 'Property',
  components: {PropertyTitle, ModuleCenterTitle},
  mounted() {
    this.renderChart();
    this.renderPieChart();
  },
  data() {
    return {
      options: [{
        value: '浙江省',
        label: '浙江省'
      }, {
        value: '杭州市',
        label: '杭州市'
      }, {
        value: '宁波市',
        label: '宁波市'
      }, {
        value: '温州市',
        label: '温州市'
      },],
      value: '浙江省',
      //
      sumData: [
        {id: '1', label: '组织架构', value: '1230'},
        {id: '2', label: '硬件资产', value: '21763'},
        {id: '3', label: '业务系统', value: '346'},
        {id: '4', label: '云资产', value: '387'},
        {id: '5', label: '终端用户', value: '5120'},
      ],
      //hardware-sum
      hardware: [
        {id: '1', label: '计算机设备', sumValue: 11510, unRegisteredSum: 1340},
        {id: '2', label: '网络设备', sumValue: 11510, unRegisteredSum: 1340},
        {id: '3', label: '安全设备', sumValue: 11510, unRegisteredSum: 1340},
        {id: '4', label: '办公设备', sumValue: 11510, unRegisteredSum: 1340},
        {id: '5', label: '未识别设备', sumValue: 11510, unRegisteredSum: 1340},
      ],
      //hardware-module-sum
      hardwareModule: [
        {id: '1', label: '硬件资产', sum: 120},
        {id: '2', label: '业务系统', sum: 122},
        {id: '3', label: '云服务器', sum: 120},
        {id: '4', label: '终端用户', sum: 120},
      ],
      natData: [
        {id: '1', name: 'NAT子网接入点', value: 120},
        {id: '2', name: '子网接入设备数', value: 120},
      ],
      natSumData: [
        {id: '1', label: '硬件资产', sum: 120},
        {id: '2', label: '业务系统', sum: 122},
        {id: '3', label: '云服务器', sum: 120},
        {id: '4', label: '终端用户', sum: 120},
      ],
      cloudProperty: [
        {id: '1', name: 'ECS', value: 120},
        {id: '2', name: 'RDS', value: 120},
        {id: '3', name: 'OSS', value: 120},
        {id: '4', name: 'SLB', value: 120},
      ],
      tableData: [
        {id: '1', createTime: '13:04:12', company: '浙江省立同德医院', ipAddress: '192.168.1.12'},
        {id: '2', createTime: '13:06:02', company: '浙江省肿瘤医院', ipAddress: '192.168.1.13'},
        {id: '3', createTime: '14:08:56', company: '浙江大学医学院附属第一医院', ipAddress: '192.168.1.14'},
        {id: '4', createTime: '15:12:32', company: '浙江省肿瘤医院', ipAddress: '192.168.1.15'},
        {id: '5', createTime: '16:42:37', company: '浙江大学医学院附属第一医院', ipAddress: '192.168.1.16'},
        {id: '6', createTime: '20:02:56', company: '浙江省立同德医院', ipAddress: '192.168.3.16'},
      ],
    };
  },
  methods: {
    //渲染图表1
    renderChart() {
      const chartTarget = this.echarts.init(document.getElementById('hardware-chart'));
      const option = {
        title: {
          text: '',
          subtext: '',
          left: 'center',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          textStyle: {
            color: 'white',
          }
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            label: {
              show: false
            },
            data: [
              {value: 1442, name: '医疗服务类'},
              {value: 1254, name: '公共卫生类'},
              {value: 867, name: '办公管理类'},
              {value: 667, name: '政务服务类'},
              {value: 1354, name: '新闻宣传类'}
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      chartTarget.setOption(option);
    },
    //渲染图表2
    renderPieChart() {
      const chartTarget = this.echarts.init(document.getElementById('sys-chart'));
      const option = {
        title: {
          text: '',
          subtext: '',
          left: 'center',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          textStyle: {
            color: 'white',
          }
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            label: {
              show: false
            },
            data: [
              {value: 1442, name: '医疗服务类'},
              {value: 1254, name: '公共卫生类'},
              {value: 867, name: '办公管理类'},
              {value: 667, name: '政务服务类'},
              {value: 1354, name: '新闻宣传类'}
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      chartTarget.setOption(option);
    }
  },
  computed: {
    //计算图片地址
    getImgSrc() {
      return function (index) {
        return '../../images/property_' + (index + 1) + '.png';
      };
    },
    //计算table样式
    getTableClass() {
      return function (index) {
        return index % 2 === 0 ? 'highlight-background' : 'dark-background';
      }
    },
    //计算是否需要line
    getLineClass() {
      return function (index) {
        return index % 2 ? 'module-line' : 'module-no-line';
      }
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
@import "../../global.less";

.property {
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
        left: 48px;
        line-height: 100%;
        font-size: 14px;
        font-family: "Microsoft YaHei";
      }
    }

    .area-select {
      position: absolute;
      right: 2px;
      top: 8px;
      width: 98px;
      z-index: 6;
      background: @background;
      color: @color;
      border: 1px solid @color;
    }
  }

  .property-body {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-around;
    padding-bottom: 8px;

    .sum {
      width: 100%;
      //border: 1px solid red;
      height: 40px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;

      .property-item {
        display: flex;
        flex-direction: row;
        width: 18%;
        justify-content: center;
        position: relative;
        align-items: center;

        .property-item-bg {
          position: absolute;
          top: -8px;
          z-index: 1;
        }

        .item-img {
          width: 28px;
          object-fit: contain;
          margin-right: 2px;
          z-index: 2;
        }

        .data-area {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-left: 2px;

          .item-label {
            font-size: 13px;
            font-weight: 450;
            line-height: 100%;
            color:white;
          }

          .item-value {
            font-family: DIN-Bold;
            color: #41FF5C;
            font-size: 16px;
            font-weight: 700;
            line-height: 100%;
          }
        }
      }
    }

    .hardware {
      width: 100%;
      height: 128px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;

      .hardware-left {
        width: 33%;
        height: 100%;

        .hardware-table-title {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          width: 100%;

          .end-title {
            margin-right: 54px;
          }
        }

        .highlight-background {
          background: radial-gradient(rgb(12, 49, 91), rgba(14, 44, 86, 0.4));
          height: 18px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        .dark-background {
          height: 18px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
      }

      .hardware-center {
        width: 33%;
        height: 100%;
        //background: rgba(12, 233, 12, 0.3);
        .hardware-more {
          display: flex;
          width: 100%;
          height: 14px;
          justify-content: space-between;
          align-items: center;
          padding: 0 4px;
        }

        .module-container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;

          .module-line {
            width: 40%;
            height: 36px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: flex-start;
            margin-top: 8px;
          }

          .module-no-line {
            width: 40%;
            height: 36px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            margin-top: 8px;
            border-right: 1px solid #D6D6D6;
          }
        }

      }

      .hardware-right {
        width: calc(33% - 16px);
        height: 100%;
        padding: 0 8px;
        position: relative;

        .hardware-chart {
          position: absolute;
          width: 510px;
          height: 270px;
          top: -55px;
          left: -160px;
          transform: scale(0.4);
        }
      }
    }

    .nat {
      width: 99%;
      height: 128px;
      display: flex;
      justify-content: space-around;

      .nat-left {
        width: 33%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .nat-item {
          width: 100%;
          height: 40px;
          margin-top: 10px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;

          .nat-bg {
            position: absolute;
            top: 2px;
            left: 20px;
            width: 168px;
            object-fit: contain;
          }
        }
      }

      .nat-center {
        width: 33%;
        height: 100%;
        //background: rgba(12, 233, 12, 0.3);
        .nat-more {
          display: flex;
          width: 100%;
          height: 14px;
          justify-content: space-between;
          align-items: center;
          padding: 0 4px;
        }

        .module-container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;

          .module-line {
            width: 40%;
            height: 36px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: flex-start;
            margin-top: 8px;
          }

          .module-no-line {
            width: 40%;
            height: 36px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            margin-top: 8px;
            border-right: 1px solid #D6D6D6;
          }
        }
      }

      .nat-right {
        width: 33%;
        height: 100%;

        .nat-center-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;

          .nat-list-item {
            width: 88px;
            height: 42px;
            position: relative;
            margin-top: 10px;
            justify-content: center;
            align-items: center;

            .cloud-bg {
              width: 100%;
              object-fit: contain;
              position: absolute;
              top: 0;
              left: 0;
            }

            .cloud-text-frame {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              height: 100%;
              flex-direction: column;
            }
          }
        }
      }
    }

    .sys {
      width: 100%;
      height: 128px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .sys-left {
        width: 35%;
        height: 100%;
        position: relative;

        .sys-chart {
          position: absolute;
          width: 500px;
          height: 270px;
          top: -55px;
          left: -145px;
          transform: scale(0.4);
        }
      }

      .sys-right {
        width: 65%;
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
            }
          }
        }
      }
    }
  }
}
</style>
