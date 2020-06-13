<template>
<div>
  <div class="box">
    <headTitle title="屏幕亮度" isBack="true"></headTitle>
    <div class="lightProps">
        <div class="light">
            <img :src="this.images.minLight" >
            <van-slider class="slider" v-model="light" :min="0" :max="100" @change="onChangeLight"/>
            <img :src="this.images.maxLight" >
        </div>
        <div class="light" @click="onClickAutoLight">
            <div class="autoLight">自动调节亮度</div>
            <div v-show="!isCheck" class="normal"></div>
            <img v-show="isCheck" :src="this.images.selected" >
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
        light:0,
        isCheck:false,
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
      onClickAutoLight(){
          this.isCheck = !this.isCheck;
      },
      onChangeLight(){
          
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
    .lightProps{
        margin-top: 9px;
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
            .autoLight{
                font-size:18px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(33,33,33,1);
            }
            .normal{
                width:18px;
                height:18px;
                border:2px solid rgba(0,126,249,1);
            }
        }
    }
  }

  
</style>