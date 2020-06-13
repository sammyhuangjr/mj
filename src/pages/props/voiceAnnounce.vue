<template>
<div>
  <div class="box">
    <headTitle title="语音播报" isBack="true"></headTitle>
    <div class="distanceList">
        <div class="distancePorp" v-for="(item,index) in voiceAnnounce" :key="index" @click="onClickCheck(index)">
            <div class="metre">{{item}}</div>
            <div v-show="checkType != index" class="normal"></div>
            <img v-show="checkType == index" :src="that.images.selected" >
        </div>
        <div class="edit" v-show="showEdit">
          <input type="text" placeholder="请输入语音播报内容" class="editInput"/>
          <div class="saveBtn">保存</div>
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
        voiceAnnounce:['名字','不播报','自定义'],
        that:this,
        showEdit:false
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
          if(this.checkType == 2){
            this.showEdit = true
          }else{
            this.showEdit = false;
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
    .distanceList{
        margin-top: 9px;
        width: 480px;
        overflow: hidden;
        background: #FFFFFF;
        .distancePorp{
            width: 100%;
            padding: 0 20px;
            height: 50px;
            border-top: 1px solid #F2F2F2;
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
        .edit{
          height: 40px;
          margin-left: 20px;
          box-sizing: content-box;
          display: flex;
          align-items: center;
          border-top: 1px solid #F2F2F2;
          .editInput{
            font-size:16px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(151,151,151,1);
            width: 404px;
            border: none;
          }
          .saveBtn{
            font-size:18px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(0,126,249,1);
          }
        }
    }
  }

  
</style>