<template>
  <div class="wHeader">
    <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">Home</el-menu-item>
      <el-menu-item index="2">Files</el-menu-item>
      <el-menu-item index="3">Editor</el-menu-item>
      <LoginPlugin/>
    </el-menu>
  </div>
</template>

<script>
import LoginPlugin from '@/components/LoginPlugin.vue'
export default {
  components:{LoginPlugin,},
  inject:[],
  data() {
    return {
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
  },
};
</script>

<style scoped>

</style>