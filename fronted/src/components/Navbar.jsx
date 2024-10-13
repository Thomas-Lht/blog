import React, { useState } from 'react';
import './Navbar.css'; // 引入CSS文件

const AppNavbar = () => {
    const [inputWidth, setInputWidth] = useState('300px'); // Default width

    const handleFocus = () => {
        setInputWidth('500px'); // Width when focused
    };

    const handleBlur = () => {
        setInputWidth('300px'); // Revert width when not focused
    };

    return (
        <div className="navbar">
            <div className="left">
                <div className="logo">
                    <a href="/#home" className="logo-link">
                        <div className="logo_pic">
                            <img src="/images/logo_pic.jpg" alt="head_pic" />
                        </div>
                        <span>皓月のblog</span>
                    </a>
                </div>
                <ul className="nav-links">
                    <li><a href="#"><span className="iconfont">&#xe801;</span>首页</a></li>
                    <li><a href="#"><span className="iconfont">&#xe7ed;</span>博客</a></li>
                    <li><a href="#"><span className="iconfont">&#xe601;</span>音乐</a></li>
                    <li><a href="#"><span className="iconfont">&#xe7b0;</span>工具箱</a></li>
                    <li><a href="#"><span className="iconfont">&#xe7a3;</span>其他</a></li>
                    <li><a href="#"><span className="iconfont">&#xe79d;</span>联系</a></li>
                </ul>
            </div>
            <div className="right">
                <div className="search-bar" style={{width: inputWidth}}>
                    <input
                        type="text"
                        className="search-box"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <button><i className="fa fa-search"></i></button>
                </div>
                <span className="iconfont">&#xe83e;</span>
                <div className="login-btn">未登录</div>
            </div>
        </div>
    );
};

export default AppNavbar;
