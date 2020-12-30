<!--商品卡片-->
<template>
  <el-container>
    <el-container class="leftContainer">
      <el-aside width="200px">
        <img class="leftImg" src="/static/img/left1.png" />
        <img class="leftImg" src="/static/img/left2.jpg" />
        <img class="leftImg" src="/static/img/left1.png" />
      </el-aside>
    </el-container>
    <div class="main">
      <span class="cardTitle">精品推荐|特价商品|热销单品</span>
      <el-divider></el-divider><!--分割线-->
      <div class="goodShow">
        <GoodSingle v-for="item in 50" :key="item" :goodid="item"></GoodSingle>
      </div>
    </div>
  </el-container>
</template>

<script>
import GoodSingle from "../components/GoodSingle";

export default {
  components: {
    GoodSingle,
  },
};
</script>
<style scoped>
.main {
  margin-top: 430px;
  width: 1300px;
  height: 4800px;
  
}
.goodShow {
  width: 1300px;
  height: 4200px;
  margin-top: 30px;
  margin-left: 10px;
  display: inline-block;

}
.cardTitle {
  font-size: 25px;
  margin-left: -200px;
}
.leftImg {
  width: 200px;
  height: 600px;
}
.leftContainer{
    height:3100px;
    margin-top:550px;
    margin-left:-1460px;
    text-decoration: none; 
    line-height: 850px;
}

</style>







