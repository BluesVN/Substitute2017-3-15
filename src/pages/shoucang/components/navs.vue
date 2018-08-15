<template>
    <div id="left">
        <ul>
            <li>我的资料</li>
            <li>我的粉丝</li>
            <li>我的关注</li>
            <li>我的发布</li>
            <li>我的收藏</li>
            <li>我的评论/回答</li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'navs'
}
</script>
<style scoped>
#left {
  padding: 0;
  width: 8%;
  text-align: center;
  margin-left: 15.1%;
}
ul {
  margin: 30px 0 0 0;
  padding: 0;
}
li {
  list-style: none;
  height: 55px;
  line-height: 38px;
  display: -webkit-box;
  -webkit-box-align: center; /* 垂直居中 */
  -webkit-box-pack: center; /* 水平居中 */
  width: 100%;
  text-align: center;
  margin-top: 2px;
  font-size: 19px;
}
li:hover {
  background: #f9ce39;
}
</style>
