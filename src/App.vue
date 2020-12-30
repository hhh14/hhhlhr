<template>
  <div id="app">
      <!--头部-->
      <el-container>
      <el-container><Header/></el-container>
      <router-view /><!--路由占位符-->
      <!--尾部--> 
      <el-footer>
      <img class="image" src="/static/img/foot.jpg" />
      <p>Z09418236黄慧敏</p>
      </el-footer>
      </el-container>
  </div>
</template>

<script>
import Header from "./components/Header"; //引入组件

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.el-footer {
  background-color:#021a2e;
  color:lightgray;
  text-align: center;
  line-height: 60px;
  margin-top:5200px;
}
.image{
  margin-top:-310px;
  margin-left:-750px;
  position:absolute;
  width:1500px;
}

</style>