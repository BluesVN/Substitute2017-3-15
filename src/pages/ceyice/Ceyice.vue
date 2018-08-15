<template>
<div>
  <detail-header></detail-header>
  <div class="detail-box">
    <contents></contents>
  </div>
</div>
</template>
<script>
import DetailHeader from '../jobdetail/components/Header'
// import axios from 'axios'
export default {
  name: 'Ceyice',
  components: {
    DetailHeader
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
