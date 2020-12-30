import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)
 
const state = {
  NowUser:"",
} 
const mutations = {
  setNowUser(state,user){
    state.NowUser=user;
  }
}
export default new Vuex.Store({
  state,
  mutations
});