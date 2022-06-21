import { createWebHistory, createRouter } from "vue-router";

// Main templates 
import Home from "./views/Home.vue";
// Auth templates
import Login from '@/views/auth/Login.vue'
import Register from '@/views/auth/Register.vue'
import Profile from '@/views/auth/Profile.vue'
// Admin templates
import Dashboard from "./views/admin/Dashboard.vue";
import MainAdmin from "./views/admin/Main.vue";
import PagesAdmin from "./views/admin/Pages.vue";
import SingleAdminPage from "./views/admin/Single.vue";
import EditAdminPage from "./views/admin/Page.vue";
import FormsAdmin from "./views/admin/Forms.vue";
// User templates
import PagesUser from "./views/user/Pages.vue";
import SinglePage from "./views/user/SinglePage.vue";
import MainUser from "./views/user/Main.vue";



const routes = [{
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },

    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/dashboard",

        component: MainAdmin,
        props: true,
        meta: {
            requiresAuth: true
        },
       
        children: [{
                name: "Dashboard",
                path: "",
                component: Dashboard,
                props: true,

            },
            {
                path: "/dashboard/pages",
                component: MainUser,
                props: true,
                children: [{
                        name: "PagesAdmin",
                        path: "",
                        component: PagesAdmin,
                        props: true,
                    },
                    {
                        name: "SingleAdminPage",
                        path: "show/:url",
                        component: SingleAdminPage,
                        props: true,

                    },
                    {
                        name: "EditAdminPage",
                        path: "edit/:url",
                        component: EditAdminPage,
                        props: true,

                    }
                ]
            },
            {
                name: "FormsAdmin",
                path: "forms",
                component: FormsAdmin,

            },
        ]
    },
    {
        path: "/pages",
        component: MainUser,
        props: true,
        children: [{
                name: "Pages",
                path: "",
                component: PagesUser,
                props: true
            },
            {
                name: "SinglePage",
                path: ":url",
                component: SinglePage,
                props: true,
            }
        ],
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/', '/pages', '/pages/f', , '/pages/r']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router;
