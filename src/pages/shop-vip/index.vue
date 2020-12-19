<template>
  <view class="content">
    <uni-grid
      :column="3"
      :highlight="false"
    >
      <uni-grid-item
        v-for="shop in shops"
        :key="shop.imageUrl"
      >
        <view class="image-view">
          <image
            class="image"
            :src="shop.imageUrl"
          />
        </view>
      </uni-grid-item>
    </uni-grid>
    <login />
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import { vipShops } from '@/utils'
import login from '@/components/login/index.vue'
export default Vue.extend({
  components:{
    login,
  },
    data() {
      return {
         shops: vipShops
      }
    },

  onShareAppMessage(res) { //发送给朋友
    return {
      title: '车商列表',
    }
  }
})
</script>

<style scoped lang="scss">
    @import './index.scss';


</style>

