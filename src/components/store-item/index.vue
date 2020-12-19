<template>
  <view
    class="store-item"
    @click="storeCardClick(store.id)"
  >
    <view class="store-icon">
      <image
        class="icon"
        :src="store.profilePicUrl"
      />
    </view>
    <view class="content">
      <view class="title">
        {{ store.name }}
      </view>
      <view class="desc">
        {{ store.abstract }}
      </view>
      <view class="address-distance">
        <view class="address">
          {{ store.address }}
        </view>
        <view class="distance">
          距您{{ store.airLineDistance }}米
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
    import Vue, { PropType } from 'vue'

    export default Vue.extend({
        props: {
            store: {
                type: Object as PropType<Partial<IStore>>
            },
            onItemClick: {
               type: Function
            }
        },
        data() {
            return {}
        },
        methods: {
            storeCardClick: function(id: string){
              this.onItemClick(id)
            }
        }
    })
</script>

<style scoped lang="scss">
    @import './index.scss';
</style>
