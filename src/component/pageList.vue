<template>
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
  @prev-click="()=>{}"
  @next-click="()=>{}"
/>
</template>
<script lang='ts' setup>
interface Props {
  query:object,
  search:Function
}

const props = defineProps<Props>()

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

</script>
<style scoped>
.el-pagination{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
