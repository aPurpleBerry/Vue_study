import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const actions = {
  jia(context,value) {
    console.log('actions中的jia被调用了',context,value);
    context.commit('JIA',value) // 提交
    // 开发技巧 JIA写大写
  },

  // jian(context,value) {
  //   context.commit('JIAN',value)
  // },
  // 没有业务逻辑 在组件中可以直接调用 mutations
  
  jiaOdd(context,value) {
    if(context.state.sum % 2){
      context.commit('JIA',value) // 这里不需要多写一个 JIAODD
    }
  },
  jiaWait(context,value) {
    setTimeout(()=>{
      context.commit('JIA',value) 
    },500)
  }
}

const mutations= {
  // 开发技巧 JIA写大写
  JIA(state, value){
    console.log('mutation中的JIA');
    state.sum += value
    console.log(state.sum );
  },
  JIAN(state,value) {
    state.sum -= value
  }
}

const state = {
  sum:0 //当前的和
}

export default new Vuex.Store({
  actions,
  mutations,
  state
})
