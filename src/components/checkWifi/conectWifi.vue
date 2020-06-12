<template>
<div class="_box">
    <div class="mask" @click="onClose"></div>
    <div class="dialog">
        <div class="head">输入"{{wifiName}}"的密码</div>
        <div class="password">
            <span>密码</span>
            <input type="text" v-model="password" @input="passwordInput">
        </div>
        <div class="conectBtn " :class="activeBtn ? 'active' :''" @click="conect()">连接</div>
    </div>
</div>
    
 
</template>
<script>

  export default{
    data(){
      return{
         password:'',
         activeBtn:false,
         wifiData:{'name':'','id':1}
      }
    },

    props:{
        wifiName:String,
    },

    computed:{
        
    },

    components:{
       
    },

    methods:{
        onClose(){
            this.$emit('onClose');
        },
        passwordInput(){
            if(this.password.length >= 8){
                this.activeBtn = true;
            }
        },
        conect(){
            //TODO 连接wifi
            //wifi连接成功
            this.wifiData.name = this.wifiName;
            // console.log(this.wifiData)
            this.$emit('onSuccess',this.wifiData);
        }
    }
  }
</script>
<style lang="scss" scoped>
._box{
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    .mask{
        position: absolute;
        top: 0;
        left: 0;
        width:480px;
        height:854px;
        background:rgba(33,33,33,0.4);
        z-index: 20;
    }
    .dialog{
        position: absolute;
        left: 50%;
        margin-left: -170px;
        top: 327px;
        z-index: 30;
        width: 340px;
        height: 200px;
        background: #FFFFFF;
        border-radius:10px;
        opacity:0.9;
        display: flex;
        flex-direction: column;
        align-items: center;
        .head{
            margin-top: 25px;
            font-size:20px;
            font-family:PingFangSC-Semibold,PingFang SC;
            font-weight:600;
            color:rgba(33,33,33,1);
        }
        .password{
            margin-top: 23px;
            width: 212px;
            display: flex;
            span{
                font-size:20px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(33,33,33,1);
            }
            input{
                margin-left: 6px;
                width: 162px;
                border:none;
                color: #007EF9;
            }
            input::-webkit-input-placeholder {
                /* placeholder颜色  */
                color: #007EF9;
            }
        }
        .conectBtn{
            width:120px;
            height:40px;
            background:rgba(0,126,249,0.5);
            border-radius:20px;
            font-size:22px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height: 40px;
            text-align: center;
            margin-top: 32px;
        }
        .active{
            background:rgba(0,126,249,1);
        }
    }
}
    
</style>