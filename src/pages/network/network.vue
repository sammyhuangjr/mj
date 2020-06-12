<template>
<div class="container">
  <div class="box">
    <headTitle isBack="true" title="网络配置"></headTitle>
    <div class="ct">
        <div class="tips">以太网</div>
        <div class="net">
          <div>
            <img :src="this.images.yitai" >
            <span>{{networkStatus}}</span>
          </div>
            
          <img class="yitaiInfo" :src="this.images.yitaiInfo" @click="yitaiSet()">
        </div>
    </div>
    <div class="ct">
        <div class="tips">WIFI网络</div>
        <div class="wifi">
            <div class="wifihead">
                <div>
                    <img :src="this.images.wifi"><span>WIFI</span>
                </div>
                <van-switch v-model="hasWIFI" active-color="#35C659" inactive-color="#F7F7F7" @change="searchWifi"/>
            </div>
            <div v-show="hasConect">
              <div class="currentWifi">
                <div class="currentLeft">
                  <img :src="this.images.check" alt="">
                  <span>{{currentWifiName}}</span>
                </div>
                <img class="yitaiInfo" :src="this.images.yitaiInfo" @click="wifiSet">
                
              </div>
              <div class="splite"></div>
            </div>
            
            <div v-show="hasWIFI" v-for="(item,index) in WIFIs" :key="item.name" class="wifiCt">
                <div class="wifiName">{{item.name}}</div>
                <div class="wifiStatus">
                  <img :src="item.isLock ? that.images.lock : ''" @click="conectWifi(item)">
                  <checkWifi :signal="item.signal"></checkWifi>
                </div>
                <conectWifi class="conect" v-if="showConectWifi" @onClose="onCloseDialog" :wifiName="item.name" @onSuccess="onSuccess"></conectWifi>
            </div>
        </div>
    </div>
  </div>
</div>
  
</template>
<script>

  import headTitle from '../../components/headTitle/index';
  import checkWifi  from '../../components/checkWifi/checkWifi';
  import conectWifi from '../../components/checkWifi/conectWifi';
  export default{
    data(){
      return{
        networkStatus:'未连接',
        hasWIFI:false,
        hasConect:false,
        currentWifiName:'',
        WIFIs:[
          {'name':'我是网络1','isLock':true,'signal':1},
          {'name':'我是网络2','isLock':false,'signal':2},
          {'name':'我是网络3','isLock':true,'signal':3},
        ],
        that:this,
        showConectWifi:false,
        wifiInfo:{
          'name':'我是网络1',
          'status':'已连接',
          'RSSI':'强',
          'ipAddr':'192.168.11.12',
          'ipSet':'DHCP'
        }
      }
    },
    components:{
      headTitle,
      checkWifi,
      conectWifi
    },

    methods:{
      //TODO 查找WiFi
      searchWifi(){
        console.log(this.hasWIFI)
      },
      yitaiSet(){
        this.$router.push('/yitaiSet');
      },
      wifiSet(){
        this.$router.push({path:'/wifiSet',query:{wifiInfo:this.wifiInfo}});
      },
      conectWifi(item){
        if(!item.isLock){
          return;
        }
        this.showConectWifi = true;
      },
      onCloseDialog(){
        this.showConectWifi = false;
      },
      onSuccess(wifiData){
        this.showConectWifi = false;
        this.currentWifiName = wifiData.name;
        this.hasConect = true;
      }
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
    position: relative;
    // position: fixed;
    // top: 0;
    // left: 0;
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
            justify-content: space-between;
            padding: 0 20px 0 45px;
            box-sizing: border-box;
            img{
                width: 25px;
                height: 20px;
                display: inline-block;
            }
            .yitaiInfo{
              width: 25px;
              height: 25px;
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
            padding-right: 22px;
            box-sizing: border-box;
            .wifihead{
                margin-left: 45px;
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
            .wifiCt{
              margin-left: 45px;
              width: 435px;
              height: 50px;
              border-bottom: 1px solid #F2F2F2;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .wifiName{
                font-size: 18px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(33,33,33,1);
              }
              .wifiStatus{
                display: flex;
                justify-content: space-between;
                margin-right: 19px;
                width: 54px;
              }
              .conect{
                position: absolute;
                left: 0;
                top: 0;
                z-index: 20;
              }
            }
            .currentWifi{
              width: 480px;
              height: 50px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding-left: 19px;
              padding-right: 22px;
              box-sizing: border-box;
              span{
                margin-left: 5px;
              }
              .currentLeft{
                display: flex;
                align-items: center;
              }
            }
            .splite{
              width: 480px;
              height: 4px;
              background: #F7F7F7;
            }

        }
    }
  }
  
  
</style>