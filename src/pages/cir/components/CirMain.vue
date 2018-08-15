<template>
  <div class="main">
    <div class="tab border-bottom">
      <span class="select">热门</span>
      <span>动态</span>
      <span>问答</span>
    </div>
    <ul class="list">
       <p class="texts">面对消费升级下的偏好转移，不再以价格导向需求获得的接受度逐渐增高，我们原本平面的设计带来不可忽视的影响。</p>
      <li class="li border-bottom">
        <div class="li-top">
          <div class="li-head"></div>
          <div class="li-name">微笑达人</div>
        </div>
        <p class="text">这个过程有点类似竞品分析，寻找同行业（产品经理推荐、网上查找）产品，从中挑选设计质量较好的产品。</p>
        <img src="../../../assets/image/news_one.png" alt="">
        <div class="li-bot">
          <span class="date">2018-06-26</span>
          <span class="watch"><i class="iconfont">&#xe640;</i>1200</span>
          <span class="comment"><i class="iconfont">&#xe63a;</i>36</span>
          <span class="like"><i class="iconfont">&#xe60c;</i>102</span>
        </div>
      </li>
      <li class="li border-bottom">
        <div class="li-top">
          <div class="li-head"></div>
          <div class="li-name">微笑达人</div>
          <img src="../../../assets/image/attention.png" alt="">
        </div>
        <p class="text">这个过程有点类似竞品分析，寻找同行业（产品经理推荐、网上查找）产品，从中挑选设计质量较好的产品。</p>
        <img src="../../../assets/image/news_one.png" alt="">
        <div class="li-bot">
          <span class="date">2018-06-26</span>
          <span class="watch"><i class="iconfont">&#xe640;</i>1200</span>
          <span class="comment"><i class="iconfont">&#xe63a;</i>36</span>
          <span class="like"><i class="iconfont">&#xe60c;</i>102</span>
        </div>
      </li>
       <li class="li border-bottom">
        <div class="li-top">
          <div class="li-head"></div>
          <div class="li-name">微笑达人</div>
          <img src="../../../assets/image/attention.png" alt="">
        </div>
        <p class="text">这个过程有点类似竞品分析，寻找同行业（产品经理推荐、网上查找）产品，从中挑选设计质量较好的产品。</p>
        <img src="../../../assets/image/news_one.png" alt="">
        <div class="li-bot">
          <span class="date">2018-06-26</span>
          <span class="watch"><i class="iconfont">&#xe640;</i>1200</span>
          <span class="comment"><i class="iconfont">&#xe63a;</i>36</span>
          <span class="like"><i class="iconfont">&#xe60c;</i>102</span>
        </div>
      </li>
       <p class="texts">面对消费升级下的偏好转移，不再以价格导向需求获得的接受度逐渐增高，我们原本平面的设计带来不可忽视的影响。</p>
      <li class="li border-bottom">
        <div class="li-top">
          <div class="li-head"></div>
          <div class="li-name">微笑达人</div>
           <img src="../../../assets/image/attention.png" alt="">
        </div>
         <p class="text">曾几何时为了兼容IE低版本浏览器而头痛，以为到Mobile时代可以跟这些麻烦说拜拜。可没想到到了移动时代，为了处理各终端的适配而乱了手脚。</p>
        <img src="../../../assets/image/pw1.png" alt="">
        <div class="li-bot">
          <span class="date">2018-06-26</span>
          <span class="watch"><i class="iconfont">&#xe640;</i>1200</span>
          <span class="comment"><i class="iconfont">&#xe63a;</i>36</span>
          <span class="like"><i class="iconfont">&#xe60c;</i>102</span>
        </div>
      </li>
      <li class="li border-bottom">
        <div class="li-top">
          <div class="li-head"></div>
          <div class="li-name">微笑达人</div>
          <img src="../../../assets/image/attention.png" alt="">
        </div>
        <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ullam quia deleniti eaque, nihil quaerat magni corrupti maxime alias, sit exercitationem enim vitae quo repudiandae ducimus amet! Aliquid, voluptate natus.</p>
        <img src="../../../assets/image/news_one.png" alt="">
        <div class="li-bot">
          <span class="date">2018-06-26</span>
          <span class="watch"><i class="iconfont">&#xe640;</i>1200</span>
          <span class="comment"><i class="iconfont">&#xe63a;</i>36</span>
          <span class="like"><i class="iconfont">&#xe60c;</i>102</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'CirMain'
}
</script>
<style lang="stylus" scoped>
@import '~styles/variables'

.main
  width: 9.4rem
  margin-left: 3.15rem

  .tab
    display: flex
    justify-content: flex-start
    align-items: center
    padding-bottom: 0.2rem

  .tab span
    height: 0.66rem
    line-height: 0.66rem
    width: 2.55rem
    text-align: center

  .select
    background-color: $logoColor
    color #fff
  .li
    padding-bottom .2rem
  .li-top
    display: flex
    flex-direction: row
    white-space: nowrap
    margin-bottom: 1px
    justify-content: space-between
    align-content: center
    align-items: center
    background: #fff
    padding: 0.15rem 0

    .li-head
      width: 0.5rem
      height: 0.5rem
      background: red
      border-radius: 100%
      margin-left .1rem

    .li-name
      font-size: 0.2rem
      flex: 1;
      margin-left: .4rem;
  .text
    font-size: .23rem
    line-height:150%
    margin: .2rem 0
  .li-bot
    font-size: 0.15rem
    color: #aaa
    margin-top: 0.2rem
  .li-bot span
    margin-right: 1.2rem
  .iconfont
    margin-right: .05rem
</style>
