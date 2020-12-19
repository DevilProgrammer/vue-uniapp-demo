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
            <store-item
              v-for="store in stores"
              :key="store.id"
              :store="store"
              :on-item-click="onItemClick"
            />
          </view>
        </scroll-view>
      </swiper-item>
    </swiper>
    <login />
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import tabs from '@/components/tabs/index.vue'
import storeItem from '@/components/store-item/index.vue'
import login from '@/components/login/index.vue'
export default Vue.extend({
    components:{
        login,
        'store-item': storeItem,
         tabs
    },
    data() {
      return {
        tabBars:['您附近的商家','所有的商家'],
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
        this.getStores().then(data => {
            console.log(data)
        })
        console.log(this.stores)
    },
    methods: {
        ...mapActions(
            {
                getStores : 'getStoresAction'
            }
        ),
      onItemClick(id: string){
        uni.navigateTo({
          url: `/pages/shop/detail/index?id=${id}`
        })
      },
      tabChange(e: any){
        this.tabCurrentIndex = e

      },
      changeCurrent(e: any){
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
        ...mapState(['stores'])
    }
})
</script>

<style scoped lang="scss">
    @import './index.scss';
</style>

