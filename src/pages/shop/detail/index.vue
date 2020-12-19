<template>
  <view class="content">
    <image-swiper :items="items" />
    <view class="store-detail">
      <view class="left">
        <view class="title">
          {{storeDetail.name}}
        </view>
        <view class="business_interval">
          营业时间:  08:30 ~ 18:00
        </view>
        <view class="address">
          <text>浦东新区沈家弄路901弄</text>
          <text class="distance">
            距您100米
          </text>
        </view>
      </view>

      <view class="right">
        <uni-icons
          type="phone-filled"
          size="20"
          :color="primaryColor"
          @click="onPhoneClick"
        />
        <uni-icons
          type="navigate-filled"
          size="20"
          :color="primaryColor"
          @click="onNavClick"
        />
      </view>
    </view>
    <view class="available-coupons">
      <panel title="可用券列表">
        <scroll-view scroll-y class="scroll-view">
          <view class="coupon-list">
            <!-- 左侧显示略缩图、图标 -->
            <coupon-item
                    v-for="item in storeDetail.scopeCoupons"
                    :key="item.id"
                    :coupon="item"
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
import imageSwiper from '@/components/image-swiper/index.vue'
import coupon from '@/components/coupon-item/index.vue'
import panel from '@/components/panel/index.vue'
import { PRIMARY_COLOR } from '@/utils'
import image1 from '@/static/images/pages/ad1.jpg'
export default Vue.extend({
    components:{
        imageSwiper,
      'coupon-item': coupon,
      panel
    },
    data(): {storeDetail:IStore | undefined, title: string, items:any[], primaryColor: string}{
        return {
            title: 'Hello',
            items: [{
                colorClass: 'uni-bg-red',
                url: image1,
                // content: '内容 A'
            }],
            storeDetail: undefined,
            primaryColor: PRIMARY_COLOR
        }
    },
    async mounted(){
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        const data = await this.getStoreAction(this.$mp.query)
        this.storeDetail = data

    },
    methods: {
        ...mapActions(['getStoreAction']),
        onPhoneClick(){
          if(this.storeDetail === undefined) return
          uni.makePhoneCall({
             phoneNumber: this.storeDetail.contact,
             complete: (res)=>{
               console.log(res)
             }
          })
        },
       onNavClick(){
         if(this.storeDetail === undefined) return
         const { address, latitude, longitude, name } = this.storeDetail
         uni.openLocation({
           address,
           name,
           latitude: parseFloat(latitude),
           longitude: parseFloat(longitude),
           fail: (err)=>{
             console.log(err)
           }
         })
       }
    }
})
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
