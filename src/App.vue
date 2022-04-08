<template>
  <div id="app">
    <el-container>
      <el-header>
        <HeaderToolbar/>
      </el-header>
      <el-main style="padding-bottom:0px">
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import HeaderToolbar from '@/components/HeaderToolbar.vue'
export default {
  components: {
    HeaderToolbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
