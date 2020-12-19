<template>
    <view class="panel">
     <view class="header">
         <view class="title">{{title}}</view>
         <view class="extra" @click="onClick">{{extra}}</view>
     </view>
      <view class="content">
          <slot></slot>
      </view>
    </view>
</template>

<script lang="ts">
    import Vue, { PropType } from 'vue'

    export default Vue.extend({
        props: {
            title: String,
            extra: String,
            onClick: Function
        },
        data() {
            return {
            }
        },
        methods: {
        }
    })
</script>

<style scoped lang="scss">
    @import './index.scss';
</style>
