<template>
  <div id="selfIncreasingNumId" :class="className" data-target="value">
    {{ internalValue }}
  </div>
</template>
<script>
export default {
  name: 'SelfIncreasingNum',
  props: ['className', 'value', 'initPercent', 'isUseWebApiAnimation'
    , 'unit'
  ],
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
      internalInitPercent: undefined
    }
  },
  methods: {
    // func-1
    increasing() {
      this.internalValue = 0;
      const unit = parseInt((this.value - this.internalValue) / 17);
      const timer = setInterval(() => {
        this.internalValue = this.internalValue + unit;
        if (Number(this.value) <= Number(this.internalValue)) {
          this.internalValue = this.value;
          clearInterval(timer);
        } else {
          // console.log(this.value,this.internalValue)
        }
      }, 17);
    },
    webAnimationIncreasing() {
      const increment = 50;
      this.internalValue = 0;
      const counterPlus = () => {
        this.internalValue += increment;
        if (this.internalValue < this.value) {
          requestAnimationFrame(counterPlus);
        } else {
          this.internalValue = this.value;
        }
      }
      requestAnimationFrame(counterPlus);
    },
    //获取增上单元
    getUnit() {
      if (!isNaN(Number(this.unit))) {
        return this.unit;
      }

    }
  }
}
</script>