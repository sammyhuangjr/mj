<template>
  <div class="box">
    <headTitle :title="title" isBack="true" isSub="true" @onSubmit="onInfoSubmit"></headTitle>
    <div class="tips">{{this.tips}}</div>
    <input class="userInput" type="text" />
  </div>
</template>
<script>

  import headTitle from '../../components/headTitle/index';
  import all from '../../utils/virtualkeyboard';
  // import keyboard from '../../components/keyboard/keyboard';
  export default{
    data(){
      return{
        title:'',
        type:0,//type 1姓名 2手机号 3身份证 4卡号 
        tips:'',
        regular:0,
        isEdit:false,
      }
    },
    components:{
      headTitle,
    },

    methods:{
     checkType(){
       switch(this.type){
          case 1:
            this.title = this.isEdit ? '修改姓名' : '新增姓名';
            this.tips = '请设置2-16位以内字符，不包括@/、等无效字符';
          break;
          case 2 :
            this.title = this.isEdit ? '修改手机号' : '新增手机号';
            this.tips = '仅可使用数字';
          break;
          case 3 :
            this.title = this.isEdit ? '修改身份证' : '新增身份证';
            this.tips = '仅可使用数字、字母';
          break;
          case 4 :
            this.title = this.isEdit ? '修改卡号' : '新增卡号';
            this.tips = '仅可使用数字、字母';
          break;
       }
     },
     //TODO
     onInfoSubmit(){
       switch(this.type){
        case 1:
          break;
        case 2:
          break;
        case 3:
          break;
        case 4:
          break;
       }
     },
     legalCheck(){

     }
    },

    created(){
    },

    mounted(){
     
    },
    activated(){
      $('.userInput').virtualkeyboard();
      this.type = this.$route.query.type;
      this.isEdit = this.$route.query.isEdit;
      this.checkType();
    },
  }
</script>
<style lang="scss" scoped>
@import url('../../assets/css/virtualkeyboard.css');
  .box{
    background: #F7F7F7;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    max-width: 480px;
    .tips{
      margin-left: 20px;
      margin-top: 9px;
      font-size:16px;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(151,151,151,1);
      line-height:22px;
    }
    .userInput{
      width: 480px;
      height: 50px;
      background: #FFFFFF;
      border: none;
      padding-left: 20px;
      margin-top: 9px;
      font-size:20px;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(33,33,33,1);
      line-height:28px;
    }
  }
</style>