<template>
    <div class="border">
        <img :src="images.back" class="back" v-if="isBack" @click="naviBack"/>
        <div class="_title">{{title}}</div>
        <img :src="images.more" class="more" v-if="isMore"/>
        <div class="subBtn" @click="onSubmit" v-if="isSub">保存</div>
    </div>
</template>
<script>

  export default{
    data(){
      return{
          popupVisible:false
      }
    },

    props:{
        title:String,
        isBack:{
          type:Boolean,
          value:false
        },
        isMore:{
          type:Boolean,
          value:false,
        },
        isSub:{
          type:Boolean,
          value:false,
        }
    },

    computed:{
        
    },

    components:{
       
    },

    methods:{
        naviBack(){
          this.$router.go(-1)
        },
        showMore(){
          this.popupVisible = true;
        },
        onSubmit(){
          this.$emit('onSubmit');
        }
    }
  }
</script>
<style lang="scss" scoped>
    .border{
        width: 100%;
        height: 80px;
        background: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        .more{
          position: absolute;
          top: 30px;
          right: 20px;
        }
        .subBtn{
          position: absolute;
          top: 27px;
          right: 20px;
          font-size:20px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(0,126,249,1);
          line-height:28px;
        }
    }
    .border ._title{
        font-size: 26px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(33,33,33,1);
        line-height:37px;
    }
    .border .back{
      position: absolute;
      top: 25px;
      left: 20px;
      width: 30px;
      height: 30px;
    }
</style>