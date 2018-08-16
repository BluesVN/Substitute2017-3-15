<template>
  <div class="main">
    <p class="border-bottom main-title">安全验证</p>
    <div class="main-center">
      <div>
        <p>您可以通过以下方式进行安全验证</p>
        <button class="phone">安全手机</button>
      </div>
      <div>
        <p class="text">点击获取验证码,短信将发送至安全手机XXXXXXX</p>
        <input type="text"><button class="a-code">获取验证码</button>
      </div>
      <router-link to="/findpass/end" tag="button" class="btn">下一步</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FindTwo'
}
</script>
<style lang="stylus" scoped>
@import '~styles/variables'

.main
  width: 14rem
  height: 6.3rem
  margin-left: 2.6rem
  margin-top: 0.85rem
  background: #f5f5f5

  .main-title
    font-size: 0.24rem
    padding: 0.2rem

  .main-center
    display: flex
    flex-direction: column
    justify-content: space-around
    width: 5rem
    position: relative
    top: 1rem
    margin: auto
    height: 3rem
    font-size: 0.226rem

    .phone
      padding .1rem .15rem
      margin-top .2rem

  .text
    margin-bottom .15rem

  .a-code
    padding .1rem .15rem

  .main-center input
    height: 0.6rem
    line-height: 0.6rem
    border-radius: 2%

  .btn
    background: $logoColor
    height: 0.6rem
    line-height: 0.6rem
    border-radius: 2%
</style>
