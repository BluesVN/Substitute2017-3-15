<template>
    <div id="kuang">
        <div id="jindu">
        <div id="yellow"></div>
        </div>
        <p>18.您的兴趣爱好有哪些？（ ）</p>
        <p>A.打篮球</p>
         <p>B.踢足球</p>
         <p>C.打羽毛球</p>
         <p>D.打兵乓球</p>
         <p>E.登山</p>
         <p>F.旅游</p>
         <p>G.唱歌</p>
         <p>H.弹吉他</p>
         <p>I.弹小提琴</p>
         <p>J.画画</p>
         <p>K.书法</p>
         <p>L.下棋</p>
         <p>M.游戏</p>
         <p>N.跳舞</p>
         <p>O.打排球</p>
        <p><textarea rows="10px" cols="70px">某某兴趣爱好</textarea></p>
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
            this.$router.push('/number19')
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
        height:100%;
        display: inline-block;
        
         padding-left: 7%;
         padding-top: 2%;
        margin-top: 50px;
       margin-left: 15%;
        background: #F5F5F5;
    }
    #kuang p{
        
        color:black;
        margin: 0px;
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
        width: 613.8px;
        height: 15px;
    }
  
    .xia img{
        width: 150px;
    }
    #mm{
        display: inline-block;
        margin-left: 25%;
    }
</style>
