import { ActionContext } from 'vuex'
import {SET_COUPONS, SET_MY_COUPONS, SET_MORE_COUPONS} from '@/store/mutations/mutationTypes'
import {getCoupon, getCoupons, getMyCoupons} from '@/apis/coupon'
import {COUPON_STATUS} from '@/utils'


export default {
    async getCouponsAction({ commit } : ActionContext<IState, IState>, options: ICouponOption = { current: 1, size: 8, status: COUPON_STATUS.ACTIVE }){
        const { data, current, total} = await getCoupons(options)
        //init fetch Coupon list
        if(options.current === 1){
            commit(SET_COUPONS, data)
        }else{
            commit(SET_MORE_COUPONS, data)
        }
        return { current, total }
    },
    async getCouponAction({ commit } : ActionContext<IState, IState>, id: string){
        const data: ICoupon = await getCoupon(id)
        return data
    },
    async getMyCouponsAction({ commit } : ActionContext<IState, IState>){
        const data: Partial<ICoupon>[] = await getMyCoupons()
        commit(SET_MY_COUPONS, data)
        return data
    },
    async getMyCouponAction({ commit } : ActionContext<IState, IState>, id: string){
        const data: ICoupon = await getCoupon(id)
        return data
    }
}
