<template>
  <div>
    <div class="common-layout">
      <el-container>
        <el-aside width="200">
          <!-- 菜单 -->
          <el-menu
            router
            :collapse="isCollapse"
            default-active="1"
            class="full-height el-menu-vertical-demo"
            background-color="#05668D"
            active-text-color="#fff"
          >
            <div class="Logo">
              <el-icon @click="collapse"
                ><img src="@/assets/logo.svg"
              /></el-icon>
            </div>
            <el-menu-item index="/">
              <el-icon><House /></el-icon>
              <span>主页</span>
            </el-menu-item>
            <el-menu-item index="table">
              <el-icon><setting /></el-icon>
              <span>表格</span>
            </el-menu-item>
            <el-sub-menu index="/">
              <template #title>
                <el-icon><TrendCharts /></el-icon>
                <span>图表</span>
              </template>
              <el-menu-item index="dashboard">仪表盘</el-menu-item>
              <el-menu-item index="state">统计图</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="vetting">
              <el-icon><Stamp /></el-icon>
              <span>审批</span>
            </el-menu-item>
            <el-menu-item index="edit">
              <el-icon><Edit /></el-icon>
              <span>编辑</span>
            </el-menu-item>
            <el-menu-item index="setting">
              <el-icon><setting /></el-icon>
              <span>设置</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container class="container">
          <el-header>
            <el-row justify="space-between" align="middle" class="row-bg">
              <el-col :span="6">
                <el-icon @click="collapse" class="relax"
                  ><img src="@/assets/logo.svg" /></el-icon
                >Relax后台模板
              </el-col>
              <el-col :span="6">
                <div class="avatar">
                  <el-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                  />
                  <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                      选项
                      <el-icon class="el-icon--right">
                        <arrow-down />
                      </el-icon>
                    </span>
                    <template #dropdown>
                      <el-dropdown-menu>
                        <el-dropdown-item>退出</el-dropdown-item>
                        <el-dropdown-item>切换账号</el-dropdown-item>
                      </el-dropdown-menu>
                    </template>
                  </el-dropdown>
                </div>
              </el-col>
            </el-row>
          </el-header>
          <el-page-header :content="title" />
          <el-main>
            <el-card class="box-card">
              <router-view v-slot="{ Component }">
                <transition name="slide-fade">
                  <keep-alive>
                    <component :is="Component" />
                  </keep-alive>
                </transition>
              </router-view>
            </el-card>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>
<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { http } from "@/utiles/http";
import {
  TrendCharts,
  Setting,
  House,
  Stamp,
  Edit,
  ArrowDown,
} from "@element-plus/icons-vue";
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
const isCollapse = ref(false);
function collapse() {
  isCollapse.value = !isCollapse.value;
}

onMounted(async () => {
  const res = await http.get("mock");
  console.log(res);
});

function goBack() {
  return;
}

const route = useRoute();
const title = computed(() => {
  return route.meta.title;
});
// const menu = ref({});
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-page-header {
  padding-left: 20px;
}
.avatar {
  height: 60px;
  display: flex;
  justify-content: end;
  align-items: center;
}
.Logo {
  height: 60px;
  line-height: 60px;
  text-align: center;
}
.Logo .el-icon {
  cursor: pointer;
  width: 30px;
  height: 30px;
}
.relax {
  width: 30px;
  height: 30px;
  vertical-align: middle;
}
</style>
