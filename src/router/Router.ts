import { createRouter, createWebHistory } from 'vue-router';

import Whitesheet from '../views/Whitesheet.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'

const app_routes = [
    {
        path: '/',
        name: 'Whitesheet',
        component: Whitesheet
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
]

const app_router = createRouter({
    history: createWebHistory('/'),
    routes: app_routes
})

export default app_router