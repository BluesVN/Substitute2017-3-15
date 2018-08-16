<template>
  <div>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide><img width="100%" height="100%" src="../../assets/image/banner.png" alt=""></swiper-slide>
    <swiper-slide><img width="100%" height="100%" src="../../assets/image/banner.png" alt=""></swiper-slide>
    <swiper-slide><img width="100%" height="100%" src="../../assets/image/banner.png" alt=""></swiper-slide>
    <swiper-slide><img width="100%" height="100%" src="../../assets/image/banner.png" alt=""></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
  <!-- 轮播组件结束 -->
    <div class="zj1"><li ><img src="../../assets/image/news_one.png"></li> <sur class="zj1-li"><li class="md">面对消费升级下的消费偏好转移，不再以价导向满足基础需求，上升为获得</li> <li data-v-3a30c7af="" class="zj1-sj">2018-06-26&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;

        <span ><img src="../../assets/image/mo.png">&nbsp;1200</span></li></sur>
    </div>
    <!-- 2 -->
    <div data-v-3a30c7af="" class="zj2"><span data-v-3a30c7af="" class="md">
            面对消费升级下的消费偏好转移，不再以价导向满足基础需求，上升为获得

          </span>
           <span class="sp">
            <li>
              <img src="/static/img/pg1.24f7fb7.png">
            </li>
            <li class="img-left">
              <img src="/static/img/pg1.24f7fb7.png">
            </li> <li  class="img-left">
              <img  src="/static/img/pg1.24f7fb7.png"></li> <li class="img-left"><img src="/static/img/pg1.24f7fb7.png"></li></span> <span class="sp1">
            2018-06-20 <font style="padding-left:30px;">管理员</font> <li style="margin-left:300px;"><img src="../../assets/image/mo.png">&nbsp;1200</li></span></div>

            <div class="zj1"><li ><img src="../../assets/image/news_one.png"></li> <sur class="zj1-li"><li class="md">面对消费升级下的消费偏好转移，不再以价导向满足基础需求，上升为获得</li> <li data-v-3a30c7af="" class="zj1-sj">2018-06-26&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;

        <span ><img src="../../assets/image/mo.png">&nbsp;1200</span></li></sur>
    </div>
    <!-- 2 -->
    <div data-v-3a30c7af="" class="zj2"><span data-v-3a30c7af="" class="md">
            面对消费升级下的消费偏好转移，不再以价导向满足基础需求，上升为获得

          </span>
           <span class="sp">
            <li>
              <img src="/static/img/pg1.24f7fb7.png">
            </li>
            <li class="img-left">
              <img src="/static/img/pg1.24f7fb7.png">
            </li> <li  class="img-left">
              <img  src="/static/img/pg1.24f7fb7.png"></li> <li class="img-left"><img src="/static/img/pg1.24f7fb7.png"></li></span> <span class="sp1">
            2018-06-20 <font style="padding-left:30px;">管理员</font> <li style="margin-left:300px;"><img src="../../assets/image/mo.png">&nbsp;1200</li></span></div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      swiperOption: {
        // 以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置
        autoplay: 2000,
        // direction : 'vertical',
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-button-prev', // 上一张
        nextButton: '.swiper-button-next', // 下一张
        // scrollbar:'.swiper-scrollbar',//滚动条
        mousewheelControl: true,
        observeParents: true,
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true,
        loop: true
      }
    }
  },

  methods: {},
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style lang="scss" scoped>
.zj1 {
  border-top: 1px solid #ccc;
  display: inline-flex;
  align-items: flex-end;
  margin-top: 30px;
  li {
    margin-top: 20px;
  }
}
.md {
  font-size: 19px;
  font-weight: bold;
}
.zj1-li li {
  margin-left: 20px;
}
.zj1-sj {
  font-size: 14px;
  color: #333;
}
.zj1-sj span {
  margin-left: 200px;
}
.zj2 {
  border-top: 1px solid #ccc;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  span {
    display: flex;
    flex-direction: row;
    margin-top: 15px;
  }
}
.sp img {
  width: 187px;
}
.img-left {
  margin-left: 10px;
}
.sp1 {
  @extend .zj1-sj;
}
</style>
