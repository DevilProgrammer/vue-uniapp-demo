import {SET_STORES} from '@/store/mutations/mutationTypes'

export default {
    [SET_STORES](state: IState, stores: IStore[]){
        state.stores = stores
    },
}
