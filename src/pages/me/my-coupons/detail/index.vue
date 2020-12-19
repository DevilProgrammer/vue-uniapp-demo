<template>
  <view class="coupon">
    <view class="section">
      <panel title="基本信息">
        <view class="container">
          <view class="left">
            <view class="title">
              {{couponDetail.name}}
            </view>
            <view class="valid-period">有效期: {{couponDetail.validStartTime}} ~ {{couponDetail.validEndTime}}</view>
            <view v-if="couponDetail.unclaimedCount" class="unclaimed-amount">剩余数量: {{couponDetail.unclaimedCount}}</view>
          </view>
          <view class="right">
            <view class="coupon-action" @click="onActionClick(couponDetail.id)">立即使用</view>
          </view>
        </view>
      </panel>
      <panel title="使用规则">
        <view class="description">
          {{couponDetail.description}}
        </view>
      </panel>
    </view>

    <view class="section">
      <panel title="可用商家">
        <scroll-view
                scroll-y
                class="scroll-view"
        >
          <view class="store-list">
            <store-item
                    v-for="store in couponDetail.scopeStores"
                    :key="store.id"
                    :store="store"
                    :on-item-click="onStoreItemClick"
            />
          </view>
        </scroll-view>
      </panel>
    </view>

  </view>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { mapActions } from 'vuex'
    import panel from '@/components/panel/index.vue'
    import storeItem from '@/components/store-item/index.vue'
    export default Vue.extend({
       components:{
         panel,
         storeItem
       },
        data(): {couponDetail: ICoupon | undefined } {
            return {
              couponDetail: undefined
            }
        },
        async mounted(){
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        const data = await this.getMyCouponAction(this.$mp.query)
        this.couponDetail = data
      },
      methods: {
        ...mapActions(['getMyCouponAction']),
        onStoreItemClick(id: string){
           uni.navigateTo({
             url: `/pages/shop/detail/index?id=${id}`
           })
        },
        onActionClick(id: string){
          uni.navigateTo({
            url: `/pages/me/my-coupons/coupon-qrcode/index?id=${id}`
          })
        }
      },
    })
</script>

<style scoped lang="scss">
    @import './index.scss';
</style>
