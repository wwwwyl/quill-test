<template>
  <div class="1editor">
    <QuillEditor v-on:input="input" ref="myEditor"/>
    <button v-on:click="save">save</button>
    <button v-on:click="load">load</button>
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
      }
  },
  mounted () {
      this.raw = {};
      this.editor = this.$refs.myEditor
  },
  updated () {
      console.log('update!');
  },
  methods: {
    save() {
        console.log('saving!');
        this.$axios.post('saving/save', this.$qs.stringify({
            name : 'test',
            raw : this.raw,
        }))
        .then(function (response) {
            console.log(response);
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
            name : 'test',
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
