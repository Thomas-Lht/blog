import React, { useState, useEffect } from 'react';
import './Weather.css'; // 引入CSS文件

const AppWeather = () => {
    const [location, setLocation] = useState('Unknown Location');
    const [temp, setTemp] = useState('???');
    const [wind, setWind] = useState('???');
    const [humidity, setHumidity] = useState('???');

    useEffect(() => {
        fetchIPLocation();
    }, []);

    const fetchIPLocation = async () => {
        try {
            const response = await fetch('https://ipinfo.io/json?token=c3a59cd480033a'); // 替换为你的API token
            const data = await response.json();
            const [lat, lon] = data.loc.split(',');
            setLocation(`${data.city}, ${data.country}`);

            // 使用经纬度获取天气信息
            fetchWeather(lat, lon);
        } catch (error) {
            console.error('Error fetching IP location:', error);
            setLocation('Unable to retrieve location data');
        }
    };

    const fetchWeather = async (lat, lon) => {
        try {
            const apiKey = '8c29547ce2f03180fe5c131030e09673'; // 替换为你的API密钥
            const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

            const response = await fetch(weatherAPI);
            const data = await response.json();

            setLocation(`${data.name}, ${data.sys.country}`);
            setTemp(`${data.main.temp} °C`);
            setWind(`${data.wind.speed} m/s`);
            setHumidity(`${data.main.humidity}%`);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setLocation('Unable to retrieve weather data');
        }
    };

    return (
        <div className="weather">
            <h3>Weather in {location}</h3>
            <p>Temperature: {temp}</p>
            <p>Wind: {wind}</p>
            <p>Humidity: {humidity}</p>
        </div>
    );
};

export default AppWeather;

