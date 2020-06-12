<template>
<div>
  <div class="box">
    <headTitle title="IP设置" isBack="true"></headTitle>
    <div class="ct">
        <div v-for="(item,index) in ipProps" :key="item" class="ipProps" @click="checkIpProps(index)">
            <span>{{item}}</span>
            <img :src="that.images.check" v-show="checkType == index">
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
        ipProps:[
            'DHCP','静态'
        ],
        checkType:null,
        that:this
      }
    },
    components:{
      headTitle,
      // keyboard
    },

    methods:{
      checkIpProps(index){
          this.checkType = index;
          console.log(this.checkType)
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
    .ct{
        width: 480px;
        background: #FFFFFF;
        margin-top: 10px;
        .ipProps{
            height: 50px;
            border-bottom: 1px solid #F2F2F2;
            padding: 0px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            img{
                width: 21px;
                height: 14px;
            }
        }
    }
    
  }

  
</style>