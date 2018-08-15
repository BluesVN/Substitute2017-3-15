<template>
<div>
  <detail-header></detail-header>
  <div class="detail-box">
    <cir-main></cir-main>
    <detail-right></detail-right>
  </div>
</div>
</template>
<script>

import DetailHeader from '../jobdetail/components/Header'
import DetailRight from '../jobdetail/components/DetailRight'
import CirMain from './components/CirMain'

// import axios from 'axios'
export default {
  name: 'JobDetail',
  components: {
    DetailHeader,
    CirMain,
    DetailRight
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="stylus" scoped>
  .detail-box
    display flex
</style>
