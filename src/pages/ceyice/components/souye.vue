<template>
    <div id="kuang">
        
        <span class="p1"><img src="../assets/image/qi.png"></span>
       <li class="p2"> <p>{{meg}}</p></li>
       <li class="p2" @click="ceshi"> <img src="../assets/image/qw.png"></li>
    </div>
</template>
<script>
export default {
    name:'souye',
    data(){
        return{
            meg:'为了您量身推荐职位，需要您完成下面的测试，看看哪些更加符合您！'
        }
       
        
    },
    methods:{
        ceshi(){
            this.$router.push('/number1');
        }
    }
}
</script>
<style scoped>
    #kuang{
        
       width: 60%;
        height:600px;
        display: inline-block;
        
        text-align: center;
        margin-top: 50px;
       margin-left: 15%;
        background: #F5F5F5;
    }
    #kuang img{
        height:40px;
       
    }
    li{
        list-style: none;
        margin: 120px;
    }
   
    .p1{
        margin-right:-80%;
    }
    .p2{
        color:black;
        font-size: 18px;
        font-weight: 900;
    }
</style>
