<template>
    <view class="coupon-item" @click="onCardClick">
        <view class="left">
            <view class="coupon-icon">
                <image class="icon" :src="coupon.icon"></image>
            </view>
        </view>
        <view class="right">
            <view class="content">
                <view class="title">{{coupon.name}}  <text class="unclaimed-amount" v-if="coupon.unclaimedCount">剩余数量: {{coupon.unclaimedCount}}</text></view>
                <view class="desc">{{coupon.abstract}}</view>
                <view class="valid-period">有效期: {{coupon.validStartTime}} ~ {{coupon.validEndTime}}</view>
            </view>
            <view class="action">
                <view v-if="actionDisabled" class="coupon-action disable">{{actionText || '前往领取'}}</view>
                <view v-else class="coupon-action" @click="onCouponActionClick">{{actionText || '前往领取'}}</view>
            </view>
        </view>
    </view>
</template>

<script lang="ts">
    import Vue, { PropType } from 'vue'

    export default Vue.extend({
        props: {
            coupon: {
                type: Object as PropType<Partial<ICoupon>>
            },
            actionText: String,
            onItemClick: Function,
            onActionClick: Function,
            actionDisabled: Boolean
        },
        data() {
            return {}
        },
        methods: {
            onCardClick(e: Event){
                e.stopPropagation()
                this.onItemClick && this.onItemClick(this.coupon.id)
            },
            onCouponActionClick(e: Event){
                console.log(this.coupon.id)
                e.stopPropagation()
                this.onActionClick && this.onActionClick(this.coupon.id)
            }
        }
    })
</script>

<style scoped lang="scss">
    @import './index.scss';
</style>
