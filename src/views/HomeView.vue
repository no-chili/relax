<template>
  <div>
    <div class="common-layout">
      <el-container>
        <el-aside width="200">
          <!-- 菜单 -->
          <Cmenu/>
        </el-aside>
        <el-container class="container">
          <el-header>
            <el-row justify="space-between" align="middle" class="row-bg">
              <el-col class="wrap" :span="6">
                <el-icon class="relax"
                  ><img src="@/assets/logo.svg"
                /></el-icon>
                <span class="paddingleft">Relax后台模板</span>
              </el-col>
              <el-col :span="6">
                <div class="avatar">
                  <div class="flex-d">
                    <el-icon @click="full" class="fullscrren">
                      <i-ep-view />
                    </el-icon>
                  </div>
                  <el-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                  />
                  <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                      选项
                      <el-icon class="el-icon--right">
                        <i-ep-arrow-down />
                      </el-icon>
                    </span>
                    <template #dropdown>
                      <el-dropdown-menu>
                        <el-dropdown-item @click="logout"
                          >退出</el-dropdown-item
                        >
                        <el-dropdown-item @click="logout"
                          >切换账号</el-dropdown-item
                        >
                      </el-dropdown-menu>
                    </template>
                  </el-dropdown>
                </div>
              </el-col>
            </el-row>
          </el-header>
          <el-page-header @click="back" :content="title" />
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
import { http } from "@/utiles/http";
// 全屏
import { useFullscreen } from "@vueuse/core";
import Cmenu from '../layout/Cmenu.vue'
const { isFullscreen, enter, exit, toggle } = useFullscreen();

// 全屏
function full() {
  return toggle();
}

onMounted(async () => {
  const res = await http.get("mock");
  console.log(res);
});

const router = useRouter();
function back() {
  return router.go(-1);
}

const route = useRoute();
const title = computed(() => {
  return route.meta.title;
});

function logout() {
  router.push("/login");
}
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
.wrap {
  white-space: nowrap;
}
.relax {
  width: 30px;
  height: 30px;
  vertical-align: middle;
}
.el-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.paddingleft {
  padding-left: 10px;
}

.fullscrren {
  transition: all 0.3s;
  width: 45px;
  height: 45px;
  border-radius: 5px;
  border-bottom: 1px solid #ccc;
}
.fullscrren:hover {
  background-color: #ccc;
  width: 45px;
  height: 45px;
  border-radius: 5px;
}
</style>
