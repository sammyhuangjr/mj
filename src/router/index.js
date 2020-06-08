import Vue from 'vue'
import Router from 'vue-router'

const home                  =  ()=>import('@/pages/index/index') 
const setting               =  ()=>import('@/pages/setting/setting') 
const userSet               =  ()=>import('@/pages/user/user')
const userEdit              =  ()=>import('@/pages/user/editUser')
Vue.use(Router)

let routeConfigs = {
    mode: 'hash',
    base: '/dream/',
    routes: [{
            path: '/',
            name: 'home',
            component: home,
            meta: { type: 1 }
        },
        {
            path: '/setting',
            name: 'setting',
            component: setting,
            meta: { type: 1 }
        },
        {
            path: '/user',
            name: 'userSet',
            component: userSet,
            meta: { type: 1 }
        },
        {
            path: '/userEdit',
            name: 'userEdit',
            component: userEdit,
            meta: { type: 1 }
        },
    ]
}

const Routers = new Router(routeConfigs)

export default Routers