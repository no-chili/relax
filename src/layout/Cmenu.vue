<template>
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
    <template v-for="item in menu" :key="item.title">
      <el-menu-item v-if="!item.children" :index="item.path">
        <el-icon>
          <component :is="item.icon"/>
        </el-icon>
        <span>{{item.title}}</span>
      </el-menu-item>
      <el-sub-menu v-if="item.children" :index="item.path">
        <template #title>
          <el-icon>
            <component :is="item.icon"/>
          </el-icon>
          <span>{{item.title}}</span>
        </template>
        <el-menu-item v-for="subitem in item.children" :key="subitem.title" :index="subitem.path">{{subitem.title}}</el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>
<script lang='ts' setup>
import type {Menu} from '../types/menu'
import {House,Stamp,Setting,Edit,TrendCharts} from '@element-plus/icons-vue'
const isCollapse = ref(false);
function collapse() {
  isCollapse.value = !isCollapse.value;
}

const menu=[
  {
    icon:House,
    path:'/',
    title:'主页',
  },
  {
    icon:Setting,
    path:'/table',
    title:'表格',
  },
  {
    icon:TrendCharts,
    path:'/',
    title:'图表',
    children:[
      {
        path:'dashboard',
        title:'仪表盘'
      },
      {
        path:'state',
        title:'统计图'
      }
    ]
  },
  {
    icon:Stamp,
    path:'/vetting',
    title:'审批',
  },
  {
    icon:Edit,
    path:'/edit',
    title:'编辑',
  },
  {
    icon:Setting,
    path:'/setting',
    title:'设置',
  },
]
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
  border: 1px solid #ccc;
}
.fullscrren:hover {
  cursor: pointer;
  background-color: #ccc;
  width: 45px;
  height: 45px;
  border-radius: 5px;
}
</style>
