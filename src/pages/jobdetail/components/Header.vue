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
      <router-link to="/test">
        <span class="cyc">测一测</span>
      </router-link>
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
