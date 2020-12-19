<template>
  <scroll-view
    scroll-y
    class="scroll-view"
    refresher-enabled="true"
    refresher-threshold="60"
    :refresher-triggered="triggered"
    @refresherpulling="onPulling"
    @refresherrefresh="onRefresh"
    @refresherrestore="onRestore"
    @refresherabort="onAbort"
    @scrolltolower="throttledScrollToBottom"
  >
    <slot />
    <view style="text-align: center">
        <uni-load-more
                v-if="current !== 0 && current >= allPages"
                status="noMore"
        />
      <uni-load-more
        v-else-if="loading"
        status="loading"
      />

    </view>
  </scroll-view>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {DEFAULT_PAGE_SIZE, throttle} from '@/utils'
    export default Vue.extend({
        props:{
            loadList: Function
        },
        data(){
            return {
                triggered: false,
                current: 0,
                allPages: 0,
                size: DEFAULT_PAGE_SIZE,
                total: 0,
                loading: false
            }
        },
        mounted(){
            this.triggered = true
            this.$nextTick(()=>{
                setTimeout(()=>{
                    this.loadList({ current: 1, size: 8, total: 8 }).then(data=>{
                        uni.showToast({
                            title: '加载完成'
                        })
                        this.triggered = false
                        this.current = data.current
                        this.total = data.total
                        this.allPages = data.total % DEFAULT_PAGE_SIZE > 0 ? data.total / DEFAULT_PAGE_SIZE + 1 : data.total / DEFAULT_PAGE_SIZE
                    })
                },2000)
            })
        },
        onHide(){
            console.log('I am hided')
        },
        methods: {
            // onScroll(e: any){
            // },
            throttledScrollToBottom(e){
                throttle(this.onScrollToBottom(e), 200)
            },
            onScrollToBottom(e: any){
                if(this.current >= this.allPages) return
                this.loading = true
                setTimeout(()=>{
                    this.loadList({current: this.current + 1, size: this.size}).then(data=>{
                        this.current = data.current
                        this.loading = false
                    })
                },1000)
            },
            onPulling(e) {
                console.log('下拉中', e)
            },
            onRefresh() {
                if(this.triggered) return
                this.triggered = true
                this.$nextTick(()=>{
                    setTimeout(()=>{
                        this.loadList({ current: 1, size: this.size }).then(data=>{
                            uni.showToast({
                                title: '数据已刷新'
                            })
                            this.current = data.current
                            this.total = data.total
                            this.allPages = data.total % DEFAULT_PAGE_SIZE > 0 ? data.total / DEFAULT_PAGE_SIZE + 1 : data.total / DEFAULT_PAGE_SIZE
                            this.loading = false
                            this.triggered = false

                        })
                    }, 1000)
                })
            },
            reset(){
              this.current = 0
              this.allPages = 0
              this.total = 0
            },
            onRestore() {
                console.log('重制')
            },
            onAbort() {
                console.log('onAbort')
            }
        },
    })
</script>

<style scoped lang="scss">
    @import './index.scss';
</style>
