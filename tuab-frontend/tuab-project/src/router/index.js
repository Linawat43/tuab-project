import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginTuab from './component/LoginTuab.vue'
import GeneralHome from './component/GeneralHome.vue'


Vue.use(VueRouter)

const routes = [
    { path: '/', component: LoginTuab},
    { path: '/general-home', component: GeneralHome}
]

const router = new VueRouter({
    routes
})

export default router