import React from 'react';
import ServerStatus from './ServerStatus'; // 确保路径正确
import Weather from './Weather'; // 确保路径正确
import './Header.css'; // 引入CSS文件

const AppHeader = () => {
    return (
        <header className="header">
            <img className="header_picture" src="/images/head_pic.jpg" alt="head_pic" />
            <ServerStatus />
            <Weather />
        </header>
    );
};

export default AppHeader;

