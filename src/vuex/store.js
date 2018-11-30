import Vue from 'vue';
import Vuex from 'vuex'

// 注册Vuex
Vue.use(Vuex);

// 状态
const state={
    useInfo:{}
}
console.log(state.useInfo)
// mutation 主要用来操作state
const mutations={
    SAVE_USEINFO(state,useInfo){
        console.log('函数触发！')
        state.useInfo=userInfo;
        console.log('赋值后的用户信息'+state.useInfo)
    }
}

// 创建store仓库暴露出去
export default new Vuex.Store({
    state,
    mutations
})