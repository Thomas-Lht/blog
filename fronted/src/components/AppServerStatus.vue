<template>
    <div class="server-status">
        <div class="status-item">
            <p>CPU Usage: <span>{{ cpu }}%</span></p>
            <span class="status-good">health</span>
        </div>
        <div class="status-item">
            <p>Memory Usage: <span>{{ mem }}%</span></p>
            <span class="status-running">running</span>
        </div>
        <div class="status-item">
            <p>Disk Usage: <span>{{ disk }}%</span></p>
            <span class="status-running">running</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppServerStatus',
    data() {
        return {
            cpu: 3.4,
            mem: 52.3,
            disk: 38.3
        };
    },
    mounted() {
        this.startInterval();
    },
    beforeUnmount() {
        this.clearInterval();
    },
    methods: {
        startInterval() {
            this.interval = setInterval(() => {
                this.cpu = (Math.random() * 100).toFixed(1);
                this.mem = (Math.random() * 100).toFixed(1);
                this.disk = (Math.random() * 100).toFixed(1);
            }, 3000);
        },
        clearInterval() {
            clearInterval(this.interval);
        }
    }
};
</script>

<style scoped>
@import './ServerStatus.css';
</style>
