import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/About.vue";
import Home from "@/views/Home.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), routes
})