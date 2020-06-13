<template>
<div>
  <div class="box">
    <headTitle title="时间" isBack="true"></headTitle>
    <div class="time">
        <van-datetime-picker v-model="currentDate" type="datetime" title="选择完整时间" :min-date="minDate" :max-date="maxDate" cancel-button-text=" "/>
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
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
        currentDate: new Date(),
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
    .time{
        margin-top: 10px;
        background: #FFFFFF;
    }
  }

  
</style>