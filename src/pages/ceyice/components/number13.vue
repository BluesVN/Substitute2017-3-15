<template>
    <div id="kuang">
        <div id="jindu">
        <div id="yellow"></div>
        </div>
        <p>13.您对那些行业比较感兴趣( )(可多选)</p>
         <p>A.销售/客服/市场</p>
        <p>B.财务/人力资源/行政</p>
        <p>C.项目/质量/高级管理</p>
        <p>D.房产/建筑/物业管理</p>
        <p>E.IT/互联网/通信</p>
        <p>F.采购/贸易/交通/物流</p>
        <p>G.金融</p>
        <p>H.生产/制造</p>
        <p>I.传媒/印刷/艺术/设计</p>
        <p>J.咨询/法律/体育/翻译</p>
        <p>K.服务业</p>
        <p>L.能源/环保/农业/科研</p>
        <p>M.兼职/实习/社工/其他</p>
       
        
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
            this.$router.push('/number14')
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
        margin: 1px;
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
        width: 443.3px;
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
