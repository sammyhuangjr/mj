<template>
<div>
  <div class="box">
    <headTitle title="音量" isBack="true"></headTitle>
    <div class="volumeTip">播报音量</div>
    <div class="lightProps">
        <div class="light">
            <img :src="this.images.minVolume" >
            <van-slider class="slider" v-model="vloume" :min="0" :max="100" @change="onChangeVolume"/>
            <img :src="this.images.maxVolume" >
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
        vloume:0,
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
      onChangeVolume(){
          
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
    .volumeTip{
        width: 480px;
        height: 40px;
        box-sizing: border-box;
        padding: 9px 20px;
        font-size:16px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(151,151,151,1);
    }
    .lightProps{
        width: 480px;
        overflow: hidden;
        background: #FFFFFF;
        .light{
            width: 480px;
            height: 50px;
            padding: 0 20px;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #F2F2F2;
            .slider{
                width: 356px;
            }
            
        }
    }
  }

  
</style>