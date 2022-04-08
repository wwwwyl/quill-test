<template>
    <div class="wHeader">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">Home</el-menu-item>
          <el-menu-item index="2">Files</el-menu-item>
          <el-menu-item index="3">Editor</el-menu-item>
          <div style="float: right; padding-top: 6px">
            <el-button
              index="4"
              style="float: right"
              type="primary"
              @click="dialogVisible = true"
              >登录</el-button
            >
          </div>
          <el-dialog title="登录" :visible.sync="dialogVisible" width="600px">
            <div style="margin-top: 10px">
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
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false"
                >确 定</el-button
              >
            </span>
          </el-dialog>
        </el-menu>
    </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
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
      if (key === "3") {
        this.$router.push({ path: "/editor" }).catch((error) => error);
      }
    },
  },
};
</script>