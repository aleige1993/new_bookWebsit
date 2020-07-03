<template>
  <div class="main">
    <div class="panls">
      <div class="duflunt style3">
        <div class="conents">
          <div class="echart-section">
            <EchartsChain></EchartsChain>
          </div>
          <div class="echart-section">
            <EchartsPie></EchartsPie>
          </div>
          <div class="echart-section">
            <EchartsLine></EchartsLine>
          </div>
          <div class="echart-section">
            <EchartsBar></EchartsBar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EchartsChain from "../components/echarts/echarts-chain";
import EchartsPie from "../components/echarts/echarts-pie";
import EchartsLine from "../components/echarts/echarts-line";
import EchartsBar from "../components/echarts/echarts-bar";
export default {
  components: {
    EchartsChain,
    EchartsPie,
    EchartsLine,
    EchartsBar,
  },
  props: {},
  data() {
    return {
      currentPage: 1,
    };
  },
  watch: {},
  computed: {},
  methods: {},
  mounted() {},
};
</script>
<style  scoped>
.pagechanges {
  text-align: right;
  margin-top: 35px;
}
.barent {
  font-size: 20px;
  color: #6699f7;
  margin-top: 20px;
}
.barent a {
  color: #6699f7;
  cursor: none;
}
.barent span {
  margin: 0 10px;
}
.panls {
  margin-top: 40px;
  margin-bottom: 35px;
}
.echart-section {
  margin-bottom: 30px;
}
</style>