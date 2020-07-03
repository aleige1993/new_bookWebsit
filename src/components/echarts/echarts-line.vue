<template>
  <div class="echarts duflunt">
    <div id="myChartLine" :style="{width: '100%', height: '500px',margin:'0 auto'}"></div>
  </div>
</template>
<script>
export default {
  name: "echarts",
  props: ["userJson"],
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.drawLine();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var myChartContainer = document.getElementById("myChartLine");
      var resizeMyChartContainer = function() {
        myChartContainer.style.width = document.body.offsetWidth / 2 + "px"; //页面一半的大小
      };
      resizeMyChartContainer();
      var myChartLine = this.$echarts.init(myChartContainer);

      var option = {
        title: {
          text: "2020年全国发行趋势图",
          left: "center",
        },
        xAxis: {
          type: "category",
          data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [10, 932, 20, 600, 70, 1330, 200],
            type: "line",
          },
        ],
      };

      myChartLine.setOption(option);
      window.onresize = function() {
        resizeMyChartContainer();
        myChartLine.resize();
      };
    },
  },
};
</script>