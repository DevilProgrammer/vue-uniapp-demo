import Vue from 'vue'
import App from './App.vue'
import store from './store'
import {login} from '@/utils'

Vue.config.productionTip = false
//把vuex定义成全局组件
Vue.prototype.$store = store

const app = new Vue({
    ...App,
    // 挂载
    store,
    async mounted(){
        // execute login when app is loaded
        const code = await login()
        try{
            await store.dispatch('loginAction', code)
        }catch(e){
            console.error(e)
        }
        const profile = uni.getStorageSync('profile')
        console.log('profile',profile)
        if(profile){
            await store.dispatch('getLocalProfileAction', JSON.parse(profile))
        }
    }
})


app.$mount()
