<template>
    <uni-nav-bar fixed class="nav-header">
        <view><uni-search-bar placeholder="搜索商铺，券"  :radius="100" @confirm="search" cancelButton="false"></uni-search-bar></view>
        <view slot="left"></view>
        <view slot="right"><uni-icons type="scan" size="20"></uni-icons></view>
    </uni-nav-bar>
</template>

<script lang="ts">
    import Vue, { PropType } from 'vue'

    export default Vue.extend({
        props: {},
        data() {
            return {}
        },
        methods: {
        }
    })
</script>

<style scoped lang="scss">
    @import './index.scss';
</style>
