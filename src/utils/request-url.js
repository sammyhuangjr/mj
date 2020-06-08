/*
	接口
*/
// var URL = "http://192.168.5.171:8007/naixue_dream/";   //测试
var URL = "https://minipro4.pin-dao.cn/naixue_dream/";   //正式地址


var api = {
    USER_LOGIN: 'login',                        //登录
    USER_MOBILE: 'mobile',                      //用户手机号
    USER_COUPONSTATUS: 'couponStatus',          //用户优惠券状态
    USER_GETCOUPONS:'sendCoupon',               //领券
    IMG_UPLOAD:'uploads',                       //图片上传
    USER_WXCODE:'getWxCode',                    //获取微信二维码
    USER_INFO:'userInfo',                       //获取用户信息
}

for (var key in api) {
    var path = URL + api[key]
    api[key] = path
}


export default {
    install(Vue, options) {
        Vue.prototype.URL = api
    }
}