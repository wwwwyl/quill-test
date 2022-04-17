<template>
  <div class="wHeader">
    <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">Back</el-menu-item>
      <el-menu-item index="2" v-if="this.$store.state.isLogin"
        >Save</el-menu-item>
      <LoginPlugin />
    </el-menu>
  </div>
</template>

<script>
import LoginPlugin from '@/components/LoginPlugin.vue'
export default {
  components:{LoginPlugin,},
  inject: ["reload", "quitEditorView"],
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
        this.$router.go(-1);
        this.quitEditorView();
      }
      if (key === "2") {
        this.$store.state.saveFunction();
      }
    },
    handleLogin() {
      let st = this.$store;
      let nt = this.$notify;
      let uv = this.makeDialogUnvis;
      //   // reloading测试
      //   st.commit("login");
      //   this.reload();
      //   uv();
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
              position: "top-left",
              offset: 60,
            });
          } else {
            nt.error({
              title: "密码错误",
              position: "top-left",
              offset: 60,
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    handleLogout() {
      this.$store.commit("logout");
      this.reload();
    },
    makeDialogUnvis() {
      this.dialogVisible = false;
    },
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