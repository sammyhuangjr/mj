// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import './config/rem'
import api from './utils/request'
import url from './utils/request-url'
import utils from './utils/utils'
import param from './utils/global'
import images from './utils/img';
import $ from 'jquery'
import Vant from 'vant';
import 'vant/lib/index.css';

//一些调用的js
Vue.use(api);
Vue.use(url);
Vue.use(utils);
Vue.use(param);
Vue.use(images);
Vue.use(Vant);
//插件
// Vue.use(MintUI)
Vue.config.productionTip = false

//自定义指令
Vue.directive('focus', {
    inserted: function(el) {
        el.focus();
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})

// document.addEventListener('WeixinJSBridgeReady',function(){
//     setTimeout(()=>{
//         document.getElementById('bgMusic').play();
//     },5000)
//     // document.getElementById('bgMusic').play();
// },false);