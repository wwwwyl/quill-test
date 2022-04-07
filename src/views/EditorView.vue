<template>
  <div class="1editor">
    <QuillEditor v-on:input="input"/>
  </div>
</template>

<script>
// @ is an alias to /src
import QuillEditor from '@/components/QuillEditor.vue'
import axios from 'axios'

export default {
  name: 'EditorView',
  components: {
    QuillEditor,
  },
  data () {
      return {
          unsaved : false,
          raw : Object,
          timer : Object
      }
  },
  methods: {
    save() {
        console.log('saving!');
        axios.post('http://127.0.0.1:8000/api/saving/save', {
            name : 'test',
            raw : this.raw,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        this.unsaved = false;
    },
    input(val){
        this.unsaved = true;
        this.raw = JSON.stringify(val);
    }
  },
  watch: {
      unsaved(val) {
          if(val) {
              this.timer = window.setInterval(this.save, 5000);
          } else {
              clearInterval(this.timer);
          }
      }
  }
}
</script>
