<template>
  <div class="right">
    <div class="search">
      <div class="search-box">
        <span class="iconfont">&#xe632;</span>
        <input type="text" placeholder="">
      </div>
      <button>搜索</button>
    </div>
    <div class="login">
      <img src="../../../assets/image/log.png" alt="头像">
      <h6>Hello,您好!</h6>
      <div class="btn">
        <button class="btn-button">登录</button>
        <button class="btn-button">注册</button>
      </div>
    </div>
    <swiper-pop></swiper-pop>
    <swiper-hot></swiper-hot>
  </div>
</template>
<script>
import SwiperPop from './SwiperPop'
import SwiperHot from './SwiperHot'
export default {
  name: 'Detail',
  components: {
    SwiperPop,
    SwiperHot
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variables'

.right
  margin-left: 1rem
  width: 3.8rem

  .search
    display: flex

  .search-box
    border: 0.01rem solid #ddd
    border-right: none
    display: flex
    width: 3rem
    justify-content: space-between
    align-items: center

  .iconfont
    font-size: 0.25rem
    margin: 0 0.2rem

  .search-box input
    height: 0.6rem
    width: 2rem
    line-height: 0.64rem
    padding-right: 0.15rem

  .search button
    width: 1rem
    background-color: $logoColor
    color: #fff
    font-size: 0.23rem

  .login
    background-color: $mainBgc
    display: flex
    flex-direction: column
    justify-content: center
    align-content: center
    align-items: center
    height: 2.8rem
    border-bottom: 0.04rem solid $logoColor
    margin-top: 0.25rem

  .login h6
    margin: 0.05rem 0 0.6rem 0

  .btn
    display: flex
    justify-content: space-around
    width: 70%

    .btn-button
      background-color: $mainBlue
      color: #fff
      font-size: 0.2rem
      padding: 0.04rem 0.12rem
</style>
