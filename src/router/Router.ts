import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'

const app_routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }
]

const app_router = createRouter({
    history: createWebHistory('/'),
    routes: app_routes
})

export default app_router