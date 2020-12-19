<template>
  <view class="home-page">
    <!--    <nav-header />-->
    <view class="content">
      <custom-scroll-view :load-list="getCoupons" v-if="profile">
        <view class="coupon-list">
          <!-- 左侧显示略缩图、图标 -->
          <coupon-item
            v-for="coupon in coupons"
            :key="coupon.id"
            :coupon="coupon"
            :on-item-click="onCouponClick"
          />
        </view>
      </custom-scroll-view>
      <login />
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import login from '@/components/login/index.vue'
import coupon from '@/components/coupon-item/index.vue'
import scrollView from '@/components/custom-scroll-view/index.vue'
export default Vue.extend({
	components:{
		login,
        'coupon-item': coupon,
        'custom-scroll-view': scrollView
	},
    data(){
        return {
            title: 'Hello',
            triggered: false,
            refreshing: false,
        }
    },
   onShareAppMessage(res) { //发送给朋友
    return {
      title: '车优惠券首页',
    }
  },
    mounted(){
      // this.getCoupons().then(data => {
      //   console.log(data)
      // })
    },
  onHide(){
    console.log('I am hided')
  },
    methods: {
      ...mapActions(
              {
                getCoupons : 'getCouponsAction'
              }
      ),
      onCouponClick(id: string){
        uni.navigateTo({
          url: `/pages/coupon/detail/index?id=${id}`
        })
      },
    },
    computed: {
	  ...mapState(['coupons', 'profile']),
    }
})
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
