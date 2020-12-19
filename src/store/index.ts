import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import mutations from './mutations'
import actions from './actions'


Vue.use(Vuex)

const store = new Vuex.Store<IState>({
    state: {
      accessToken: uni.getStorageSync('ACCESS_TOKEN') || '',
      profile: undefined,
      coupons: [],
      stores: [],
      myCoupons: []
    },
    mutations,
    actions,
    getters:{},
    plugins: process.env.NODE_ENV === 'development' ? [createLogger({ collapsed: true })] : []
  })

  export default store
