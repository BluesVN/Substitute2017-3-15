<template>
    <div id="kuang">
        <div id="jindu">
        <div id="yellow"></div>
        </div>
        <p>1.您目前的身份是（）</p>
        <p>A.在校学生</p>
         <p>B.离职人员</p>
         <p>C.在职人员</p>
       <div class="xia" ><li  @click="ceshi"><img src="../../../assets/image/xia.png" ></li></div>

    </div>
</template>
<script>
export default {
  methods: {
    ceshi () {
      this.$router.push('/number2')
    }
  }
}
</script>
<style scoped>
#kuang {
  width: 60%;
  height: 600px;
  display: inline-block;

  padding-left: 7%;
  padding-top: 2%;
  margin-top: 50px;
  margin-left: 15%;
  background: #f5f5f5;
}
#kuang p {
  color: black;
  margin: 25px;
  font-size: 18px;
  font-weight: 900;
}
li {
  margin: 0px;
  padding: 0px;
}
#jindu {
  border-radius: 45px;
  background: #ccc;
  width: 750px;
  height: 15px;
}
#yellow {
  border-radius: 45px;
  background: coral;
  width: 34.1px;
  height: 15px;
}
.xia {
  text-align: center;
  margin: auto;
  transform: translate(0, 90px);
  -ms-transform: translate(0px, 90px); /* IE 9 */
  -webkit-transform: translate(0px, 90px); /* Safari and Chrome */
}
.xia img {
  width: 150px;
}
</style>
