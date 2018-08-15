<template>
  <div class="main">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide class="slide" v-for="(item,index) in testData" :key="index" :id="index">
          <div class="item">
            <p>{{item.topicName}}（<span class="right-blue"></span>）</p>
            <ul>
              <li
                v-for="(it,i) in item.topicList"
                :key="i"
                @click="topicClick"
                >{{it}}</li>
            </ul>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>

      </swiper>
      <div class="btnbox">
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TestTopic',
  props: {
    testData: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'progress',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
      },
      ANS: [],
      indexT: 0
    }
  },
  methods: {
    topicClick (e) {
      var ans = event.target.innerHTML.split('.')[0]
      this.indexT = e.path[3].id
      this.ANS[this.indexT] = ans
      console.log(this.ANS)
      e.path[2].childNodes[0].childNodes[1].innerHTML = ans
      console.log(e.path[2].childNodes[0].childNodes[1].innerHTML)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variables'

.wrapper >>> .swiper-pagination-progress
  width: 10rem
  height: 0.3rem
  left: 1.5rem
  top: 0.5rem

.wrapper >>> .swiper-pagination-progressbar
  background: $logoColor
  box-shadow: 0 0.1rem 0.4rem #0000003b

.wrapper >>> .swiper-button-next, .swiper-button-prev
  background-size: auto
  width: 1.88rem
  opacity: 1

.wrapper >>> .swiper-button-next
  background-image: url('../../../assets/image/next.png')

.wrapper >>> .swiper-button-prev
  background-image: url('../../../assets/image/prev.png')

.main
  position: relative
  width: 14rem
  height: 6.3rem
  margin-left: 2.6rem
  margin-top: 0.85rem
  background: #f5f5f5 url('../../../assets/image/qi.png') no-repeat right 0.68rem top

  .item
    display: flex
    flex-direction: column
    xbackground: red
    justify-content: center
    align-items: flex-start
    margin-left: 1.5rem
    margin-top :1.2rem
    width: 10rem

    .right-blue
      color #3b75f2

  .btnbox
    background: red
    display: flex
    position: absolute
    background: #f00
    display: flex
    justify-content: center
    align-items: center
    left: 0
    right: 0
    margin: auto
    bottom: 0.84rem
    width: 5rem
</style>
