<template>
  <div id="selfIncreasingNumId" :class="className" data-target="value">
    {{ internalValue }}
  </div>
</template>
<script>
import Num from '@/views/Num';

export default {
  name: 'SelfIncreasingNum',
  props: {
    className: {
      type: String, required: false,
    },
    value: { type: Number, required: true },
    initValue: { type: Number, required: false },
    renderType: {
      validator: function(value) {
        // 这个值必须匹配下列字符串中的一个
        return [ 'interval', 'webAnimation' ].indexOf(value) !== -1;
      }
    },
    unit: { type: Number, required: false }
  },
  mounted() {
    this.increasing();
    // if (this.isUseWebApiAnimation) {
    // this.webAnimationIncreasing();
    // } else {
    //   this.increasing();
    // }
  },
  data() {
    return {
      internalValue: undefined,
    };
  },
  methods: {
    // func-1
    increasing() {
      const _initValue = this.initValue ?? 0;
      this.internalValue = _initValue;
      const localUnit = this.getUnit();
      const timer = setInterval(() => {
        this.internalValue = this.calculate(this.internalValue, localUnit, 'add');
        if (this.value > _initValue) {
          if (Number(this.value) <= Number(this.internalValue)) {
            this.internalValue = this.value;
            clearInterval(timer);
          }
        } else {
          if (Number(this.value) >= Number(this.internalValue)) {
            this.internalValue = this.value;
            clearInterval(timer);
          }
        }
      }, 17);
    },
    webAnimationIncreasing() {
      const increment = 50;
      this.internalValue = 0;
      const counterPlus = () => {
        this.internalValue = this.calculate(this.internalValue, increment, 'add');
        if (this.internalValue < this.value) {
          requestAnimationFrame(counterPlus);
        } else {
          this.internalValue = this.value;
        }
      };
      requestAnimationFrame(counterPlus);
    },
    //get increasing unit
    getUnit() {
      let rlt;
      const roundValue_target = this.value.toString()
          .split('.')[1]?.length;
      const roundValue_origin = this.initValue.toString()
          .split('.')[1]?.length;
      let roundValue = roundValue_target ?? roundValue_origin;
      if (this.value < 17) {
        roundValue = 1;
      }
      //todo 自己调用自己，如果rlt 为0，则一直查找
      if (this.unit) {
        rlt = this.unit;
      } else {
        rlt = Number(this.toFixed(((this.value - (this.initValue ?? 0)) / 17), roundValue ?? 0));
      }
      console.log(rlt);
      return rlt;
    },
    /**
     * @param num_1
     * @param num_2
     * @param type add or reduce
     */
    calculate(num_1, num_2, type) {
      let temp1,
          temp2,
          a;
      try {
        // 获取temp1小数点后的长度
        temp1 = num_1.toString()
            .split('.')[1].length;
      } catch (e) {
        temp1 = 0;
      }
      try {
        // 获取temp2小数点后的长度
        temp2 = num_2.toString()
            .split('.')[1].length;
      } catch (e) {
        temp2 = 0;
      }
      a = Math.pow(10, Math.max(temp1, temp2));
      return type === 'add' ? (this.handleMultiplication(num_1, a) +
          this.handleMultiplication(num_2, a)) / a : (num_1 * a - num_2 * a) / a;
    },
    handleMultiplication(multiplier_1, multiplier_2) {
      let m = 0,
          s1 = multiplier_1.toString(),
          s2 = multiplier_2.toString();
      try {
        m += s1.split('.')[1].length;
      } catch (e) {
      }
      try {
        m += s2.split('.')[1].length;
      } catch (e) {
      }
      return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
    },
    /**
     * not round
     * @param num
     * @param decimal
     * @returns {string}
     */
    toFixed(num, decimal) {
      num = num.toString();
      let index = num.indexOf('.');
      if (index !== -1) {
        num = num.substring(0, decimal + index + 1);
      } else {
        num = num.substring(0);
      }
      return Number(parseFloat(num)
          .toFixed(decimal));
    }

  }
};
</script>
