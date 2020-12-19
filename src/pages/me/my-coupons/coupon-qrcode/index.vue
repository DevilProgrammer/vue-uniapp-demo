<template>
  <view class="coupon">
    <view class="section">
        <view class="container">
            <view class="title">
              {{ couponDetail.name }}
            </view>
            <view class="valid-period">
              有效期: {{ couponDetail.validStartTime }} ~ {{ couponDetail.validEndTime }}
            </view>
            <view
              v-if="couponDetail.unclaimedCount"
              class="unclaimed-amount"
            >
              剩余数量: {{ couponDetail.unclaimedCount }}
            </view>
          </view>
      <view class="divider-view"><view class="divider"></view></view>
      <view class="qr-code-view">
        <image class="qr-code" v-if="image" :src="image" />
      </view>
    </view>
  </view>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { mapActions } from 'vuex'
    import { createQrCodeImg } from '@/utils/wxqrcode.js'
    export default Vue.extend({
        components:{
        },
        data(): {couponDetail: ICoupon | undefined, image: string } {
            return {
                couponDetail: undefined,
                image: ''
            }
        },
        async mounted(){
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            const data = await this.getMyCouponAction(this.$mp.query)
            this.couponDetail = data
          const image = createQrCodeImg('H哈啊哈', {
            size: 100
          })
          this.image = image
        },
        methods: {
            ...mapActions(['getMyCouponAction']),
            onStoreItemClick(id: string){
                console.log(id)
                uni.navigateTo({
                    url: `/pages/shop/detail/index?id=${id}`
                })
            }
        },
    })
</script>

<style scoped lang="scss">
    @import './index.scss';
</style>
