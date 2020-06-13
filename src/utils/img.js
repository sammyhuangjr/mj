/*
	图片导入
*/
var images = {
	user			:	require('@/assets/images/user.png'),
	network			:	require('@/assets/images/network.png'),
	props			:	require('@/assets/images/props.png'),
	record			:	require('@/assets/images/record.png'),
	setting			:	require('@/assets/images/setting.png'),
	local			:	require('@/assets/images/local.png'),
	back			:	require('@/assets/images/back.png'),
	more			: 	require('@/assets/images/more.png'),
	newuser			:	require('@/assets/images/newuser.png'),
	search			:	require('@/assets/images/search.png'),
	edit			:	require('@/assets/images/edit.png'),
	delete			:	require('@/assets/images/delete.png'),
	userEdit		:	require('@/assets/images/useredit.png'),
	noPic			:	require('@/assets/images/noPic.png'),
	yitai			:	require('@/assets/images/yitai.png'),
	wifi			:	require('@/assets/images/wifi.png'),
	lock			:	require('@/assets/images/lock.png'),
	wifi0			:	require('@/assets/images/wifi0.png'),
	wifi1			:	require('@/assets/images/wifi1.png'),
	wifi2			:	require('@/assets/images/wifi2.png'),
	wifi3			:	require('@/assets/images/wifi3.png'),
	yitaiInfo		:	require('@/assets/images/yitaiInfo.png'),
	right			:	require('@/assets/images/right.png'),
	check			:	require('@/assets/images/check.png'),
	selected		:	require('@/assets/images/selected.png'),
	minLight		:	require('@/assets/images/minLight.png'),
	maxLight		:	require('@/assets/images/maxLight.png'),
	minVolume		:	require('@/assets/images/minVolume.png'),
	maxVolume		:	require('@/assets/images/maxVolume.png')
}
export default{
	install(Vue,options){
        Vue.prototype.images = images;
	}
























}