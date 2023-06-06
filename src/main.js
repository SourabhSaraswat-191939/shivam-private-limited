import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import LoginComp from './components/Login.vue';
import LoggedComp from './components/Logged.vue';

const routes = [
  { path: '/', component: LoginComp },
  { path: '/logged', component: LoggedComp },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);

// Mount the app to the DOM
app.mount('#app');
