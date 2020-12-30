<!--下导航栏-->
<template>
 <el-menu mode="horizontal" @select="handleSelect">
  <el-submenu index="1" class="menu">
  <template slot="title" >手机系列</template>
    <el-menu-item index="1-1" class="el-menu-demo"><img src="/static/img/h4.png"/>
    <p>HUAWEI 荣耀V畅想系列 ¥5969</p>
    </el-menu-item>
    </el-submenu>
    <el-submenu index="2" class="menu">
<template slot="title" >数码系列</template>
    <el-menu-item index="2-1" class="el-menu-demo"><img src="/static/img/h1.png"/>
    <p>HUAWEI FreeBUDs无线耳机 ¥1199</p>
    </el-menu-item>
    </el-submenu>
    <el-submenu index="3" class="menu">
<template slot="title">智能家居</template>
    <el-menu-item index="3-1" class="el-menu-demo"><img src="/static/img/h5.png"/>
    <p>HUAWEI 华为智慧屏 ¥4299</p>
     </el-menu-item>
    </el-submenu>
    <el-submenu index="4" class="menu">
<template slot="title" >音乐生活</template>
    <el-menu-item index="4-1" class="el-menu-demo"><img src="/static/img/h6.png"/>
    <p>HUAWEI Sound音箱 ¥999</p>
     </el-menu-item>
    </el-submenu>
    <el-submenu index="5" class="menu">
<template slot="title">电脑系列</template>
    <el-menu-item index="5-1" class="el-menu-demo"><img src="/static/img/h2.png"/>
    <p>荣耀猎人游戏本V7系列 ¥7499</p>
    </el-menu-item>
    </el-submenu>
     <el-submenu index="6" class="menu">
<template slot="title">平板系列</template>
    <el-menu-item index="6-1" class="el-menu-demo"><img src="/static/img/h3.png"/>
    <p>HUAWEI MatePAd 10.4 ¥3199</p>
    </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
    methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
}
</script>

<style  scoped>

.menu{
  width:200px;
  margin-left:40px;
}
.el-menu-demo{
  width:250px;
  min-height:200px;
}
</style>