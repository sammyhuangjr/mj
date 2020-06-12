import Vue from 'vue'
import Router from 'vue-router'

const home                  =  ()=>import('@/pages/index/index') 
const setting               =  ()=>import('@/pages/setting/setting') 
const userSet               =  ()=>import('@/pages/user/user')
const userEdit              =  ()=>import('@/pages/user/editUser')
const update                =  ()=>import('@/pages/user/update')
const network               =  ()=>import('@/pages/network/network')
const yitaiSet              =  ()=>import('@/pages/network/yitaiSet')
const ipSet                 =  ()=>import('@/pages/network/ipSet')
const wifiSet               =  ()=>import('@/pages/network/wifiSet')
const wifiIpSet             =  ()=>import('@/pages/network/wifiIpSet')
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
        {
            path: '/update',
            name: 'update',
            component: update,
            meta: { type: 1 }
        },
        {
            path: '/network',
            name: 'network',
            component: network,
            meta: { type: 1 }
        },
        {
            path: '/yitaiSet',
            name: 'yitaiSet',
            component: yitaiSet,
            meta: { type: 1 }
        },
        {
            path: '/ipSet',
            name: 'ipSet',
            component: ipSet,
            meta: { type: 1 }
        },
        {
            path: '/wifiSet',
            name: 'wifiSet',
            component: wifiSet,
            meta: { type: 1 }
        },
        {
            path: '/wifiIpSet',
            name: 'wifiIpSet',
            component: wifiIpSet,
            meta: { type: 1 }
        }
    ]
}

const Routers = new Router(routeConfigs)

export default Routers