<!--上导航栏-->
<template>
    <el-container>
      <!--头部区域-->
      <el-header height="60px">
        <img class="im" src="/static/img/logo.jpg" />
        <div class="spanbd">
          <a href="#">首页</a>
          <a href="#">荣耀官网</a>
          <a href="#">华为官网</a>
          <a href="#">我的订单</a>
          <a href="#">客服服务</a>
          <a href="#">花粉俱乐部</a>
          <a href="#">全部商品</a>
        </div>
        <!--判断登录-->
        <span v-show="!judgeNowUser()"><router-link to="/login">请登录，游客</router-link></span>
        <span v-show="judgeNowUser()">{{ getNowUserName() }}</span>
        <span>|</span>
        <span><router-link to="/register">注册</router-link></span>

        <i class="el-icon-shopping-cart-full"></i>
        <font><router-link to="/goodcar">购物车</router-link></font>
        <span><router-link to="/">返回首页</router-link></span>

       <el-input class="sear" placeholder="请输入内容" suffix-icon="el-icon-search" v-model="input1"></el-input>
       <!--suffix-icon显示图标-->
      </el-header>  
    </el-container>   
</template>
<script>
export default {
  data() {
    return {
      input1: '',
    }
},
methods:{
    judgeNowUser(){
      if(this.$store.state.NowUser!=""){
        return true
      }else{
        return false;
      }
    },
    getNowUserName(){
      return this.$store.state.NowUser.name;
    }
}
}

</script>
<style scoped>
.el-header {
  background-color: black;
  text-align: center;
  display: flex;
  justify-content: space-between;
}
.im{
  margin-left:40px;
}
a {
  font-size: 17px;
  color: white;
  margin-left: 8px;
  text-decoration: none;
}
a:hover {
  color: rgb(126, 108, 108); 
}
.spanbd {
  width: 550px;
  margin: auto;
  margin-left: 75px;
}
span{
  margin:auto;
  font-size: 17px;
  color: gray;
  margin-left:-20px;
  text-decoration: none;
}
font{
  margin:auto;
  font-size: 17px;
  color:white;
  margin-left:-30px;
  text-decoration: none;
}
font:hover {
  color:rgb(126, 108, 108);
}

.el-icon-shopping-cart-full{
  margin:auto;
  color: white;
  margin-left:-20px;
}
.sear{
  width:250px;
  height:30px;
  margin:auto;
}

</style>