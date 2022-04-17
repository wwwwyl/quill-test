<template>
  <div class="1editor" style="margin-bottom:0px">
      <el-button v-on:click="save" type="primary" :disabled="!this.$store.state.isLogin">save</el-button>
    <!-- <el-button v-on:click="load">load</el-button> -->
    <QuillEditor v-on:input="input" ref="myEditor" eHeight="580px"/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import QuillEditor from '@/components/QuillEditor.vue'

export default {
  name: 'EditorView',
  components: {
    QuillEditor,
  },
  data () {
      return {
          unsaved : false,
          raw : Object,
          timer : Object,
          editor : Object,
          filename: String,
      }
  },
  mounted () {
      this.raw = {};
      this.editor = this.$refs.myEditor;

        // console.log(this.$route.params.openFile);
      if(this.$route.params.openFile !== undefined){
          console.log('open file~');
          this.filename = this.$route.params.openFile;
          this.load();
      }else{
          this.filename = 'test';
      }
      
  },
  updated () {
      console.log('update!');
  },
  methods: {
    save() {
        let nt = this.$notify;
        console.log('saving!');
        this.$axios.post('saving/save', this.$qs.stringify({
            name : this.filename,
            raw : this.raw,
        }))
        .then(function (response) {
            console.log(response);
            nt({
              title: "保存成功",
              type: "success",
              position: 'top-left',
              offset:60,
            });
        })
        .catch(function (error) {
            console.log(error);
        });
        this.unsaved = false;
    },
    load () {
        let editor = this.$refs.myEditor;
        console.log('loading!');
        this.$axios.post('saving/load', this.$qs.stringify({
            name : this.filename,
        }))
        .then(function (response) {
            editor.setContents(JSON.parse(response.data.raw));
            console.log(JSON.parse(response.data.raw));
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    input(val){
        //this.unsaved = true;
        this.raw = JSON.stringify(val);
    }
  },
  watch: {
      unsaved(val) {
          if(val) {
              this.timer = window.setInterval(this.save, 60000);
          } else {
              clearInterval(this.timer);
          }
      }
  }
}
</script>

<style scoped>

</style>
