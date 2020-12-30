<!--侧边导航栏-->
<template>
  <el-menu mode="horizontal" @select="handleSelect" background-color="white" text-color="black" active-text-color="black">
    <el-submenu index="1">
      <template slot="title">商品分类</template>
      <el-submenu index="1-1">
        <template slot="title">手机</template>
        <el-menu-item href="#" index="1-1-1">HUAWEI Mate系列</el-menu-item>
        <el-menu-item href="#" index="1-1-2">荣耀V系列</el-menu-item>
        <el-menu-item href="#" index="1-1-3">华为畅想系利</el-menu-item>
        <el-menu-item href="#" index="1-1-3">荣耀X系列</el-menu-item>
        <el-menu-item href="#" index="1-1-3">荣耀Play系列</el-menu-item>
      </el-submenu>
      <el-submenu index="1-2">
        <template slot="title">笔记本</template>
        <el-menu-item href="#" index="1-2-1">华为MateBook系列</el-menu-item>
        <el-menu-item href="#" index="1-2-2">个人电脑包</el-menu-item>
        <el-menu-item href="#" index="1-2-3">电脑配件</el-menu-item>
        <el-menu-item href="#" index="1-1-3">华为MateBook D系列</el-menu-item>
        <el-menu-item href="#" index="1-1-3">荣耀猎人游戏本系列</el-menu-item>
      </el-submenu>
      <el-submenu index="1-3">
        <template slot="title">智能家居</template>
        <el-menu-item href="#" index="1-3-1">智能路由</el-menu-item>
        <el-menu-item href="#" index="1-3-2">移动路由</el-menu-item>
        <el-menu-item href="#" index="1-4-3">智能音箱</el-menu-item>
        <el-menu-item href="#" index="1-1-3">智能存储</el-menu-item>
        <el-menu-item href="#" index="1-1-3">HinLink生态</el-menu-item>
      </el-submenu>
      <el-submenu index="1-4">
        <template slot="title">配件</template>
        <el-menu-item href="#" index="1-4-1">贴膜</el-menu-item>
        <el-menu-item href="#" index="1-4-2">保护套</el-menu-item>
        <el-menu-item href="#" index="1-4-3">自拍杆/支架</el-menu-item>
        <el-menu-item href="#" index="1-1-3">摄像头/镜头</el-menu-item>
        <el-menu-item href="#" index="1-1-3">生活周边</el-menu-item>
      </el-submenu>
      <el-submenu index="1-5">
        <template slot="title">智能穿戴</template>
        <el-menu-item href="#" index="1-5-1">儿童手表</el-menu-item>
        <el-menu-item href="#" index="1-5-2">智能手表</el-menu-item>
        <el-menu-item href="#" index="1-5-3">VR</el-menu-item>
        <el-menu-item href="#" index="1-1-3">智能手环</el-menu-item>
        <el-menu-item href="#" index="1-1-3">穿戴配件</el-menu-item>
      </el-submenu>
      <el-submenu index="1-6">
        <template slot="title">平板</template>
        <el-menu-item href="#" index="1-6-1">荣耀畅想系列</el-menu-item>
        <el-menu-item href="#" index="1-6-2">荣耀V系列</el-menu-item>
        <el-menu-item href="#" index="1-6-3">荣耀畅玩系列</el-menu-item>
        <el-menu-item href="#" index="1-1-3">荣耀数字系列</el-menu-item>
        <el-menu-item href="#" index="1-1-3">平板配件</el-menu-item>
      </el-submenu>
      <el-submenu index="1-7">
        <template slot="title">耳机音箱</template>
        <el-menu-item href="#" index="1-7-1">蓝牙音箱</el-menu-item>
        <el-menu-item href="#" index="1-7-2">智能眼镜</el-menu-item>
        <el-menu-item href="#" index="1-7-3">真无线耳机</el-menu-item>
        <el-menu-item href="#" index="1-1-3">蓝牙耳机</el-menu-item>
        <el-menu-item href="#" index="1-1-3">智能音箱</el-menu-item>
      </el-submenu>
      <el-submenu index="1-8">
        <template slot="title">增值服务 其他</template>
        <el-menu-item href="#" index="1-8-1">华为音乐卡</el-menu-item>
        <el-menu-item href="#" index="1-8-2">华为云空间</el-menu-item>
        <el-menu-item href="#" index="1-8-3">花币卡</el-menu-item>
        <el-menu-item href="#" index="1-1-3">AI计算平台</el-menu-item>
        <el-menu-item href="#" index="1-1-3">电池更换服务</el-menu-item>
      </el-submenu>
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
};
</script>

<style scoped>
</style>
