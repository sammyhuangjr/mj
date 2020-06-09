<template>
  <div class="box">
    <headTitle isBack="true" title="网络配置"></headTitle>
    <div class="ct">
        <div class="tips">以太网</div>
        <div class="net">
            <img :src="this.images.yitai" >
            <span>{{NETWORK_STATUS}}</span>
        </div>
    </div>
    <div class="ct">
        <div class="tips">WIFI网络</div>
        <div class="wifi">
            <div class="wifihead">
                <div>
                    <img :src="this.images.wifi"><span>WIFI</span>
                </div>
                <van-switch v-model="HASWIFI" active-color="#35C659" inactive-color="#F7F7F7"/>
            </div>
            <!-- TODO
            <van-collapse v-model="HASWIFI" v-for="item in WIFIS" :key="item.name">
                <van-collapse-item>
                    {{item.name}}
                </van-collapse-item>
            </van-collapse> -->
        </div>
    </div>
  </div>
</template>
<script>

  import headTitle from '../../components/headTitle/index';
  export default{
    data(){
      return{
        NETWORK_STATUS:'未连接',
        HASWIFI:false
      }
    },
    components:{
      headTitle
    },

    methods:{
    
    },

    created(){
      
    },

    mounted(){
      
    }
  }
</script>
<style lang="scss" scoped>
  .box{
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    max-width: 480px;
    background: #F7F7F7;
    .ct{
        width: 480px;
        overflow: hidden;
        .tips{
            padding: 9px 20px;
            font-size:16px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(151,151,151,1);
            line-height:22px;
        }
        .net{
            background: #FFFFFF;
            width:480px;
            height:50px;
            display: flex;
            align-items: center;
            img{
                width: 25px;
                height: 20px;
                margin-left: 45px;
                display: inline-block;
            }
            span{
                margin-left: 13px;
                font-size:18px;
                height:25px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(33,33,33,1);
                line-height:25px;
            }
        }
        .wifi{
            width: 480px;
            background: #FFFFFF;
            overflow: hidden;
            padding-left: 45px;
            padding-right: 22px;
            box-sizing: border-box;
            .wifihead{
                width: 435px;
                height: 50px;
                border-bottom: 1px solid #F2F2F2;
                display: flex;
                align-items: center;
                justify-content: space-between;
                box-sizing: border-box;
                padding-right: 22px;
                img{
                    width: 25px;
                    height: 18px;
                    display: inline-block;
                }
                span{
                    margin-left: 14px;
                    font-size:18px;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(33,33,33,1);
                    line-height:25px;
                }
            }
        }
    }
  }
  
  
</style>