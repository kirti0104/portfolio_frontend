import Home from "@/app/page"
import DefaultLayout from "@/layout/DefaultLayout"



export const globalRoutes=[
    {
        path:'/',
        exact:true,
        layout:DefaultLayout,
        component:Home
    },

]