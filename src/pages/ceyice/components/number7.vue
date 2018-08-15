<template>
    <div id="kuang">
        <div id="jindu">
        <div id="yellow"></div>
        </div>
        <p>7.遇到问题，你处理方式（）</p>
        <p>A.独立思考，直至最后自己通过各种查阅资料来解决</p>
         <p>B.思考一会就会咨询别人</p>
         <p>C.如果可以选择不做的话，这个问题就会留下或者直接不做</p>
        
       <div id="mm">
                        <li class="xia" @click="goBack"><img src="../../../assets/image/shang.png" ></li>
                        <li class="xia" @click="xia"><img src="../../../assets/image/xia.png" ></li>
       </div>

    </div>
</template>
<script>
export default {
    methods:{
        xia(){
            this.$router.push('/number8')
        },
        goBack(){
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
    li{
        display: inline-block;
    }
    #kuang{
        
       width: 60%;
        height:600px;
        display: inline-block;
        
         padding-left: 7%;
         padding-top: 2%;
        margin-top: 50px;
       margin-left: 15%;
        background: #F5F5F5;
    }
    #kuang p{
        
        color:black;
        margin: 25px;
        font-size: 18px;
        font-weight: 900;
    }
    li{
        margin: 0px;
        padding: 0px;
    }
    #jindu{
       border-radius: 45px;
        background: #ccc;
        width: 750px;
        height: 15px;
    }
    #yellow{
         border-radius: 45px;
      background: coral;
        width: 68.2px;
        height: 15px;
    }
    .xia{
        
        
        text-align: center;
      margin: 85px;
      transform: translate(0,130px);
      -ms-transform:translate(0px,130px); /* IE 9 */
	-webkit-transform:translate(0px,130px); /* Safari and Chrome */
    }
    .xia img{
        width: 150px;
    }
    #mm{
        display: inline-block;
        margin-left: 10%;
    }
</style>
