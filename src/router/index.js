import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Product from "@/views/Addproduct.vue";
import About from "@/views/About.vue";
import Shop from "@/views/Shop.vue";
import User from "@/views/userShop.vue";
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/Product",
        name: "Product",
        component: Product
    },
    {
        path: "/About",
        name: "About",
        component: About
    },
    {
        path: "/Shop",
        name: "Shop",
        component: Shop
    },
    {
        path: "/User",
        name: "User",
        component: User
    },
   
    
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;