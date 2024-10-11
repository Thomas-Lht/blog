<template>
    <div class="weather">
        <h3>Weather in {{ location }}</h3>
        <p>Temperature: {{ temp }}</p>
        <p>Wind: {{ wind }}</p>
        <p>Humidity: {{ humidity }}</p>
    </div>
</template>

<script>
export default {
    name: 'AppWeather',
    data() {
        return {
            location: 'Unknown Location',
            temp: '???',
            wind: '???',
            humidity: '???'
        };
    },
    mounted() {
        this.fetchIPLocation();
    },
    methods: {
        async fetchIPLocation() {
            try {
                const response = await fetch('https://ipinfo.io/json?token=c3a59cd480033a'); // 替换为你的 API token
                const data = await response.json();
                const [lat, lon] = data.loc.split(',');
                this.location = `${data.city}, ${data.country}`;

                // 使用经纬度获取天气信息
                this.fetchWeather(lat, lon);
            } catch (error) {
                console.error('Error fetching IP location:', error);
                this.location = 'Unable to retrieve location data';
            }
        },
        async fetchWeather(lat, lon) {
            try {
                const apiKey = '8c29547ce2f03180fe5c131030e09673'; // 替换为你的API密钥
                const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

                const response = await fetch(weatherAPI);
                const data = await response.json();

                this.location = `${data.name}, ${data.sys.country}`;
                this.temp = `${data.main.temp} °C`;
                this.wind = `${data.wind.speed} m/s`;
                this.humidity = `${data.main.humidity}%`;
            } catch (error) {
                console.error('Error fetching weather data:', error);
                this.location = 'Unable to retrieve weather data';
            }
        }
    }
};
</script>

<style scoped>
@import './Weather.css';
/* 引入 CSS 文件 */
</style>
