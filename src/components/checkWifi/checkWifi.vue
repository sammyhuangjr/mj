<template>
<div>
    <img :src="getSrc"/>
</div>
    
 
</template>
<script>

  export default{
    data(){
      return{
          
      }
    },

    props:{
        signal:Number
    },

    computed:{
        getSrc(){
            switch(this.signal){
                case 0:
                    return this.images.wifi0;
                break;
                case 1:
                    return this.images.wifi1;
                break;
                case 2:
                    return this.images.wifi2;
                break;
                case 3:
                    return this.images.wifi3;
                break;
                case 4:
                    return this.images.wifi;
                break;
            }
        }
    },

    components:{
       
    },

    methods:{
        
    }
  }
</script>
<style lang="scss" scoped>
    img{
        width: 26px;
        height: 19px;
    }
</style>