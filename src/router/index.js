import { createWebHistory, createRouter } from "vue-router"
import Login from "@/views/Login.vue"
import Register from "@/views/Register.vue"
import Logout from "@/views/Logout.vue"

import Home from "@/views/Home.vue"
import Campaign from "@/views/Campaign.vue"

import PageNotFound from '@/views/PageNotFound.vue'

const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/logout",
      name: "Logout",
      component: Logout,
    },
    {
        path: '/campaigns/:catchAll(.*)*',
        name: "Campaign",
        component: Campaign,
    },
    {
        path: '/:catchAll(.*)*',
        name: "PageNotFound",
        component: PageNotFound,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router