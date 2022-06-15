<template>
  <div class="EchartContainer">
    <div
      ref="lineEchartElement"
      :style="{ width: '500px', height: '350px' }"
    ></div>
    <div
      ref="boardEchartElement"
      :style="{ width: '500px', height: '350px' }"
    ></div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { init } from "echarts";
const lineEchartElement = ref();
const boardEchartElement = ref();
//参数形式传递，进行绘制
function initChart() {
  // 具体使用查看Echarts官方
  const lineChart = init(lineEchartElement.value as HTMLElement, "dark");
  const borderRadiusChart = init(
    boardEchartElement.value as HTMLElement,
    "light"
  );
  //折线图配置项
  const lineOption = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
      },
    ],
  };
  // 饼图配置项
  const borderRadiusOption = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "40",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
      },
    ],
  };
  lineChart.setOption(lineOption);
  borderRadiusChart.setOption(borderRadiusOption);
}
onMounted(() => {
  initChart();
});
</script>
<style scoped>
.EchartContainer {
  display: flex;
  justify-content: space-between;
}
</style>
