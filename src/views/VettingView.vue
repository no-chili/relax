<template>
  <div>
    <el-descriptions
      title="Vertical list without border"
      :column="4"
      size="large"
      direction="vertical"
      id="vettingTable"
    >
      <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
      <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
      <el-descriptions-item label="Place" :span="2"
        >Suzhou</el-descriptions-item
      >
      <el-descriptions-item label="Remarks">
        <el-tag size="small">School</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="Address"
        >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
      </el-descriptions-item>
    </el-descriptions>
    <el-button @click="toPrintTable">打印</el-button>
  </div>
</template>
<script lang="ts" setup>
import { printTable } from "@/utiles/print";
//调用打印
function toPrintTable() {
  const table = window.document.getElementById("vettingTable");
  table ? printTable(table) : null;
}
</script>
<style scoped></style>
