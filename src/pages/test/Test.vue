<template>
<div>
  <detail-header></detail-header>
  <div class="detail-box">
    <test-topic :testData="testData"></test-topic>
  </div>
</div>
</template>
<script>
import DetailHeader from '../jobdetail/components/Header'
import TestTopic from './components/TestTopic'
import axios from 'axios'
export default {
  name: 'JobDetail',
  components: {
    DetailHeader,
    TestTopic
  },
  data () {
    return {
      testData: []
    }
  },
  methods: {
    getTestInfo () {
      axios.get('/api/test.json').then(this.getSucc)
    },
    getSucc (res) {
      res = res.data
      console.log('数据来了', res)
      if (res.ret && res.data) {
        const data = res.data
        this.testData = data
      }
    }
  },
  mounted () {
    this.getTestInfo()
  }
}
</script>
<style lang="stylus" scoped>
.detail-box
  display: flex
</style>
