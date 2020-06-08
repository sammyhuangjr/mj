/*
	post请求
*/
import axios from 'axios';
axios.interceptors.request.use((config) => {
		config.headers['Content-Type'] = 'application/json;charset=UTF-8';
		return config;
	}
);

export default{
  	install(Vue,options){
	  	//post请求
		Vue.prototype.postRequest = function(url,data,success,fail){
			return axios.post(url,data).then(res=>{
			 	console.log('====>',url,data,res.data)
			 	if(res.data.ret==0&&typeof(success)=='function'){
			 		success(res.data)
			 	}
			 	else if (res.data.err == 4 || res.data.err == 1001 || res.data.err == 9) {
			 		// this.$router.push('login')
			 	}
			 	else if(typeof(fail)=='function'){
			 		fail(res.data)
			 	}
			 	else if(res.data.msg){
					this.$message.error(res.data.msg);
			 	}			 	
			})
		},
		Vue.prototype.getRequest = function(url,success,fail){
			return axios.get(url).then(res=>{
				console.log('<====>',url,res.data)
				if(res.data.ret==0&&typeof(success)=='function'){
					success(res.data)
				}
				else if(typeof(fail)=='function'){
			 		fail(res.data)
			 	}
			 	else if(res.data.msg){
					this.$message.error(res.data.msg);
			 	}		
			})
		}

		Vue.prototype.axios = axios;

	}
}