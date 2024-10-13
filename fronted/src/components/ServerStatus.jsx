import React, { useState, useEffect } from 'react';
import './ServerStatus.css'; // 引入CSS文件

const AppServerStatus = () => {
    const [cpu, setCpu] = useState(3.4);
    const [mem, setMem] = useState(52.3);
    const [disk, setDisk] = useState(38.3);

    useEffect(() => {
        const interval = setInterval(() => {
            setCpu((Math.random() * 100).toFixed(1));
            setMem((Math.random() * 100).toFixed(1));
            setDisk((Math.random() * 100).toFixed(1));
        }, 3000);

        return () => clearInterval(interval); // 清理定时器
    }, []);

    return (
        <div className="server-status">
            <div className="status-item">
                <p>CPU Usage: <span>{cpu}%</span></p>
                <span className="status-good">health</span>
            </div>
            <div className="status-item">
                <p>Memory Usage: <span>{mem}%</span></p>
                <span className="status-running">running</span>
            </div>
            <div className="status-item">
                <p>Disk Usage: <span>{disk}%</span></p>
                <span className="status-running">running</span>
            </div>
        </div>
    );
};

export default AppServerStatus;

