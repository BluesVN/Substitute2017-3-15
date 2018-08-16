<template>
  <div class="main">
    <p class="border-bottom main-title">设置新密码</p>
    <div class="main-center">
      <div>
        <p class="text">请设置 180****123@163.com的新密码,建议使用数字 字母 字符的组合密码,提高密码安全等级</p>
        <input type="text" placeholder="6-16位密码,区分大小写">
      </div>
      <router-link to="/findpass/end" tag="button" class="btn">确定</router-link>
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
      padding: 0.1rem 0.15rem
      margin-top: 0.2rem

  .text
    margin-bottom: 0.15rem

  .a-code
    padding: 0.1rem 0.15rem

  .main-center input
    height: 0.6rem
    line-height: 0.6rem
    border-radius: 2%
    width: 100%

  .btn
    background: $logoColor
    height: 0.6rem
    line-height: 0.6rem
    border-radius: 2%
</style>
