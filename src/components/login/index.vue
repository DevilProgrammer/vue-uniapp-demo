<template>
  <view>
    <!-- https://ext.dcloud.net.cn/plugin?id=329  -->
    <uni-popup
      ref="popup"
      type="center"
      mask-click="false"
    >
      <view class="modal">
        <view class="title">
          未登录
        </view>
        <view class="content">
          您未登录，需要登录后才能继续
        </view>
        <view class="action">
          <navigator
            open-type="exit"
            target="miniProgram"
            version="develop"
            class="navigator"
            hover-class="none"
          >
            <button class="cancel">
              取消
            </button>
          </navigator>
          <view class="divider" />
          <button
            open-type="getUserInfo"
            class="confirm"
            @getuserinfo="handleGetUserInfo"
          >
            登入
          </button>
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<script lang="ts">
    import Vue from 'vue'
	import { mapState, mapActions } from 'vuex'
    import { login } from '@/utils'
    export default Vue.extend({
        data() {
            return {
            }
        },
        mounted(): void {
          const popup:any = this.$refs.popup
          if(!this.profile) {
            popup.open()
          }
        },
      updated(): void {
          const popup:any = this.$refs.popup
          this.$nextTick(()=>{
            if(!this.profile){
              popup.open()
            }else{
              popup.close()
            }
          })
        },
      methods: {
			...mapActions(['loginAction', 'getLocalProfileAction']),
			async handleGetUserInfo(res: any){
				console.log(res)
				const { detail: { encryptedData, iv} } = res
                if(!encryptedData) return
                const code = await login()
				encryptedData && this.loginAction({encryptedData, iv, code})
                this.getLocalProfileAction(res.detail.userInfo)
                // set to local Storage
                uni.setStorageSync('profile', JSON.stringify(res.detail.userInfo))
			 	// close popup
				const popup:any = this.$refs.popup
				popup.close()
			},
			closePopup(){
			    // can't close popup window
				const popup:any = this.$refs.popup
				popup.close()
			}
        },

		computed: {
			...mapState(['accessToken', 'profile'])
		}
    })
</script>

<style scoped lang="scss">
    @import './index.scss';
</style>
