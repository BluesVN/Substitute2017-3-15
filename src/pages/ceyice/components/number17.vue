<template>
    <div id="kuang">
        <div id="jindu">
        <div id="yellow"></div>
        </div>
        <p>17.你有没有哪方面的专长以及证书？（ ）(可多选/填写)</p>
        <p>A.计算机二级证</p>
         <p>B.教师证</p>
         <p>C.会计资格证</p>
         <p>D.英语四</p>
         <p>E.英语6级</p>
         <p>F.英语8级</p>
         <p>J.人力资格证</p>
         <p>H.小语种资格证</p>
         <p>I.证券从业资格证</p>
         <p>G.银行从业资格证</p>
         <p>K.律师资格证书</p>
         <p>L.CAD工程师认证证书</p>
         <p>M.导游资格证书</p>
         <p>N.国家司法考试证书</p>
         <p>O.驾照证</p>
         <p><textarea rows="10px" cols="70px">填写其他证书</textarea></p>
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
            this.$router.push('/number18')
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
        width: 579.7px;
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
