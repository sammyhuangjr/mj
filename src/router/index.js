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
const propsList             =  ()=>import('@/pages/props/propsList')
const distance              =  ()=>import('@/pages/props/distance')
const model                 =  ()=>import('@/pages/props/model')
const light                 =  ()=>import('@/pages/props/light')
const volume                =  ()=>import('@/pages/props/volume')
const voiceAnnounce         =  ()=>import('@/pages/props/voiceAnnounce')
const time                  =  ()=>import('@/pages/props/time')
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
        },
        {
            path: '/propsList',
            name: 'propsList',
            component: propsList,
            meta: { type: 1 }
        },
        {
            path: '/distance',
            name: 'distance',
            component: distance,
            meta: { type: 1 }
        },
        {
            path: '/model',
            name: 'model',
            component: model,
            meta: { type: 1 }
        },
        {
            path: '/light',
            name: 'light',
            component: light,
            meta: { type: 1 }
        },
        {
            path: '/volume',
            name: 'volume',
            component: volume,
            meta: { type: 1 }
        },
        {
            path: '/voiceAnnounce',
            name: 'voiceAnnounce',
            component: voiceAnnounce,
            meta: { type: 1 }
        },
        {
            path: '/time',
            name: 'time',
            component: time,
            meta: { type: 1 }
        }
    ]
}

const Routers = new Router(routeConfigs)

export default Routers