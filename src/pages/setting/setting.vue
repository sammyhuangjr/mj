<template>
<div>
  <div class="box">
    <headTitle isBack="true"></headTitle>
    <div class="title">设 置</div>
    <div class="setting">
        <div class="_args" v-for="item in setting" :key="item.name">
            <img class="icon" :src="item.icon" alt="" @click="_toNext(item)">
            <div class="name">{{item.name}}</div>
        </div>
        
    </div>
  </div>
</div>
  
</template>
<script>

  import headTitle from '../../components/headTitle/index';
  export default{
    data(){
      return{
        setting:[
            {'name':'用户管理','icon':this.images.user,'path':'/user'},
            {'name':'网络配置','icon':this.images.network,'path':'/network'},
            {'name':'参数配置','icon':this.images.props,'path':'/propsList'},
            {'name':'识别记录','icon':this.images.record,},
            {'name':'系统设置','icon':this.images.setting,},
            {'name':'关于本机','icon':this.images.local,}
        ]
      }
    },
    components:{
      headTitle
    },

    methods:{
      _toNext(item){
          this.$router.push(item.path);
      }
    },

    created(){
      
    },

    mounted(){
      
    }
  }
</script>
<style  scoped>
  .box{
    height: 100%;
    /* position: fixed;
    top: 0;
    left: 0; */
    max-width: 480px;
  }
  .box .title{
    margin-top: 10px;
    font-size: 34px;
    text-align: center;
  }
  .box .setting{
    width: 480px;
    margin: 36px 20px 15px 20px;
    overflow: hidden;
  }
  .box .setting ._args{
      float: left;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width:190px;
      height:130px;
      background:rgba(255,255,255,1);
      box-shadow:4px 4px 10px 0px rgba(192,192,192,0.38);
      border-radius:4px;
      margin: 15px 15px;
  }
  .box .setting ._args .name{
      font-size: 14px;
  }
  .box .setting ._args .icon{
      width: 40px;
      height: 40px;
  }
  .box ._login{
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }
  .box ._login ._input{
    width: 300px;
    height: 20px;
    margin-top: 15px;
    border-radius: 5px;
  }
  .box ._login ._next{
    background: #2C8CF9;
    margin-top: 15px;
    width: 300px;
    height: 30px;
    border-radius: 10px;
  }
  
</style>