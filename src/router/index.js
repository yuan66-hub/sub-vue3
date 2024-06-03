
import { createRouter,createWebHashHistory } from "vue-router";

const routes =[
{
    path:'/home',
    name:'MyHome',
    component:()=>import('../views/MyHome.vue')
},
{
    path:'/about',
    name:'MyAbout',
    component:()=>import('../views/MyAbout.vue')
}
]

const router = createRouter({
    routes,
    history:createWebHashHistory('/vue3')
})

export default router