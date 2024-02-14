import Vue from 'vue'
import Router from 'vue-router'
import LoginTuab from './components/LoginTuab.vue'
import GeneralHome from './components/GeneralHome.vue'
import SuperStaffHome from './components/SuperStaffHome.vue'
import StaffHome from './components/StaffHome.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
    { 
        path: '/',
        name: 'login',
        component: LoginTuab
    },
    { 
        path: '/general-home',
        name: 'general-home',
        component: GeneralHome
    },
    { 
        path: '/superStaff-home',
        name: 'superStaff-home',
        component: SuperStaffHome
    },
    { 
        path: '/staff-home',
        name: 'staff-home',
        component: StaffHome
    }
    ]
})

// const routes = [
//     { 
//         path: '/',
//         name: 'login',
//         component: LoginTuab
//     },
//     { 
//         path: '/general-home',
//         name: 'general-home',
//         component: GeneralHome
//     }
// ]

// const router = new VueRouter({
//     routes
// })

// export default router