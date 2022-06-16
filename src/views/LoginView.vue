<template>
  <div class="login-container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <h2>Login</h2>
          <div>Welcome to use relax</div>
        </div>
      </template>
      <div>
        <el-form
          class="login-form"
          label-position="top"
          label-width="100px"
          ma
          :model="admin"
        >
          <el-form-item label="UserName">
            <el-input placeholder="UserName" v-model="admin.name" />
          </el-form-item>
          <el-form-item label="Password">
            <el-input placeholder="Password" v-model="admin.password" />
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="checked">Remember me</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button :disabled="!checked" @click="submit" type="primary"
              >Login</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import router from "@/router";
//用户名密码
const admin = ref({
  name: "admin",
  password: "admin",
});
//是否记住
const checked = ref(false);
//提交登录
function submit() {
  if (admin.value.name == "admin" && admin.value.password == "admin") {
    router.push("/");
  }
}
</script>
<style scoped>
.login-container {
  display: flex;
  width: 100vw;
  height: 100vh;
}
.card-header {
  text-align: center;
}
.box-card {
  margin: auto;
  width: 80%;
  height: 80%;
}
.login-form {
  width: 50%;
  margin: auto;
  margin-top: 50px;
}
.el-input {
  height: 50px;
}
.el-button {
  height: 50px;
  width: 100%;
}
</style>
