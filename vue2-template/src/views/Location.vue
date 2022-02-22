<template>
  <div class="container">
<!--        left-->
    <LocationDeviceList></LocationDeviceList>


<!--        center-->
    <div class="center">

    </div>
    <!--    right-->
    <div class="right">

    </div>
  </div>
</template>

<script>
import LocationDeviceList from "@/components/LocationDeviceList";

export default {
  name: 'Location',
  components: {
    LocationDeviceList
  },
  data() {
    return {};
  },

  mounted() {

  },
  methods: {}
};
</script>
<style lang="less" scoped>
.container {
  display: flex;
  flex-grow: 1;
  justify-content: space-around;
  z-index: 10;
  color: white;
  padding: 0 1vw;

  .center {
    width: 48vw;
    background: rgba(244, 244, 244, 0.5);
    height: calc(100vh - 9vw);
    margin-top: 1vw;
  }

  .right {
    width: 21vw;
    background: rgba(244, 244, 244, 0.5);
    height: calc(100vh - 9vw);
    margin-top: 1vw;
  }
}
</style>