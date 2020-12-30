<template>
  <div class="center">
    <table cellpadding="0" cellspacing="0" class="mytable">
      <tr>
        <td>选择支付方式：</td>
        <td><input type="checkbox" />微信支付</td>
        <td><input type="checkbox" />支付宝支付</td>
        <td><input type="checkbox" />银行卡支付</td>
        <td><input type="checkbox" />白条</td>
      </tr>
      <tr>
        <td>选择快递公司：</td>
        <td><input type="checkbox" />顺丰</td>
        <td><input type="checkbox" />韵达</td>
        <td><input type="checkbox" />申通</td>
        <td><input type="checkbox" />中通</td>
      </tr>
    </table>

    <div class="goods">
      <div v-for="(item, index) in carts" :key="index">
        <el-card shadow="never">
          <div class="box">
            <div>
              <img :src="item['pict1']" alt="图片" width="100" height="100" />
            </div>
            <div class="text">
              <span>
                {{ item["title"] }}
              </span>
              <div>
                {{ item["price"] }}
              </div>
            </div>
          </div>
        </el-card>
        <el-divider />
      </div>
    </div>

    <br />
    <br />
    <div>
      <button class="btn" @click="goSuccess">点击购买</button>
      <!-- <button @click="getData()">输出</button> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      carts: this.$route.params.carts,
    };
  },
  methods: {
    goSuccess() {
      this.$router.push("/Success");
    },
    getData() {
      console.log(this.$route.params);
      console.log(this.carts);
    },
  },
  beforeCreate() {
    console.log(this.$route);
  },
};
</script>
<style scoped>
.goods {
  margin: 20px;
}

.mytable table {
  border: 1px solid black;
}
.mytable tr,
.mytable td {
  width: 160px;
  height: 40px;
  border: 1px solid black;
  padding: 0;
  text-align: center;
}

.center {
  width: 1200px;
  margin: 0 auto;
}

.box {
  display: flex;
  justify-content: space-around;
}

.text {
  width: 200px;
  overflow: hidden;
}
</style>