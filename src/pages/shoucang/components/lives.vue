<template>
    <div id="gk">
        <div id='table_right'>
            <img src="../../../assets/image/image/p5.png">
        </div>
        <table>
            <tr>
                <td class="img" rowspan="2"><li class="wx"><img src="../../../assets/image/p1.png"></li><li class="wx">微笑达人</li></td>
                <td class="imggk"><img src="../../../assets/image/p2.png">我的发布</td>
                <td class="imggk"><img src="../../../assets/image/p3.png">我的粉丝</td>
                <td class="imggk"><img src="../../../assets/image//p4.png">我的关注</td>
            </tr>
            <tr>
                <td class="imggk"><span>1,000</span></td>
                <td class="imggk"><span>1,000</span></td>
                <td class="imggk"><span>1,000</span></td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
  name: 'lives'
}
</script>
<style scoped>
li {
  list-style: none;
}
#gk {
  border: 1px solid #ccc;
  margin-left: 15.1%;
  margin-top: 36px;
  height: 180px;
  width: 61%;
}
#table_right {
  float: right;
  margin-right: 16%;
  clear: both;
}
#table_right img {
  height: 35px;
  width: 20px;
}
#gk table {
  border-collapse: separate;
  border-spacing: 70px 4px;
  margin-right: 20%;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  display: -webkit-box;
  -webkit-box-align: center; /* 垂直居中 */
  -webkit-box-pack: center; /* 水平居中 */
}
.img img {
  clear: both;
  width: 25px;
}
.img li {
  display: inline-block;
}
.imggk img {
  height: 19px;
  width: 25px;
}
.imggk span {
  color: #f9ce39;
}
.wx {
  display: inline-block;
  vertical-align: middle;
}
</style>
