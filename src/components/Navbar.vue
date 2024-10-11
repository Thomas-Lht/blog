<template>
    <div class="navbar">
        <div class="left">
            <div class="logo">皓月のblog</div>
            <ul class="nav-links">
                <li><a href="#">首页</a></li>
                <li><a href="#">博客</a></li>
                <li><a href="#">音乐</a></li>
                <li><a href="#">工具箱</a></li>
                <li><a href="#">其他</a></li>
                <li><a href="#">联系</a></li>
            </ul>
        </div>
        <div class="right">
            <div class="search-bar">
                <input type="text" class="search-box" />
                <button><i class="fa fa-search"></i></button>
            </div>
        </div>
        <div class="login-btn">未登录</div>
    </div>
</template>

<script>
    export default {
    name: 'Navbar',
};
</script>

<style scoped>
    @import './Navbar.css'; /* 引入 CSS 文件 */
</style>
