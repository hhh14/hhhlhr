<!--登录表单-->
<template>
  <div class="body">
    <img class="im" src="/static/img/login2.jpg" />
    <div class="logo">
      <img class="im2" src="/static/img/login.png" />
    </div>
    <!--:rules绑定验证规则 :model绑定数据  prop 属性设置为需校验的字段名--->
    <div class="login-form">
      <!-- :model="loginForm"表单数据绑定loginForm  ref获取表单引用实例对象--->
      <i class="el-icon-user-solid"><span>华为账号登录</span></i>
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginFormru"
        label-width="80px"
        class="form"
        status-icon
      >
        <el-form-item label="用户账号" prop="name">
          <el-input
            placeholder="请输入账号"
            prefix-icon="el-icon-s-custom"
            v-model="loginForm.name"
          ></el-input>
        </el-form-item>
        <el-form-item label="账号密码" prop="password">
          <el-input
            placeholder="请输入密码"
            prefix-icon="el-icon-unlock"
            v-model="loginForm.password"
            show-password
          ></el-input>
          <!--show-password切换显示隐藏密码框-->
        </el-form-item>
        <el-form-item class="btn">
          <el-button type="primary" plain @click="login">登录</el-button>
          <el-button type="danger" plain><router-link to="/register">注册</router-link></el-button>
        </el-form-item>
        <span href="#" class="el-icon-chat-round">微信登录</span>
        <span href="#" class="el-icon-phone">手机号登录</span>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        name: "",
        password: "",
      },
      loginFormru: {
        name: [
          { required: true, message: "请输入账号名称", trigger: "blur" },
          { min: 2, max: 10, message: "长度在2到10个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 10, message: "长度在6到10个字符", trigger: "blur" },
        ],
      },
      DataForm: []
    };
  },
  //调取信息
   mounted() {
     this.DataForm = JSON.parse(localStorage.getItem("dataList"));
     console.log(this.DataForm);
  },
  //验证信息
  methods: {
    login() {
      let flag = false
      for (let i = 0; i < this.DataForm.length; i++) {
        if (this.loginForm.name === this.DataForm[i].name && this.loginForm.password === this.DataForm[i].password) {
         flag = true;
         let user = this.DataForm[i]
         window.confirm('登录成功，进入首页')
         this.$store.commit("setNowUser",user)
         this.$router.push('/')
         break;
        }
      }
      if (!flag) {
        alert('登录失败');
      }
    },
    //重置为初值，移除校验结果
    resetForm() {
      this.$refs.loginForm.resetFields();
    },
  },
};
</script>


<style scoped>
.body {
  height: 650px;
  background-color: white;
}
.im {
  margin-left: -600px;
  margin-top: 120px;
  position: absolute;
}
.logo {
  margin-top: 70px;
  margin-left: 400px;
}
.im2 {
  height: 150px;
  width: 200px;
  border: 1px solid White;
  border-radius: 50%; /*图片轮廓变圆形*/
}
.el-icon-user-solid {
  margin-top: 80px;
}
.login-form {
  height: 400px;
  width: 600px;
  margin: auto;
  margin-left: 650px;
  margin-top: -70px;
  background-color: rgba(247, 242, 242, 0.986);
}
.form {
  margin-top: 70px;
  margin-left: 150px;
  position: absolute;
}
.btn {
  display: flex;
 
}
.el-icon-chat-round,
.el-icon-phone {
  margin-left: 10px;
  color: gray;
}
.el-icon-chat-round:hover,
.el-icon-phone:hover {
  color: lightblue;
}
</style>

