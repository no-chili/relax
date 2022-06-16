<template>
  <div>
    <!-- 搜索 -->
    <el-input
      v-model="searchKey"
      class="search-input"
      placeholder="搜索内容"
      :suffix-icon="Search"
    /><el-button type="primary">搜素</el-button>

    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column fixed prop="date" label="日期" width="150" />
      <el-table-column prop="name" label="姓名" width="120" />
      <el-table-column prop="state" label="州" width="120" />
      <el-table-column prop="city" label="城市" width="120" />
      <el-table-column prop="address" label="地址" width="600" />
      <el-table-column prop="zip" label="Zip" width="120" />
      <el-table-column fixed="right" label="操作" width="180">
        <template #default>
          <el-button link type="primary" size="small" @click="handleClick"
            >详情</el-button
          >
          <el-button link type="primary" size="small">编辑</el-button>
          <el-popconfirm title="Are you sure to delete this?">
            <template #reference>
              <el-button link type="danger">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页控制 -->
    <div class="demo-pagination-block">
      <el-pagination
        v-model:currentPage="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[100, 200, 300, 400]"
        :disabled="disabled"
        :background="background"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Search } from "@element-plus/icons-vue";
const handleClick = () => {
  console.log("click");
};
const tableData = ref([
  {
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Home",
  },
]);
for (let i = 0; i < 9; i++) {
  tableData.value.push({
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Home",
  });
}
//分页控制
const currentPage = ref(4);
const pageSize = ref(100);
const background = ref(true);
const disabled = ref(false);
const total = ref(1000);
//单页数据条目改变
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
};
//当前所在页改变
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
};

//搜索关键词
const searchKey = ref();
</script>
<style scoped>
.search-input {
  width: 200px;
}
</style>
