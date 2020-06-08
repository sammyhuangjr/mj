var answer = {
    t1:0,
    t2:0,
    t3:0,
    t4:0
}

export default{
	install(Vue,options){
		//当前窗口的高度
		Vue.prototype.windowHeight = document.documentElement.clientHeight;

		//当前窗口的宽度
		Vue.prototype.windowWidth = document.documentElement.clientWidth;

		//当前有效窗口高度
		Vue.prototype.availHeight = window.screen.availHeight;
		//记录答案
		Vue.prototype.recordAnswer = function(data,index){
			switch (index) {
			  case 1:{
				answer.t1 = data;
			  }break;
			  case 2:{
				answer.t2 = data;
			  }break;
			  case 3:{
				answer.t3 = data;
			  }break;
			  case 4:{
				answer.t4 = data;
			  }break;
			}
			console.log('答题记录：',answer);
		}

		//获取记录答案
		Vue.prototype.getRecord = function(){
			return answer;
		}
	}
}