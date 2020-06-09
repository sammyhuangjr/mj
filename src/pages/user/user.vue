<template>
  <div class="box">
    <headTitle title="用户管理" isBack="true" isMore="true"></headTitle>
    <div class="_head">
      <div class="search">
        <img class="searchIcon" :src="this.images.search" />
        <input class="searchInput" placeholder="请输入姓名/卡号" />
      </div>
      <div class="_new">
        <img class="newIcon" :src="this.images.newuser" @click="newuser"/>
      </div>
    </div>
    <span class="total">共{{total}}人</span>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list class="userList" v-model="loading" :finished="finished"  @load="onLoad">
        <div v-for="(item,index) in user" :key="item.name" class="_args" >
          <img class="FaceImg" :src="item.logo" />
          <div class="name">{{item.name}}</div>
          <img class="deleteIcon" :src="that.images.delete" />
          <img class="editIcon" :src="that.images.edit" @click="userEdit(index)"/>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
  import headTitle from '../../components/headTitle/index';
  import all from '../../utils/virtualkeyboard';
  export default{
    data(){
      return{
        user:[],
        total:20,
        that:this,
        loading: false,
        finished: false,
        refreshing: false,
      }
    },
    components:{
      headTitle
    },

    methods:{
      _toNext(aa){
          console.log(aa);
        //   this.$router.push();
      },
      init(){
        let temp = [
          {'name':'张哲',logo:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1230268678,329560548&fm=26&gp=0.jpg'},
          {'name':'张哲',logo:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1230268678,329560548&fm=26&gp=0.jpg'},
          {'name':'张哲',logo:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1230268678,329560548&fm=26&gp=0.jpg'}
        ]
        this.user = temp.map( (item) =>{
          let _temp = {};
            _temp.name = item.name;
            _temp.logo = item.logo;
            return _temp;
        })
        this.demoEvents = this.user;
        console.log(this.user);
      },
      //TODO 下拉刷新
      onRefresh(){
        this.refreshing = false
      },
      //TODO 上拉加载
      onLoad(){
        this.loading = false;
        this.finished = true
      },
      //TODO 编辑用户
      userEdit(index){
        this.$router.push({path:'/userEdit',query:{isEdit:true,userInfo:this.user[index]}});
      },
      //新增用户
      newuser(){
        this.$router.push({path:'/userEdit',query:{isEdit:false}});
      },
    },
    activated(){
      $('.searchInput').virtualkeyboard();
    },
    created(){
      this.init();
    },
    mounted(){
      
    }
  }
</script>
<style lang="scss" scoped>
  @import url('../../assets/css/virtualkeyboard.css');
  .box{
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    max-width: 480px;
    ._head{
      border-top: 1px solid #F2F2F2;
      width: 480px;
      padding-top: 9px;
      overflow: hidden;
      .search{
        width: 390px;
        height: 42px;
        background:rgba(242,242,242,1);
        margin-left: 20px;
        display: flex;
        float: left;
        .searchIcon{
          width: 23px;
          height: 23px;
          margin-left: 10px;
          margin-top: 10px;
        }
        .searchInput{
          color:rgba(186,186,186,1);
          font-size:16px;
          margin-left: 8px;
          background: none;
          border: none;
          width: 345px;
        }
      }
      ._new{
        float: left;
        width: 42px;
        height: 42px;
        .newIcon{
          width: 25px;
          height: 26px;
          margin-top: 8px;
          margin-left: 17px;
        }
      }
    }
    .total{
        margin-top: 10px;
        margin-left: 20px;
        font-size:16px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(186,186,186,1);
        display: block;
    }
    .userList{
      width: 480px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      ._args{
        width: 480px;
        height: 83px;
        padding: 15px 20px;
        border-top: 1px solid #F2F2F2;
        .FaceImg{
          float: left;
          width: 54px;
          height: 54px;
        }
        .name{
          float: left;
          padding: 13px 0;
          margin-left: 14px;
          font-size:20px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(33,33,33,1);
        }
        .editIcon{
          float: right;
          margin-right: 20px;
          width: 20px;
          height: 20px;
          margin-top: 13px;
        }
        .deleteIcon{
          width: 21px;
          height: 22px;
          float: right;
          margin-top: 13px;
        }
      }
      ._args:first-child{
        border-top: none;
      }
    }
    
  }
  
  

  
</style>