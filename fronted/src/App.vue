<template>
  <div class="app"> <!-- 注意这里的 class 名称为小写 -->
    <AppHeader />
    <AppNavbar />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppNavbar from './components/AppNavbar.vue';
import AppFooter from './components/AppFooter.vue';
// 如果需要使用 ServerStatus 和 Weather 组件，可以将它们也引入
// import ServerStatus from './components/ServerStatus.vue';
// import Weather from './components/Weather.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppNavbar,
    AppFooter,
  }
};
</script>

<style>
@import './App.css'; /* 引入 CSS 文件 */
</style>
