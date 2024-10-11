<template>
  <div class="app"> <!-- 注意这里的 class 名称为小写 -->
    <Header />
    <Navbar />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
// 如果需要使用 ServerStatus 和 Weather 组件，可以将它们也引入
// import ServerStatus from './components/ServerStatus.vue';
// import Weather from './components/Weather.vue';

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
    Footer,
    // ServerStatus,
    // Weather
  }
};
</script>

<style>
@import './App.css'; /* 引入 CSS 文件 */
</style>
