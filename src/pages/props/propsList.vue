<template>
<div>
  <div class="box">
    <headTitle title="参数配置" isBack="true"></headTitle>
    <div class="type">通用参数</div>
    <div class="common">
        <div class="commonList">
            <div class="propsName">活体检测</div>
            <van-switch v-model="alive" active-color="#35C659" inactive-color="#F7F7F7" @change="onSubmit"/>
        </div>
        <div class="commonList">
            <div class="propsName">识别距离</div>
            <img :src="this.images.right" @click="onClickProps(1)">
        </div>
        <div class="commonList">
            <div class="propsName">识别模式</div>
            <img :src="this.images.right" @click="onClickProps(2)" >
        </div>
        <div class="commonList">
            <div class="propsName">屏幕亮度</div>
            <img :src="this.images.right" @click="onClickProps(3)">
        </div>
        <div class="commonList">
            <div class="propsName">音量</div>
            <img :src="this.images.right" @click="onClickProps(4)">
        </div>
        <div class="commonList">
            <div class="propsName">时间</div>
            <img :src="this.images.right" @click="onClickProps(5)">
        </div>
    </div>
    <div class="type">识别成功参数</div>
    <div class="common">
        <div class="commonList">
            <div class="propsName">语音播报</div>
            <img :src="this.images.right" @click="onClickProps(6)">
        </div>
        <div class="commonList">
            <div class="propsName">屏幕文字</div>
            <img :src="this.images.right" @click="onClickProps(7)">
        </div>
        <div class="commonList">
            <div class="propsName">输出</div>
            <img :src="this.images.right" @click="onClickProps(8)">
        </div>
    </div>
  </div>
</div>
  
</template>
<script>

  import headTitle from '../../components/headTitle/index';
//   import all from '../../utils/virtualkeyboard';
  // import keyboard from '../../components/keyboard/keyboard';
  export default{
    data(){
      return{
        alive:false
      }
    },
    components:{
      headTitle,
      // keyboard
    },

    methods:{
      onSubmit(){
          //TODO 修改配置项
      },
      onClickProps(index){
          //index 1识别距离 2识别模式 3屏幕亮度 4音量 5时间 6语音播报 7屏幕文字 8输出
          switch(index){
              case 1 :
                this.$router.push('/distance');
                break;
              case 2 :
                this.$router.push('/model');
                break;
              case 3 :
                this.$router.push('/light');
                break;
              case 4 :
                this.$router.push('/volume');
                break;
              case 5 :
                this.$router.push('/time');
                break;
              case 6 :
                this.$router.push('/voiceAnnounce');
                break;
          }
      }
    },

    created(){
      
    },

    mounted(){
      
    }
  }
</script>
<style lang="scss" scoped>
  /* @import url('../../assets/css/virtualkeyboard.css'); */
  .box{
    height: 100%;
    /* position: fixed;
    top: 0;
    left: 0; */
    max-width: 480px;
    background: #F7F7F7;
    .type{
        padding: 9px 20px;
        font-size:16px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(151,151,151,1);
    }
    .common{
        width: 480px;
        overflow: hidden;
        background: #FFFFFF;
        .commonList{
            padding: 0 20px;
            box-sizing: border-box;
            width: 480px;
            height: 50px;
            border-bottom: 1px solid #F2F2F2;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .propsName{
                font-size:18px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(33,33,33,1);
            }
        }
    }
  }

  
</style>