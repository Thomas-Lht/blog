<template>
    <header class="header">
        <img class="header_picture" src="/images/head_pic.jpg" alt="head_pic" />
        <ServerStatus />
        <Weather />
    </header>
</template>

<script>
import ServerStatus from "./AppServerStatus.vue"; // 确保路径正确
import Weather from "./AppWeather.vue"; // 确保路径正确

export default {
    name: 'AppHeader',
    components: {
        ServerStatus,
        Weather
    }
};
</script>

<style scoped>
@import './Header.css';
/* 引入 CSS 文件 */
</style>

export default Header;
