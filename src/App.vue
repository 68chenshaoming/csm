<template>
  <div>
    <Header></Header>
    <!-- 路由组建出口 -->

    <router-view></router-view>
    <!-- 在Home Search显示  登录 注册隐藏 -->
    <!-- <Footer
      v-show="$route.path == '/home' || $route.path == '/search'"
    ></Footer> -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "",
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.$store.dispatch("categoryList");
  },
};
</script>

<style>
</style>