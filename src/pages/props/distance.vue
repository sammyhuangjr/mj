<template>
<div>
  <div class="box">
    <headTitle title="识别距离" isBack="true"></headTitle>
    <div class="distanceList">
        <div class="distancePorp" v-for="(item,index) in distance" :key="index" @click="onClickCheck(index)">
            <div class="metre">{{item}}</div>
            <div v-show="checkType != index" class="normal"></div>
            <img v-show="checkType == index" :src="that.images.selected" >
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
        alive:false,
        checkType:null,
        distance:['0.5m','1m','1.5m','2m'],
        that:this,
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
      onClickCheck(index){
          this.checkType = index;
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
    .distanceList{
        margin-top: 9px;
        width: 480px;
        overflow: hidden;
        background: #FFFFFF;
        .distancePorp{
            width: 100%;
            padding: 0 20px;
            height: 50px;
            border-bottom: 1px solid #F2F2F2;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .metre{
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
            img{
                width: 22px;
                height: 22px;
            }
        }
    }
  }

  
</style>