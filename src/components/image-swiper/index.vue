<template>
    <view class="content">
        <swiper-dot :info="items" :current="current" :mode="mode" :dots-styles="dotsStyles" field="content">
            <swiper class="swiper-box" @change="change">
                <swiper-item v-for="(item, index) in items" :key="index">
                    <view :class="item.colorClass" class="swiper-item">
                        <image class="image" :src="item.url" mode="aspectFill" />
                    </view>
                </swiper-item>
            </swiper>
        </swiper-dot>
    </view>
</template>

<script lang="ts">
    import swiperDot from '@/components/image-swiper/swiper-dot.vue'
    import Vue, { PropType } from 'vue'
    export default Vue.extend({
        components: {
            swiperDot
        },
        props: {
            items: {
                type: Array
            }
        },
        data() {
            return {
                dotStyle: [{
                    backgroundColor: 'rgba(0, 0, 0, .3)',
                    border: '1px rgba(0, 0, 0, .3) solid',
                    color: '#fff',
                    selectedBackgroundColor: 'rgba(0, 0, 0, .9)',
                    selectedBorder: '1px rgba(0, 0, 0, .9) solid'
                },
                    {
                        backgroundColor: 'rgba(255, 90, 95,0.3)',
                        border: '1px rgba(255, 90, 95,0.3) solid',
                        color: '#fff',
                        selectedBackgroundColor: 'rgba(255, 90, 95,0.9)',
                        selectedBorder: '1px rgba(255, 90, 95,0.9) solid'
                    },
                    {
                        backgroundColor: 'rgba(83, 200, 249,0.3)',
                        border: '1px rgba(83, 200, 249,0.3) solid',
                        color: '#fff',
                        selectedBackgroundColor: 'rgba(83, 200, 249,0.9)',
                        selectedBorder: '1px rgba(83, 200, 249,0.9) solid'
                    }
                ],
                modeIndex: -1,
                styleIndex: -1,
                current: 0,
                mode: 'default',
                dotsStyles: {}
            }
        },
        mounted() {
            console.log(this.items)
        },
        methods: {
            change(e: any) {
                this.current = e.detail.current
            },
        }
    })
</script>

<style lang="scss" scoped>
    @import './index.scss';
</style>
