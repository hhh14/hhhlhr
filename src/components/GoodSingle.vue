<!--单独商品-->
    <template>
    <el-card  class="Contain" shadow="hover">
     <div class="ContainContent">
            <router-link :to="geturl()"><img :src="this.gooditem.pict1" alt=""></router-link>
            <p class="font0">{{this.gooditem.title}}</p>
            <p class="font">{{this.gooditem.price}}</p>
            <p class="font1">{{this.gooditem.detail}}</p>
            </div>
    </el-card>
</template>

<script>
export default {
    props:["goodid"],
    data(){
        return {
            gooditem:{},
        }
    },
created(){
     // 获取本地JSON文件
        axios.get("static/goodlist.json").then((res)=>{
        this.gooditem = res.data.goods[this.goodid-1];
      })
  },
  methods:{
    geturl(){
        return "/GoodDetail"+(this.goodid-1);
    },
    gettitle(){
        return this.gooditem.title;
    }
  }
}
</script>

<style scoped>
.Contain{
    width: 230px;
    height: 400px;
    margin-right: 10px;
    margin-bottom: 10px;
    display: inline-block;
}
.ContainContent img {
    width: 220px;
    height: 220px;
}
.font{
    color:lightgray;
}
.font1{
    color:rgb(82, 12, 12)
}
.font0{ 
    white-space:nowrap;
    overflow:hidden;
}
</style>

