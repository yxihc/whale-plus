import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import { WpConfigProvider } from '@whale-plus/components-pc';

const app = createApp(App);
app.use(WpConfigProvider);
app.use(router).mount('#app');
