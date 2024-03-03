import Vue from 'vue'
import Router from 'vue-router'
import LoginTuab from './pages/LoginTuab.vue'
import GeneralHome from './pages/GeneralHome.vue'
import SuperStaffHome from './pages/SuperStaffHome.vue'
import StaffHome from './pages/StaffHome.vue'
import Booking from './pages/Booking.vue'
import VerifyInFo from './pages/VerifyInFo.vue'
import Payment from './pages/Payment.vue'

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
    },
    { 
        path: '/booking',
        name: 'booking',
        component: Booking
    },
    {
        path: '/verify-info',
        name: 'verify-info',
        component: VerifyInFo
    },
    {
        path: '/payment',
        name: 'payment',
        component: Payment
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