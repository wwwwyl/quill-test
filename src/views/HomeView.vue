<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <QuillEditor msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import QuillEditor from '@/components/QuillEditor.vue'

export default {
  name: 'HomeView',
  components: {
    QuillEditor,
  }
}
</script>
