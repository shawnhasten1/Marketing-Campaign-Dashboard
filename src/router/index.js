import { createWebHistory, createRouter } from "vue-router"
import Home from "@/views/Home.vue"
import Login from "@/views/Login.vue"
import Logout from "@/views/Logout.vue"
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
      path: "/logout",
      name: "Logout",
      component: Logout,
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