<template>
  <div class="home">
        <el-carousel
          :interval="5000"
          arrow="always"
          height="600px"
          style="width: 60%; margin: 0 auto"
        >
          <el-carousel-item v-for="(item, index) in topImg" :key="index">
            <img :src="item.url" style="width: 100%" />
          </el-carousel-item>
        </el-carousel>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  data() {
    return {
      topImg: [
        {
          url: "https://s1.ax1x.com/2022/04/08/L9mJKO.jpg",
        },
        {
          url: "https://s1.ax1x.com/2022/04/08/L9mvJ1.jpg",
        },
        {
          url: "https://s1.ax1x.com/2022/04/08/L9npQK.jpg",
        },
      ],
    };
  },
  methods: {
    jump() {
      this.$router.push({ path: "/editor" });
    },
    input(val) {
      console.log(JSON.stringify(val));
    },
  },
};
</script>
