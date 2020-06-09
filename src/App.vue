<template>
  <div id="app">
    <transition>
      <keep-alive>
        <router-view class="router-view"/>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
  //  
  export default {
    name: 'App',
    data: () => ({
  
    }),
    methods:{
    },
   watch: {
      $route(to, from) {

      }
    },

    created(){

    }
  }
</script>

<style>
/*
  初始化样式
*/
*{
  margin: 0;
  padding: 0;
  list-style: none;
}

body{
  font-family: 'WRYH_UI';
}
img{
  display: block;
}
/*
    公共样式
*/


.app_left{
  float: left;
}

.app_cf{
  float: none;
  overflow: hidden;
}

.app_right{
  float: right;
}

.app_color_1{
  color:#D9AD7A;
}

.app_color_2{
  color:#999;
}

.app_color_3{
  color:#666;
}

.app_color_4{
  color:#CCC;
}

.app_color_5{
  color:#333;
}

.app_color_6{
  background-color:#FFF;
}

.app_color_7{
  color: #ED3D46;
}

.app_color_8{
  color: #0090FF;
}

.app_color_9{
  color:#ADB2B7;
}

.app_color_10{
  color:#010101;
}

.app_color_11{
  color:#000;
}
/* 字体颜色 */

.app_grey_1 {
  color: #333;
}

.app_grey_2 {
  color: #666;
}

.app_grey_3 {
  color: #999;
}

.app_grey_4 {
  color: #ccc;
}

.app_red_1 {
  color: #ff3e3c;
}

.app_black_1{
  color: #010101;
}

.app_bg_color1{
  background-color: #999;
}
.app_bg_color2{
  background-color: #fff;
}

.app_gradient_1 {
  background: linear-gradient(to right, rgba(231, 203, 169, 1), rgba(217, 173, 122, 1));
}

.app_gradient_2 {
  background: linear-gradient(to left, rgba(240, 71, 70, 1), rgba(252, 123, 123, 1));
}

.app_body{
  background-color:#F7F9FB;
  height: 100%;
  position: fixed;
  width: 100%;
}

.app_wexin_icon{
  display: block;
  width: 62px;
  height: 62px;
}

.app_line_row{
  background-color: #CCC;
  width: 80%;
  height: 1px;
  margin-left: 10%;
}

.app_line_row2{
  background-color: #DDD;
  width: 90%;
  height: 1px;
  margin-left: 5%;
}

.app_line_row3{
  background-color: #DDD;
  width: 100%;
  height: 1px;
}

.app_line_row4{
  background-color: #f5f5f5;
  width: 90%;
  height: 1px;
  margin-left: 5%;
}

.app_content{
  margin-top: 44px;
}

.app_input{
  display: block;
  border: none;
  outline: none;
}

.app_one_line{
  word-wrap: normal; /* for IE */
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.app_two_line{
  display: -webkit-box;
  -webkit-line-clamp: 2;
  /*! autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
  overflow: hidden;
  text-overflow: ellipsis;
}
.arrow_right{
  right:0;
  top:0;
  margin-top:18px;
  margin-right:15px;
}

.app_arrow{
  width:8px;
  height:8px;
  border-top:1px solid #999;
  border-right:1px solid #999;
  transform:rotate(45deg);  
  position:absolute; 
}

.app_row_right{
  width:8px;
  height:8px;
  border-top:1px solid #999;
  border-right:1px solid #999;
  transform:rotate(45deg);
  position:absolute;
}

.app_origin_price{
  text-decoration:line-through;
}

.app_arrow_solid {
  border:4px solid #fff;
  border-left-color:#666;
  width:0;
  height:0;
  position:absolute;
}

.router-view {    
  position: absolute;   
  width: 100%;  
  height: 100%; 
  /*overflow: hidden;*/
  transition: all .3s ease;  
}   

.slide-left-enter,  .slide-right-leave-active {    
  opacity: 0;    
  -webkit-transform: translate(100%, 0);    
  transform: translate(100%, 0);  
}   
.slide-left-leave-active,  .slide-right-enter {    
  opacity: 0;    
  -webkit-transform: translate(-100%, 0);    
  transform: translate(-100% 0);  
}
.slide-none-leave-active, .slide-none-enter{
  opacity: 0;    
}

.app_tabbar {
  flex-direction: row;
  display: flex;  
  white-space: nowrap;  
}
.app_fl{
  float: left;
}
.app_fr{
  float: right;
}

</style>
