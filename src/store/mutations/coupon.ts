import {SET_COUPONS, SET_MORE_COUPONS, SET_MY_COUPONS} from '@/store/mutations/mutationTypes'

export default {
    [SET_COUPONS](state: IState, coupons: ICoupon[]){
        state.coupons = coupons
    },
    [SET_MORE_COUPONS](state: IState, coupons: ICoupon[]){
        state.coupons = state.coupons.concat(coupons)
    },
    [SET_MY_COUPONS](state: IState, coupons: Partial<ICoupon>[]){
        state.myCoupons = coupons
    },
}
