<template>
  <div class="box">
    <headTitle isBack="true"></headTitle>
    <div class="title">登 录</div>
    <div class="_login">
      <input placeholder="请设置设备名称 (选填)" class="_input" @focus="getFocus" v-model="name" />
      <input placeholder="请设置密码 (6-16位数字或字母)" class="_input"/>
      <span class="tip" v-if="!isCheck">密码格式错误，请重新输入</span>
      <button class="_next" @click="next">下一步</button>
    </div>
    <!-- <keyboard @sendText="getText"></keyboard> -->
  </div>
</template>
<script>

  import headTitle from '../../components/headTitle/index';
  import all from '../../utils/virtualkeyboard';
  // import keyboard from '../../components/keyboard/keyboard';
  export default{
    data(){
      return{
        isText:false,
        name:'',
        isCheck:true,
      }
    },
    components:{
      headTitle,
      // keyboard
    },

    methods:{
      next(){
        this.$router.push('/setting')
      },
      getFocus(){
        this.isText = true;
      },
      getText(msg){
          this.name = msg
      }
    },

    created(){
      
    },

    mounted(){
      $('._input').virtualkeyboard();
    }
  }
</script>
<style >
  @import url('../../assets/css/virtualkeyboard.css');
  .box{
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    max-width: 480px;
  }
  .box .title{
    margin-top: 10px;
    font-size: 34px;
    font-family:PingFangSC-Semibold,PingFang SC;
    font-weight:600;
    text-align: center;
    color: #212121;
  }
  .box ._login{
    margin-top: 41px;
    display: flex;
    flex-direction: column;
    margin-left: 40px;
  }
  .box ._login ._input{
    width: 400px;
    height: 46px;
    margin-top: 20px;
    border:1px solid rgba(173,173,173,1);
    font-size:16px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(173,173,173,1);
    padding: 12px 0px 12px 9px;
  }
  .box ._login ._next{
    margin-top: 100px;
    width: 400px;
    height: 50px;
    background:rgba(0,126,249,1);
    opacity:0.5;
    text-align: center;
    font-size:22px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:30px;
    border: none;
  }
  .box ._login .tip{
    margin-top: 8px;
    font-size:14px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(216,0,0,1);
    height: 20px;
    line-height: 20px;
  }
</style>