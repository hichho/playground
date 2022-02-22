<template>
  <div class="container">
<!--        left-->
    <LocationDeviceList/>
<!--        center-->
    <MapAndRecords/>
    <!--    right-->
    <div class="right">

    </div>
  </div>
</template>

<script>
import LocationDeviceList from "@/components/LocationDeviceList";
import MapAndRecords from "@/components/MapAndRecords";

export default {
  name: 'Location',
  components: {
    LocationDeviceList,MapAndRecords
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

  .right {
    width: 21vw;
    background: rgba(244, 244, 244, 0.5);
    height: calc(100vh - 9vw);
    margin-top: 1vw;
  }
}
</style>