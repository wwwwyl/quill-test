<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  },
  created() {
    this.jump();
  },
  methods: {
    jump() {
      this.$router.push({path: '/editor'});
    },
    input(val){
      console.log(JSON.stringify(val));
    }
  }
}
</script>
