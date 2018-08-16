<template>
  <div class="model" v-show="model">
    <main class="model-main">
     <nav>
       <ul class="model-ul">
         <li @click="tab" :class="{active:bool}">提问</li>
         <li @click="tab2" :class="{active:bool1}">动态</li>
       </ul>
       <!-- 提问 -->
       <div class="tab current" v-show="bool">
         <div class="tab-title">
           <input type="text" placeholder="请输入标题以 ? 结束">
         </div>
         <div class="text" style="margin-top:30px;">
           <textarea placeholder="请描述你的问题!" class="el-textarea__inner" style="min-height: 230px;"></textarea>
           添加文件
           <div class="add">
             <input type="file">
           </div>
         </div>
       </div>
       <!-- 动态 -->
       <div class="tab" v-show="bool1">
         <div class="text">
           <textarea placeholder="请描述你的问题!" class="el-textarea__inner" style="min-height: 230px;"></textarea>
           添加文件
           <div class="add">
             <input type="file">
           </div>
         </div>
       </div>
       
       <div class="btn-container">
         <button class="btn">
           发布
         </button>
       </div>
       <!-- 关闭按钮 -->
       <img @click="test" class="close" src="../../../assets/image/close.png" alt="">
     </nav>
   
   </main>
  </div>

</template>
<script>
export default {
  name: 'model',
  data () {
    return {
      bool:true,
      bool1:false
    } 
  },
  methods: {
    test:function(){
      this.$emit('ccc');
    },
    tab:function(){
      this.bool=true;
      this.bool1=false;
    },
    tab2:function(){
      this.bool=false;
      this.bool1=true;
    }
  },
  props:{
    model:{
      type:Boolean,
      required:true
    }
  }
  
}
</script>
<style scoped>
*{margin: 0;padding: 0;list-style: none;}
.model{
  background: rgba(0,0,0,0.4);
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:100;
}
.model .model-main{
  /*width: 900px;*/
  background: #fff;
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
}
.model .model-main nav{
  padding:0 70px;
  position:relative;
}
.model .model-main nav .close{
  position:absolute;
  right: 16px;
    top: 10px;
    cursor: pointer;
}
.model .model-main nav .close:hover{
  transform: rotateZ(180deg);
  transition: all .3s;
}
.model .model-main nav .model-ul{
  display:flex;
  color:#828282;
  font-size:24px;
  justify-content: space-around;
  padding-top:50px;
}
.model .model-main nav .model-ul li{
  padding-bottom:14px;
  width: 76px;
  text-align:center;
  cursor: pointer;
}
.model .model-main nav .model-ul .active{
  border-bottom:2px solid #f9cf38; 
  color:#414141;
  
}
.model .model-main nav .tab .text{
  outline: none;
  overflow:hidden;
  width: 760px;
  height:356px;
  border: 1px solid #b5b5b5;
  margin-top:56px;
  position:relative; 
  
}
.model .model-main nav .btn-container{
  text-align: center;
  margin:40px 0 66px 0;
}
.model .model-main nav .tab{
  
}
.model .model-main nav .tab .tab-title{
  width: 760px;
  height:48px;
  border: 1px solid #b5b5b5;
  margin-top:24px;
}
.model .model-main nav .tab .tab-title input{
  width: 100%;
  height:100%;
  outline: none;
  border:0;
  
  font-size: 20px;
  text-indent: 0.4em;
}
.model .model-main nav .tab.current{
  display:block;
}
.model .model-main nav .btn-container .btn{
  height: 60px;
  width: 300px;
  background-color: #f9cf38;
  border-radius: 10px;
  outline: none;
  border: 0;
  font-size: 24px;
  color:#fff;
  cursor: pointer;
}
.model .model-main nav .tab .text .add{
  width: 80px;
  height: 80px;
  border: 1px solid #b5b5b5;
  position:absolute;
  bottom:30px;
  left:24px;
  background:url(../../../assets/image/add.png)no-repeat center;
  overflow: hidden;
  cursor: pointer;
}
.model .model-main nav .tab .text .el-textarea__inner{
  display: block;
    padding: 5px 15px;
    line-height: 1.5;
    box-sizing: border-box;
    width: 100%;
    font-size: 16px;
    color: #606266;
    background-color: #fff;
    background-image: none;
    border: none;
    border-radius: 4px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  outline: none;
  resize: none;
}
.model .model-main nav .tab .text .add input[type='file']{
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}
</style>
