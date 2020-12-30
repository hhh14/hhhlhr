<!--商品详细介绍-->
<template>
  <div>
    <div class="content">
      <div class="contentImg">
        <vue-photo-zoom-pro :url="gooditem.pict1"></vue-photo-zoom-pro
        ><!--vue-photo-zoom-pro放大镜-->
      </div>
      <p class="font">{{ this.gooditem.title }}</p>
      <div class="font2">
        <p>价格：{{ this.gooditem.price }}</p>
        <p>促销商品：购买即送商城积分，积分可抵现</p>
      </div>
      <el-form ref="form" :model="form" label-width="120px" class="goodForm">
        <el-form-item label="服务说明">
          <el-select v-model="form.region" placeholder="请选择配送地址">
            <el-option label="江苏" value="suzhou"></el-option>
            <el-option label="上海" value="shanghai"></el-option>
            <el-option label="北京" value="beijing"></el-option>
            <el-option label="广东" value="guangzhou"></el-option>
            <el-option label="湖南" value="changsha"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="保障服务">
          <el-radio-group v-model="form.resource">
            <el-radio label="服务保1年"></el-radio>
            <el-radio label="服务保半年"></el-radio>
          </el-radio-group>
        </el-form-item>
        <div class="Num">
          <span class="font1">商品数量:</span>
          <button @click="sub()">-</button>
          {{ count }}
          <button @click="add()">+</button>
        </div>
        <el-form-item class="el-form-item__content">
          <el-button type="warning" @click="goShopCar()">加入购物车</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="main">
      <el-tabs type="border-card"
        ><!--Tabs标签页-->
        <el-tab-pane label="企业信誉"
          ><img src="/static/img/f1.png"
        /></el-tab-pane>
        <el-tab-pane label="退货详情"
          ><img src="/static/img/f2.png"
        /></el-tab-pane>
        <el-tab-pane label="全国配送"
          ><img src="/static/img/f3.png"
        /></el-tab-pane>
        <el-tab-pane label="详情说明"
          ><img src="/static/img/f4.png"
        /></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  props: ["gid"],

  created() {
    axios.get("static/goodlist.json").then((res) => {
      console.log(this.$route.params.id);
      this.gooditem = res.data.goods[this.$route.params.id];
    });
  },
  data() {
    return {
      id: this.$route.params.id, //获取id
      gooditem: "",
      form: {
        name: "",
        region: "",
        desc: "",
      },
      goodsList: [],
      carts: [],
      count: 1,
    };
  },
  methods: {
    gettitle() {
      if (this.gooditem != "") {
        return this.gooditem;
      }
    },
    getprice() {
      if (this.gooditem != "") {
        return this.gooditem.price;
      }
    },
    getGood() {
      let goods = JSON.parse(localStorage.getItem("goods"));
      let good;
      goods.forEach((item) => {
        if (item["gid"] == this.$route.params.id) {
          good = item;
          localStorage.setItem("shoppingcar", JSON.stringify(item["gid"]));
        }
      });
      return good;
    },
    goShopCar() {
      console.log(this.getGood());

      let goods = this.getGood();
      goods["count"] = this.count;

      console.log(goods);

      // console.log("hello")
      // 加入购物车
      if (localStorage.getItem("carts") === null) {
        this.$axios({
          url: "/static/d-goods.json",
        }).then((res) => {
          let data = res.data;
          // console.log(data);
          data.push(goods);
          localStorage.setItem("carts", JSON.stringify(data));
        });
      } else {
        let carts = JSON.parse(localStorage.getItem("carts"));
        // let goods = this.getGood();
        carts.push(goods);
        localStorage.setItem("carts", JSON.stringify(carts));
      }
      this.$router.push("/GoodCar");
    },

    add() {
      this.count++;
    },
    sub() {
      if (this.count !== 1) {
        this.count--;
      }
    },
  },
  computed: {
    getGoodsList() {
      return this.goodsList;
    },
  },
  beforeCreate() {
    this.$axios({
      url: "/static/goodlist.json",
    })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("goods", JSON.stringify(res.data.goods));
        this.goodsList = res.data.goods;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  mounted() {
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0);
    });
  },
};
</script>


<style scoped>
.content {
  width: 1200px;
  height: 1000px;
  margin: auto;
}
.contentImg {
  width: 350px;
  height: 350px;
  margin-top: 100px;
  margin-left: 50px;
}
.font {
  margin-top: -400px;
  margin-left: 200px;
}
.font2 {
  width: 450px;
  height: 80px;
  background-color: rgb(250, 242, 242);
  margin-left: 500px;
  color: red;
  text-align: left;
  margin-top: 40px;
}
.goodForm {
  width: 400px;
  margin-left: 500px;
  margin-top: 50px;
}
.main {
  margin-top: -600px;
  position: absolute;
  margin-left: 250px;
  width: 1000px;
}
.font1 {
  size: 12px;
}
.Num {
  margin-left: 30px;
  top: 440px;
  position: absolute;
}
.font1 {
  color: rgb(243, 154, 21);
}
.el-form-item__content {
  width: 0px;
  margin-left: 90px;
}
</style>
