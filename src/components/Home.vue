<!--Container布局容器-->
<template>
    <el-container class="container">
      <MinHeader/>
      <el-container class="hcontain">
        <!--侧边导航栏-->
        <el-aside width="200px"><NavMenu /> </el-aside>
        <!--右侧内容主体-->
        <el-main>
          <Banner />
        </el-main>
      </el-container>
      <GoodCard/>
    </el-container>
</template>



<script>
import Banner from "../components/Banner"; //引入组件
import NavMenu from "../components/NavMenu";
import MinHeader from "../components/MinHeader";
import GoodCard from "../components/GoodCard";

export default {
  name: "Home",
  components: {
    Banner,
    NavMenu,
    MinHeader,
    GoodCard
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  height: 60px;
  margin-top:60px;
  position:absolute;
}
.hcontain {
  height: 350px;
  margin-top:60px;
  position:absolute;
}
.el-aside {
  background-color: white;
  text-align: center;
  height: 350px;
  line-height: 200px;
}
.el-main {
  background-color: white;
  text-align: center;
  line-height: 160px;
  overflow: hidden;
}
.main {
  height: 1200px;
  margin-top:500px;
}

a {
  font-size: 17px;
  color: white;
  margin-left: 8px;
  text-decoration: none;
  text-align: center;
  line-height: 200px;
}
a:hover {
  color: lightcoral; /* 鼠标移入变色 */
}
.spanbd {
  width: 550px;
  margin: auto;
  margin-left: -20px;
}

</style>

