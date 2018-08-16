<template>
  <div class="main">
     <nav class="nav">
        <ul class="nav-ul">
          <li :key="index" v-for="(item,index) in list">
            <router-link :to="item.path">{{item.title}}</router-link>
          </li>
        </ul>
     </nav>
     <main class="center">
        <router-view></router-view>
     </main>
    <detail-right></detail-right>
  </div>
</template>
<script>
import DetailRight from '../jobdetail/components/DetailRight'
export default {
  components: {
    DetailRight
  },
  data () {
    return {
      show: false,
      list: [
        {
          title: '热门',
          path: '/'
        },
        {
          title: '销售/客服/市场',
          path: 'hot'
        },
        {
          title: '财务/人力资源/ 行政',
          path: 'hot'
        },
        {
          title: '项目/质量/ 高级管理',
          path: 'hot'
        },
        {
          title: '房产/建筑/ 物业管理',
          path: 'hot'
        },
        {
          title: 'IT/互联网/ 通信',
          path: 'hot'
        },
        {
          title: '采购/贸易/ 交通/物流',
          path: 'hot'
        },
        {
          title: '金融',
          path: 'hot'
        },
        {
          title: '生产/制造',
          path: 'hot'
        },
        {
          title: '传媒/印刷/ 艺术/设计',
          path: 'hot'
        },
        {
          title: '咨询/法律/ 体育/翻译',
          path: 'hot'
        },
        {
          title: '能源/环保/ 农业/科研',
          path: 'hot'
        },
        {
          title: '兼职/实习/ 社工/其他',
          path: 'hot'
        },
        {
          title: '服务业',
          path: 'hot'
        }
      ]
    }
  },

  methods: {

  }
}
</script>
<style lang="scss" scoped>
  .main{
    width: 1400px;
    margin:0 auto;
    display:flex;
    justify-content: space-between;
    color:#222;
    .nav{
      width: 170px;
      font-size:14px;
      .nav-ul{
        li{
          height:56px;
          line-height:56px;
          text-align: center;
          font-weight: 800;
          a{
            color:#222;
            display:inline-block;
            width: 100%;
            height: 100%;
          }
          &:hover a{
            background:#fed226;
            color:#fff;
          }
        }
      }
    }
    .center{
      width: 780px;

      min-height:300px;
    }
  }

.router-link-active{
  background: #fed226;
  color:#fff!important;
}
</style>
