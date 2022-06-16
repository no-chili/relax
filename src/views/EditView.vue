<template>
  <div>
    <el-steps :space="200" finish-status="success" :active="active" simple>
      <el-step title="Step 1" :icon="Edit" />
      <el-step title="Step 2" :icon="UploadFilled" />
      <el-step title="Step 3" :icon="Picture" />
    </el-steps>
    <el-button style="margin-top: 12px" @click="next">Next step</el-button>
  </div>
</template>
<script lang="ts" setup>
import { Edit, UploadFilled, Picture } from "@element-plus/icons-vue";
const active = ref(1);
function next() {
  active.value = active.value + 1;
}
</script>
<style scoped></style>
