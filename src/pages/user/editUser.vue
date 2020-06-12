<template>
<div>
  <div class="box">
    <headTitle title="用户管理" isBack="true"></headTitle>
    <div class="face">
        <div class="faceImg">
            <img :src="isEdit ? tempFace : noPic"/>
        </div>
        <div class="handle">
            <img :src="this.images.userEdit" />
            <span>更换头像</span>
        </div>
    </div>
    <div class="line_4"></div>
    <div class="user_setting">
      <div class="tip">姓 名</div><span v-if="!isEdit" class="mark"> *</span>
      <div class="user_Info" @click="_setting(1)">{{userInfo.name ? userInfo.name : '必填'}}</div>
    </div>
    <div class="user_setting">
      <div class="tip">手机号</div>
      <div class="user_Info" @click="_setting(2)">{{userInfo.phone ? userInfo.phone : '选填'}}</div>
    </div>
    <div class="user_setting">
      <div class="tip">身份证</div>
      <div class="user_Info" @click="_setting(3)">{{userInfo.idCard ? userInfo.idCard : '选填'}}</div>
    </div>
    <div class="user_setting">
      <div class="tip">卡 号</div>
      <div class="user_Info" @click="_setting(4)">{{userInfo.cardNo ? userInfo.cardNo : '选填'}}</div>
    </div>
    <div class="user_setting">
      <div class="tip">权 限</div><span v-if="!isEdit" class="mark"> *</span>
      <div class="user_check">
        <span>刷脸</span><van-checkbox v-model="userInfo.facecheck" shape="square" icon-size="16px"></van-checkbox>
        <span>刷卡</span><van-checkbox v-model="userInfo.cardcheck" shape="square" icon-size="16px"></van-checkbox>
      </div>
    </div>
    <div class="btn">
      <div class="delete">删 除</div>
      <div class="save">保 存</div>
    </div>
  </div>
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
        isEdit:true, //true 编辑用户 false注册用户
        tempFace:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1230268678,329560548&fm=26&gp=0.jpg',
        userInfo:{
          'name':'张哲',
          'phone':'193-3847-2940',
          'idCard':'440373199010294820',
          'cardNo':'485734335752933',
          'facecheck':true,
          'cardcheck':true,
        },
        noPic:this.images.noPic
      }
    },
    components:{
      headTitle,
      // keyboard
    },

    methods:{
      //index 1姓名 2手机号 3身份证 4卡号 
     _setting(index){
       this.$router.push({path:'/update',query:{type:index,isEdit:this.isEdit}});
     },
    },

    created(){
    },

    mounted(){
     
    },
    activated(){
      this.isEdit = this.$route.query.isEdit;
      if(!this.isEdit){
        this.userInfo = {};
      }else{
        this.userInfo = this.$route.query.userInfo;
      }
    },
  }
</script>
<style lang="scss" scoped>
  .box{
    height: 100%;
    // position: fixed;
    // top: 0;
    // left: 0;
    max-width: 480px;
    .face{
        width: 480px;
        height: 198px;
        border-top: 1px solid #F2F2F2;
        .faceImg{
            margin-top: 19px;
            img{
                width: 130px;
                height: 130px;
                border-radius: 50%;
                margin: 0 auto;
            }
        }
        .handle{
            margin-top: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 18px;
                height: 18px;
            }
            span{
                font-size:16px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(0,126,249,1);
                line-height:22px;
                margin-left: 3px;
            }
        }
    }
    .line_4{
      width: 480px;
      height: 4px;
      background: #F2F2F2;
    }
    .user_setting{
      width: 480px;
      height: 50px;
      padding: 11px 20px;
      border-bottom: 1px solid #F2F2F2;
      .tip{
        float: left;
        font-size:20px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(33,33,33,1);
        line-height:28px;
      }
      .user_Info{
        float: right;
        font-size:18px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(151,151,151,1);
        line-height:25px;
      }
      .user_check{
        float: right;
        display: flex;
        justify-content: space-between;
        width: 140px;
      }
      span{
        font-size:18px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(0,126,249,1);
        line-height:25px;
      }
      .mark{
        color: #D80000;
        font-size:20px;
        height: 28px;
        line-height: 28px;
      }
    }
    .btn{
      margin-top: 34px;
      padding: 0 55px;
      .delete{
        float: left;
        width: 170px;
        height: 50px;
        border:2px solid rgba(0,126,249,1);
        font-size:22px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(0,126,249,1);
        line-height:50px;
        text-align: center;
      }
      .save{
        float: right;
        width: 170px;
        height: 50px;
        background:rgba(0,126,249,1);
        font-size:22px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:50px;
        text-align: center;
      }
    }
  }
</style>