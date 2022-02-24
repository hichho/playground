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
          <PropertyTitle title="硬件资产"/>
          <div class="hardware-table-title">
            <span class="end-title">总数</span>
            <span>未注册</span>
          </div>

        </div>
        <div class="hardware-center">
          2
        </div>
        <div class="hardware-right">
          3
        </div>
      </div>
      <!--  nat子网  -->
      <div class="nat">

      </div>
      <!--    操作系统-->
      <div class="sys">

      </div>
    </div>
  </div>
</template>
<script>
import PropertyTitle from '@/components/PropertyTitle';

export default {
  name: 'Property',
  components: { PropertyTitle },
  data() {
    return {
      options: [ {
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
      }, ],
      value: '浙江省',
      //
      sumData: [
        { id: '1', label: '组织架构', value: '1230' },
        { id: '2', label: '硬件资产', value: '21763' },
        { id: '3', label: '业务系统', value: '346' },
        { id: '4', label: '云资产', value: '387' },
        { id: '5', label: '终端用户', value: '5120' },
      ],
      //hardware-sum
      hardware: [
        { id: '1', label: '计算机设备', sumValue: 11510, unRegisteredSum: 1340 },
        { id: '2', label: '网络设备', sumValue: 11510, unRegisteredSum: 1340 },
        { id: '3', label: '安全设备', sumValue: 11510, unRegisteredSum: 1340 },
        { id: '4', label: '办公设备', sumValue: 11510, unRegisteredSum: 1340 },
        { id: '5', label: '未识别设备', sumValue: 11510, unRegisteredSum: 1340 },
      ],
    };
  },
  computed: {
    getImgSrc() {
      return function(index) {
        return '../../images/property_' + (index + 1) + '.png';
      };
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
    background: rgba(12, 12, 12, 0.3);
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
        }

        .item-img {
          width: 28px;
          object-fit: contain;
          margin-right: 2px;
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
      width: 99%;
      height: 128px;
      border: 1px solid red;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;

      .hardware-left {
        width: 32%;
        height: 100%;

        .hardware-table-title {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          width: 100%;

          .end-title {
            margin-left: 24px;
          }
        }
      }

      .hardware-center {
        width: 32%;
        height: 100%;
        background: rgba(12, 233, 12, 0.3);
      }

      .hardware-right {
        background: rgba(12, 122, 234, 0.3);
        width: 32%;
        height: 100%;
      }
    }

    .nat {
      width: 100%;
      height: 128px;
      border: 1px solid red;
    }

    .sys {
      width: 100%;
      height: 128px;
      border: 1px solid red;
    }
  }
}
</style>
