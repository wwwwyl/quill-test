<template>
  <div id="app">
    <el-container>
      <el-header>
        <HeaderToolbar v-if="!this.editorView"/>
        <EditorToolbar v-if="isRouterAlive && this.editorView"/>
      </el-header>
      <el-main style="padding-bottom:0px">
        <router-view v-if="isRouterAlive"/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import HeaderToolbar from '@/components/HeaderToolbar.vue'
import EditorToolbar from '@/components/EditorToolbar.vue'
export default {
  components: {
    HeaderToolbar,EditorToolbar,
  },
  provide(){
    return{
      reload: this.reload,
      enterEditorView: this.enterEditorView,
      quitEditorView: this.quitEditorView,
    }
  },
  data(){
    return{
      isRouterAlive: true,
      editorView: false, // 控制工具栏
    }
  },
  methods:{
    // 重载页面
    reload(){
      this.isRouterAlive = false;
      this.$nextTick(function(){
        this.isRouterAlive = true;
      })
      console.log("reload");
    },
    enterEditorView(){
      this.editorView = true;
    },
    quitEditorView(){
      this.editorView = false;
    }
  }
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
