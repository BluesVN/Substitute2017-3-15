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
import DetailRight from '../jobdetail/components/DetailRight'
import CirMain from './components/CirMain'

// import axios from 'axios'
export default {
  name: 'JobDetail',
  components: {
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
