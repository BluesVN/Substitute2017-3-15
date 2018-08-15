<template>
  <div class="header">
    <div class="img-block">
      <img src="../../../assets/image/logo.png" >
    </div>
    <span class="text">职引官</span>
    <div class="header-right">
      <span>首页</span>
      <router-link to="/cir">
        <span class="yxq">引享圈</span>
      </router-link>
      <router-link to="/jobdetail">
        <span>职位行情</span>
      </router-link>
      <span class="cyc">测一测</span>
      <span class="ask border">我要提问</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader'
}
</script>
<style lang="stylus" scoped>
@import '~styles/variables'
.header
  display flex
  height 1rem
  margin-top .15rem
  margin-bottom .25rem
  background-color #404040
  justify-content: start;
  align-items: center;
  color #fff
  .img-block
    display inline-block
    margin-left $leftOffset
    background-color $logoColor
    min-width 2rem
    height 1.3rem
    line-height 1.3rem
    margin-top -.15rem
    text-align center
  .text
    margin-left .1rem
    white-space: nowrap;
  .header-right
    position: absolute;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.18rem;
    overflow: hidden;
    left: 11.3rem
  .yxq
    margin 0 .5rem 0 .8rem
  .cyc
    margin 0 .8rem 0 .7rem
  .ask
    padding .1rem
</style>

<!--template>
   <div class="heads">
			<li class="heam"><img src="../../../assets/image/tm.png"></li>
			<li >职引官</li>
			<li class="heads_1"><div id="sp">我要提问</div></li>
			<li class="heads_1">测一测</li>
			<li class="heads_1">职位行情</li>
			<li class="heads_1">引享圈</li>
			<li class="heads_1">首页</li>
			
		</div>
</template>

<script>
export default {
  name: 'ath',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--style-- scoped>
	li{
		display:inline-block;
		list-style: none;
		vertical-align: middle;
	}
	.heads{
		color: aliceblue;
		width: 100%;
		height: 20px;
		background:#3D3D3D;
	}
	.heads li:hover{
		color: #F9CE39;
	}
	.heam{
		margin-top:-20px;
		margin-left: 15%;
	}
	.heam img{
		height:80px;
	}
	.heads_1{
		float:right;
		display: inline-block;
		vertical-align: middle;
		margin-top: 15px;
		margin-right:4% ;
	}
	#sp{
		text-align: center;
		margin-right: 400px;
		height: 25px;
		line-height: 25px;
		margin-top: -3px;
	}
</style-->

