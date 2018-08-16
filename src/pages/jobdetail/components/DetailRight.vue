<template>
  <div class="right">
    <div v-if="logShow">
      <div class="shandow" @click="logShow -= 1"></div>
      <article class="logbox">
        <div class="log-title">
          <span @click="isLogin=true" :class="{'choose':isLogin}">登录</span>
          <span @click="isLogin=false" :class="{'choose':!isLogin}">注册</span>
        </div>
        <!-- 注册 -->
        <div class="box-main" v-if="!isLogin">
          <p class=""><img src="../../../assets/image/nick.png"><input type="text" placeholder="昵称"></p>
          <p class=""><img src="../../../assets/image/tel.png"><input type="tel" placeholder="手机号"></p>
          <p class=""><img src="../../../assets/image/code.png"><input type="tel" placeholder="验证码"><span class="border-left a-code">获取验证码</span></p>
          <p class=""><img src="../../../assets/image/pass.png"><input type="password" placeholder="设置登录密码"></p>
        </div>
        <!-- 登录 -->
        <div class="box-main" id="login" v-if="isLogin">
          <p class=""><img src="../../../assets/image/tel.png"><input type="tel" placeholder="请输入手机号/邮箱"></p>
          <p class=""><img src="../../../assets/image/pass.png"><input type="password" placeholder="请输入密码"></p>
          <router-link to="/findpass" class="findpass" tag="div">
            <img src="../../../assets/image/pass.png">找回密码
          </router-link>
        </div>
        <button class="log-btn" v-if="isLogin">登录</button>
        <button class="log-btn" v-if="!isLogin">注册</button>
        <div class="log-link border-top">
          <span class="log-link-text">第三方登录</span>
          <img src="../../../assets/image/qq.png">
          <img src="../../../assets/image/朋友圈.png">
          <img src="../../../assets/image/新浪.png">
        </div>
      </article>
    </div>
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
      <div class="btn" ref="btn" id="btn">
        <button class="btn-button" @click="logShow += 1">登录</button>
        <button class="btn-button" @click="logShow += 1">注册</button>
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
  },
  data () {
    return {
      logShow: 0,
      isLogin: false,
      choose: 'choose'
    }
  },
  methods: {
    changeStatus (e) {
      console.log(this.$refs.btn.data)
      this.logShow++
    }
  },
  computed: {}
}
</script>
<style lang="stylus" scoped>
@import '~styles/variables'

.right
  margin-left: 1rem
  width: 3.8rem

  .shandow
    position: fixed
    background: #0000008c
    width: 100vw
    height: 100vh
    left: 0
    top: 0
    z-index: 2

  .logbox
    display: flex
    overflow: hidden
    flex-direction: column
    justify-content: space-evenly
    align-items: center
    position: fixed
    z-index: 3
    background: #ffffff
    width: 5.3rem
    height: 7.4rem
    top: 15%
    left: 0
    right: 0
    margin: auto
    border-radius: 2%

    .log-title
      position: absolute
      top: 0
      width: 100%
      height: 1rem
      line-height: 1rem
      text-align: center
      border-top: 0.15rem solid $logoColor
      font-size: 0.25rem
      color: #aaa
      word-spacing: 0.5rem

    .choose
      color: $logoColor
      border-bottom: 0.08rem solid $logoColor

    .log-title span
      display: inline-block
      width: 1.2rem
      height: 0.9rem

    .box-main
      text-align: center
      font-size: 0.2rem
      width: 4.7rem
      overflow: hidden
      display: flex
      flex-direction: column
      align-items: flex-start
      margin-top: 0.8rem

    .box-main p
      margin: 0.1rem
      height: 0.6rem
      line-height: 0.6rem
      width: 4.43rem
      border: 0.01rem solid #ddd
      border-radius: 2%
      text-align: left
      padding-left: 0.15rem

    .box-main p input
      width: 2.5rem
      height: 0.56rem
      line-height: 0.56rem
      padding-left: 0.15rem

    .a-code
      padding-left: 0.2rem

    .log-btn
      height: 0.6rem
      line-height: 0.6rem
      width: 4.6rem
      border-radius: 2%
      color: $logoColor
      background: #404040
      font-size: 0.24rem

    .log-link
      display: flex
      flex-direction: row
      justify-content: space-around
      width: 3rem
      padding-top: 0.3rem

    .log-link-text
      background: #fff
      position: absolute
      top: -0.15rem
      left: 0
      right: 0
      width: 1rem
      font-size: 0.08rem
      margin: auto
      padding: 0.1rem 0.28rem

    .findpass
      width: 100%
      text-align: right
      display: flex
      justify-content: flex-end
      margin-top .1rem

    .findpass img
      width: 0.22rem
      height: 0.22rem
      margin-right .2rem

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
