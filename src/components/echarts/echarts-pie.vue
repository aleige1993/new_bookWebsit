<template>
  <div class="echarts duflunt">
    <div id="myChartPie" :style="{width: '100%', height: '500px',margin:'0 auto'}"></div>
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
    genData(count) {
      var nameList = [
        "赵",
        "钱",
        "孙",
        "李",
        "周",
        "吴",
        "郑",
        "王",
        "冯",
        "陈",
        "褚",
        "卫",
        "蒋",
        "沈",
        "韩",
        "杨",
        "朱",
        "秦",
        "尤",
        "许",
        "何",
        "吕",
        "施",
        "张",
        "孔",
        "曹",
        "严",
        "华",
        "金",
        "魏",
        "陶",
        "姜",
        "戚",
        "谢",
        "邹",
        "喻",
        "柏",
        "水",
        "窦",
        "章",
        "云",
        "苏",
        "潘",
        "葛",
        "奚",
        "范",
        "彭",
        "郎",
        "鲁",
        "韦",
        "昌",
        "马",
        "苗",
        "凤",
        "花",
        "方",
        "俞",
        "任",
        "袁",
        "柳",
        "酆",
        "鲍",
        "史",
        "唐",
        "费",
        "廉",
        "岑",
        "薛",
        "雷",
        "贺",
        "倪",
        "汤",
        "滕",
        "殷",
        "罗",
        "毕",
        "郝",
        "邬",
        "安",
        "常",
        "乐",
        "于",
        "时",
        "傅",
        "皮",
        "卞",
        "齐",
        "康",
        "伍",
        "余",
        "元",
        "卜",
        "顾",
        "孟",
        "平",
        "黄",
        "和",
        "穆",
        "萧",
        "尹",
        "姚",
        "邵",
        "湛",
        "汪",
        "祁",
        "毛",
        "禹",
        "狄",
        "米",
        "贝",
        "明",
        "臧",
        "计",
        "伏",
        "成",
        "戴",
        "谈",
        "宋",
        "茅",
        "庞",
        "熊",
        "纪",
        "舒",
        "屈",
        "项",
        "祝",
        "董",
        "梁",
        "杜",
        "阮",
        "蓝",
        "闵",
        "席",
        "季",
        "麻",
        "强",
        "贾",
        "路",
        "娄",
        "危",
      ];
      var legendData = [];
      var seriesData = [];
      var selected = {};
      for (var i = 0; i < count; i++) {
        let name =
          Math.random() > 0.65
            ? makeWord(4, 1) + "·" + makeWord(3, 0)
            : makeWord(2, 1);
        legendData.push(name);
        seriesData.push({
          name: name,
          value: Math.round(Math.random() * 100000),
        });
        selected[name] = i < 6;
      }

      return {
        legendData: legendData,
        seriesData: seriesData,
        selected: selected,
      };

      function makeWord(max, min) {
        var nameLen = Math.ceil(Math.random() * max + min);
        var name = [];
        for (var i = 0; i < nameLen; i++) {
          name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
        }
        return name.join("");
      }
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var myChartContainer = document.getElementById("myChartPie");
      var resizeMyChartContainer = function() {
        myChartContainer.style.width = document.body.offsetWidth / 2 + "px"; //页面一半的大小
      };
      resizeMyChartContainer();
      var myChartPie = this.$echarts.init(myChartContainer);

      var option = {
        title: {
          text: "图书发行总量状态趋势",
          left: "center",
        },
        tooltip: {},
        series: [
          {
            name: "pie",
            type: "pie",
            selectedMode: "single",
            selectedOffset: 30,
            clockwise: true,
            label: {
              fontSize: 18,
              color: "#235894",
            },
            labelLine: {
              lineStyle: {
                color: "#235894",
              },
            },
            data: [
              { value: 10, name: "剩余：10%" },
              { value: 20, name: "发行中：20%" },
              { value: 70, name: "实际已发行：70%" },
            ],
          },
        ],
      };

      myChartPie.setOption(option);
      window.onresize = function() {
        resizeMyChartContainer();
        myChartPie.resize();
      };
    },
  },
};
</script>