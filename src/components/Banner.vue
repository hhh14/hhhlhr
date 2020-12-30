<!--轮播-->
<template>
  <div class="banner">
    <el-carousel :interval="3000" direction="horizontal" arrow="always" height="350px">
      <el-carousel-item v-for="item in image" :key="item.id">
        <img :src="item.idShow" class="img" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: [
        { id: 0, idShow: "/static/img/lun1.jpg" },
        { id: 1, idShow: "/static/img/lun2.jpg" },
        { id: 2, idShow: "/static/img/lun3.jpg" },
        { id: 3, idShow: "/static/img/lun4.jpg"},
        { id: 4, idShow: "/static/img/lun5.jpg" },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner {
  width: 1304px;
  margin-top: -20px;
  margin-left: -20px;
}
.el-carousel__item h3 {
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
</style>
