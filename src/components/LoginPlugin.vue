<template>
  <div class="wHeader">
      <div style="float: right; padding-top: 6px">
        <el-button
          style="float: right"
          type="primary"
          @click="dialogVisible = true"
          v-if="this.$store.state.isLogin === false"
          >登录</el-button
        >
        <el-button
          style="float: right"
          type="primary"
          @click="handleLogout"
          v-if="this.$store.state.isLogin === true"
          >登出</el-button
        >
      </div>
      <el-dialog title="" :visible.sync="dialogVisible" width="600px" >
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
        <div style="margin-top: 10px " >
            <!-- <a style=" color:#409EFF; float:right;margin-right:15px; text-decoration:none" href="">忘记密码</a> -->
            <el-button type="text" @click="makeDialogUnvisAndDialog2vis" style="float:right;margin-right:0px;">忘记密码</el-button>
        </div>

        <span slot="footer" class="dialog-footer" style=":text-align:center">
          <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
          <el-button type="primary" @click="handleLogin" style=":text-align:center">确 定</el-button>
          <span style=":text-align:center;line-height:30px">
            <li style="font-size: 14px">没有账号？
              <!-- <a style="color:#409EFF; text-decoration:none" @click="makeDialogUnvisAndDialog2vis">立即注册</a> -->
              <el-button type="text" @click="makeDialogUnvisAndDialog2vis">立即注册</el-button>
            </li>
          </span>
        </span>
      </el-dialog>
      
      <el-dialog title="" :visible.sync="dialog2Visible" width="600px" >
        <h1>注册</h1>
        <div style="margin-top: 15px">
          <el-input v-model="username" placeholder="用户名"></el-input>
        </div>
        <div style="margin-top: 15px">
          <el-input v-model="username" placeholder="手机号码"></el-input>
        </div>
        <div style="margin-top: 15px">
          <el-input
            v-model="password"
            placeholder="密码"
            show-password
          ></el-input>
        </div>
        <div style="margin-top: 15px">
          <el-input
            v-model="password"
            placeholder="确认密码"
            show-password
          ></el-input>
        </div>

        <span slot="footer" class="dialog-footer" style=":text-align:center">
          <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
          <el-button type="primary" @click="handleLogin" style=":text-align: center">注 册</el-button>
          <span style=":text-align:center;line-height:30px">
            <li style="font-size: 14px">已有账号？
              <!-- <a style="color:#409EFF; text-decoration:none" @click="makeDialog2UnvisAndDialogvis">立即登录</a> -->
              <el-button type="text" @click="makeDialogUnvisAndDialog2vis">立即登录</el-button>
            </li>
          </span>
        </span>
      </el-dialog>
  </div>
</template>

<script>
export default {
  inject: ["reload"],
  data() {
    return {
      dialogVisible: false,
      dialog2Visible: false,
      username: "",
      password: "",
      password2: "",
      phoneNumber: "",
    };
  },
  methods: {
    handleLogin() {
      let st = this.$store;
      let nt = this.$notify;
      let uv = this.makeDialogUnvis;
      let reload = this.reload;
      // // reloading测试
      // st.commit("login");
      // this.reload();
      // uv();
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
            // nt({
            //   title: "登录成功",
            //   type: "success",
            //   position: "top-left",
            //   offset: 60,
            // });
            reload();
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
    handleRegist() {
      let st = this.$store;
      let nt = this.$notify;
      let uv = this.makeDialog2Unvis;
      this.$axios
        .post(
          "publish/login",
          this.$qs.stringify({
            username: this.username,
            password: this.password,
            phoneNumber: this.phoneNumber,
            password2: this.password2,
          })
        )
        .then(function (response) {
          if (response.data.errno === 0) {
            console.log("regist success");
            uv();
            st.commit("regist");
            nt({
              title: "注册成功",
              type: "success",
              position: 'top-left',
              offset:60,
            });
            
          } else {
            nt.error({
              title: "密码不同",
              position: 'top-left',
              offset:60
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    makeDialogUnvis() {
      this.dialogVisible = false;
    },
    makeDialogUnvisAndDialog2vis() {
      this.dialogVisible = false;
      this.dialog2Visible = true;
    },
    makeDialog2UnvisAndDialogvis() {
      this.dialogVisible = true;
      this.dialog2Visible = false;
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