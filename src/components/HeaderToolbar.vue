<template>
  <div class="wHeader">
    <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">Home</el-menu-item>
      <el-menu-item index="2">Files</el-menu-item>
      <el-menu-item index="3">Editor</el-menu-item>
      <div style="float: right; padding-top: 6px">
        <el-button
          index="4"
          style="float: right"
          type="primary"
          @click="dialogVisible = true"
          v-if="this.$store.state.isLogin === false"
          >登录</el-button
        >
        <el-button
          index="4"
          style="float: right"
          type="primary"
          @click="handleLogout"
          v-if="this.$store.state.isLogin === true"
          >登出</el-button
        >
      </div>
      <el-dialog title="" :visible.sync="dialogVisible" width="600px">
        <h1>登录</h1>
        <div style="margin-top: 15px">
          <el-input v-model="username" placeholder="用户名"></el-input>
        </div>
        <div style="margin-top: 15px">
          <el-input
            v-model="password"
            placeholder="密码"
            show-password
          ></el-input>
        </div>

        <span slot="footer" class="dialog-footer">
          <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
          <el-button type="primary" @click="handleLogin">确 定</el-button>
        </span>
      </el-dialog>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      username: "",
      password: "",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      keyPath;
      if (key === "1") {
        this.$router.push({ path: "/" }).catch((error) => error);
      }
      if (key === "2") {
        this.$router.push({ name: "files" }).catch((error) => error);
      }
      if (key === "3") {
        this.$router.push({ name: "editor" }).catch((error) => error);
      }
    },
    handleLogin() {
      let st = this.$store;
      let nt = this.$notify;
      let uv = this.makeDialogUnvis;
      this.$axios
        .post(
          "publish/login",
          this.$qs.stringify({
            username: this.username,
            password: this.password,
          })
        )
        .then(function (response) {
          if (response.data.errno === 0) {
            console.log("login success");
            uv();
            st.commit("login");
            nt({
              title: "登录成功",
              type: "success",
              position: 'top-left',
              offset:60,
            });
            
          } else {
            nt.error({
              title: "密码错误",
              position: 'top-left',
              offset:60
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    handleLogout() {
      this.$store.commit("logout");
    },
    makeDialogUnvis() {
      this.dialogVisible = false;
    }
  },
};
</script>

<style scoped>
h1 {
  margin: 3px 0;
  font-size: 2em;
  font-weight: bold;
}
</style>