<template>
  <div class="echarts duflunt">
    <div id="myChartBar" :style="{width: '100%', height: '500px',margin:'0 auto'}"></div>
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
      var myChartContainer = document.getElementById("myChartBar");
      var resizeMyChartContainer = function() {
        myChartContainer.style.width = document.body.offsetWidth / 2 + "px"; //页面一半的大小
      };
      resizeMyChartContainer();
      var myChartBar = this.$echarts.init(myChartContainer);

      var option = {
                       title: {
          text: "图书发行量各省市地区排名",
          left: "center",
        },
        dataset: {
          source: [
            ["score", "amount", "product"],
            [89.3, 58212, "北京"],
            [57.1, 78254, "上海"],
            [74.4, 41032, "深圳"],
            [50.1, 12755, "四川"],
            [89.7, 20145, "河南"],
            [68.1, 79146, "河北"],
            [19.6, 91852, "天津"],
            [10.6, 101852, "南京"],
            [32.7, 20112, "重庆"],
          ],
        },
        grid: { containLabel: true },
        xAxis: { name: "amount" },
        yAxis: { type: "category" },
        visualMap: {
          orient: "horizontal",
          left: "center",
          min: 10,
          max: 100,
          text: ["高", "低"],
          // Map the score column to color
          dimension: 0,
          inRange: {
            color: ["#D7DA8B", "#E15457"],
          },
        },
        series: [
          {
            type: "bar",
            encode: {
              // Map the "amount" column to X axis.
              x: "amount",
              // Map the "product" column to Y axis
              y: "product",
            },
          },
        ],
      };

      myChartBar.setOption(option);
      window.onresize = function() {
        resizeMyChartContainer();
        myChartBar.resize();
      };
    },
  },
};
</script>