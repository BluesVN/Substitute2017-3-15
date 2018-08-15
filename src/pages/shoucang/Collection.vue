<template>
<div>
  <detail-header></detail-header>
  <div class="detail-box">
      <detail-left></detail-left>
      <!-- <gk></gk> -->
    <contents></contents>
  </div>
</div>
</template>
<script>
import DetailHeader from '../jobdetail/components/Header'
// import left from './component/navs'
// import gk from './component/gk'
import Contents from './components/Contents'
// import axios from 'axios'
export default {
  name: 'Collection',
  components: {
    DetailHeader,
    // left,
    // gk,
    Contents
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
