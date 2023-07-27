import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import ProductPage from "@/views/ProductPage.vue"

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
        props: true
    },
    {
        path: "/about",
        name: "AboutPage",
        component: AboutPage,
        props: true
    },
    {
        path: "/:id",
        name: "info",
        component: ProductPage,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            console.log("savedPosition", savedPosition)
            return savedPosition;
        } else {
            console.log("savedPosition", savedPosition)
            return {
                left: 0,
                top: 0
            };

        }
    } 
});

export default router;