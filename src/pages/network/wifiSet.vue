<template>
<div>
  <div class="box">
    <headTitle :title="title" isBack="true"></headTitle>
    <div class="tips">WIFI网络</div>
    <div class="set">
      <div class="_props">
        <div class="propsName">状态信息</div>
        <div class="propsInfo">{{serProps.status}}</div>
      </div>
      <div class="_props">
        <div class="propsName">信号强度</div>
        <div class="propsInfo">{{serProps.RSSI}}</div>
      </div>
      <div class="_props">
        <div class="propsName">IP地址</div>
        <div class="propsInfo">{{serProps.ipAddr}}</div>
      </div>
      <div class="_props">
        <div class="propsName">IP设置</div>
        <div class="propsInfo" @click="wifiIpSet()">
          <span>{{serProps.ipSet}}</span>
          <img :src="this.images.right" >
          </div>
      </div>
    </div>
    <div class="remove">
        <div class="tip">移除此网络</div>
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
        title:'',
        serProps:{
          
        }
      }
    },
    components:{
      headTitle,
      // keyboard
    },

    methods:{
      wifiIpSet(){
        this.$router.push('/wifiIpSet');
      }
    },

    created(){
      
    },

    mounted(){
      
    },
    activated(){
        this.serProps = this.$route.query.wifiInfo;
        this.title = this.serProps.name;
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
    .tips{
      padding: 9px 20px;
      height:22px;
      font-size:16px;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(151,151,151,1);
      line-height:22px;
    }
    .set{
      background: #FFFFFF;
      width: 480px;
      overflow: hidden;
      ._props{
        box-sizing: border-box;
        width: 480px;
        height: 50px;
        padding: 0px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #F2F2F2;
        .propsName{
          font-size:18px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(33,33,33,1);
        }
        .propsInfo{
          font-size:18px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(151,151,151,1);
          img{
            width: 10px;
            height: 16px;
            line-height: 16px;
            display: inline-block;
          }
        }
      }
    }
    .remove{
        width: 480px;
        height: 50px;
        margin-top: 20px;
        background: #FFFFFF;
        padding-left: 20px;
        box-sizing: border-box;
        .tip{
            font-size:18px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(0,126,249,1);
            line-height: 50px;
        }
    }
  }

  
</style>