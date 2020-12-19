<template>
    <view class="content">
        <tabs
                ref="tabs0"
                :tab-bars="tabBars"
                :tab-index="tabCurrentIndex"
                :center="true"
                :scale="1.2"
                select-color="#3498db"
                @tabChange="tabChange"
        />
        <swiper
                class="swiper"
                :duration="300"
                :current="tabCurrentIndex"
                @transition="transition"
                @change="changeCurrent"
                @animationfinish="animationfinish"
        >
            <swiper-item
                    v-for="(item,index) in tabBars"
                    :key="index"
            >
                <scroll-view
                        scroll-y
                        class="scroll-view"
                >
                    <view class="store-list">
                        <coupon-item
                                v-for="coupon in myCoupons"
                                :key="coupon.id"
                                :coupon="coupon"
                                :on-item-click="onItemClick"
                                action-text="立即使用"
                                :on-action-click="onActionClick"
                        />
                    </view>
                </scroll-view>
            </swiper-item>
        </swiper>
    </view>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { mapActions, mapState } from 'vuex'
    import tabs from '@/components/tabs/index.vue'
    import couponItem from '@/components/coupon-item/index.vue'
    export default Vue.extend({
        components:{
            'coupon-item': couponItem,
            tabs
        },
        data() {
            return {
                tabBars:['可用券','已过期券', '已使用券'],
                tabCurrentIndex: -1,
                sysWidth:0,
                source:'touch',
                firstTouch:false
            }
        },

        onShareAppMessage(res) { //发送给朋友
            return {
                title: '车商列表',
            }
        },
        mounted(){
            this.tabCurrentIndex = 0
            this.getMyCoupons().then(data => {
                console.log(data)
            })
        },
        methods: {
            ...mapActions(
                {
                    getMyCoupons: 'getMyCouponsAction'
                }
            ),
            onItemClick(id: string){
                uni.navigateTo({
                    url: `/pages/me/my-coupons/detail/index?id=${id}`
                })
            },
            onActionClick(id: string){
                uni.navigateTo({
                    url: `/pages/me/my-coupons/coupon-qrcode/index?id=${id}`
                })
            },
            tabChange(e: any){
                // console.log(e)
                this.tabCurrentIndex = e
            },
            changeCurrent(e: any){
                console.log(e.detail)
                this.source = e.detail.source

            },
            transition(e: any){
                if(this.source==''){

                }else{
                    if(this.firstTouch){
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        //@ts-ignore
                        this.$refs.tabs0.move(e.detail.dx-this.tabCurrentIndex*this.sysWidth)
                    }else{
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        //@ts-ignore
                        this.$refs.tabs0.move(e.detail.dx)
                    }
                }
            },
            animationfinish(e: any){
                this.firstTouch = false
                this.source = 'touch'
                this.tabCurrentIndex = e.detail.current
            }
        },
        computed: {
            ...mapState(['myCoupons'])
        }
    })
</script>

<style scoped lang="scss">
    @import './index.scss';
</style>

