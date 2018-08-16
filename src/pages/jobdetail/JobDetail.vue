<template>
<div>
  <div class="detail-box">
    <detail-left></detail-left>
    <detail-middle></detail-middle>
    <detail-right></detail-right>
  </div>
</div>
</template>
<script>
import DetailLeft from './components/DetailLeft'
import DetailMiddle from './components/DetailMiddle'
import DetailRight from './components/DetailRight'

// import axios from 'axios'
export default {
  name: 'JobDetail',
  components: {
    DetailLeft,
    DetailMiddle,
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
