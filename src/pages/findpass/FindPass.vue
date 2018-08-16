<template>
  <div class="main">
    <p class="border-bottom main-title">请输入您要找回密码的账号</p>
    <div class="main-center">
      <input type="text">
      <input type="text">
      <router-link to="/findpass/two" tag="button" class="btn">下一步</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FindPass'
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

  .main-center input
    height .6rem
    line-height .6rem
    border-radius 2%

   .btn
      background $logoColor
      height .6rem
      line-height .6rem
      border-radius 2%
</style>
