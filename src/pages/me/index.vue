<template>
  <view class="content">
    <view class="header">
      <view class="profile-image">
        <uni-icons
                type="contact"
                size="60"
                color="rgb(143 143 148)"
                v-if="profile === undefined"
        />
        <image class="image" v-else :src="profile.avatarUrl" />
      </view>

      <view class="text"  v-if="profile === undefined">
        登入/注册
      </view>
      <view class="text" v-else>
        {{profile.nickName}}
      </view>
    </view>
    <uni-list>
      <uni-list-item
        v-for="menu in menuItems"
        :key="menu.title"
        clickable
        link
        :show-extra-icon="true"
        :extra-icon="menu.icon"
        :title="menu.title"
        @click="onMenuClick(menu.link)"
      />
    </uni-list>
    <login />
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import {PRIMARY_COLOR} from '@/utils'
import { mapState } from 'vuex'
import login from '@/components/login/index.vue'
export default Vue.extend({
  components:{
    login,
  },
    data() {
        return {
            menuItems:  [{
                title: '我的优惠券',
                icon: {color: PRIMARY_COLOR,size: '22',type: 'shop'},
                link: '/pages/me/my-coupons/index'
            },{
                title: '帮助与反馈',
                icon: {color: PRIMARY_COLOR,size: '22',type: 'compose'},
                link: ''
            },{
                title: '服务条款及隐私',
                icon: {color: PRIMARY_COLOR,size: '22',type: 'help'},
                link: ''
            },{
                title: '关于应用',
                icon: {color: PRIMARY_COLOR,size: '22',type: 'info'},
                link: ''
            }] as {title: string, icon: any, link: any}[]
        }
    },
    mounted(){
        console.log('mounted')
    },
    methods: {
        onMenuClick: function(pageUrl: string){
            if(!pageUrl) {
              uni.showToast({
                title: '敬请期待',
                icon: 'none'
              })
            }
            uni.navigateTo({
                url: pageUrl
            })
        }
    },
    computed:{
      ...mapState(['profile'])
    }
})
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
