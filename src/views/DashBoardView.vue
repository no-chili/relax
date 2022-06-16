<template>
  <div>
    <el-row class="state-box" :gutter="12">
      <el-col :span="8">
        <el-card shadow="hover">
          <h2>A任务进度</h2>
          <el-progress
            type="dashboard"
            :percentage="percentage1"
            :color="colors"
          />
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          <h2>B任务进度</h2>
          <el-progress
            type="dashboard"
            :percentage="percentage2"
            :color="colors"
          />
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          <h2>C任务进度</h2>
          <el-progress
            type="dashboard"
            :percentage="percentage3"
            :color="colors"
          />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts" setup>
const percentage1 = ref(10);
const percentage2 = ref(50);
const percentage3 = ref(78);

const colors = [
  { color: "#f56c6c", percentage: 20 },
  { color: "#e6a23c", percentage: 40 },
  { color: "#5cb87a", percentage: 60 },
  { color: "#1989fa", percentage: 80 },
  { color: "#6f7ad3", percentage: 100 },
];
</script>
<style scoped>
.state-box {
  text-align: center;
}
</style>
