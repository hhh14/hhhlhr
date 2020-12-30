import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import GoodCar from '@/components/GoodCar'
import GoodDetail from '@/components/GoodDetail'
import Buy from '@/components/Buy'
import BuySuccess from '@/components/BuySuccess'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/goodcar',
      component: GoodCar
    },
    {
      path: '/GoodDetail:id',
      component: GoodDetail
    }, {
      name: "buy",
      path: '/Buy',
      component: Buy
    }, {
      name: "success",
      path: '/Success',
      component: BuySuccess
    }
  ]
})