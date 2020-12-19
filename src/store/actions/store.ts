import { ActionContext } from 'vuex'
import {SET_STORES} from '@/store/mutations/mutationTypes'
import {getStores, getStore} from '@/apis/store'


export default {
    async getStoresAction({ commit } : ActionContext<IState, IState>){
        const data: Partial<IStore>[] = await getStores()
        commit(SET_STORES, data)
        return data
    },
    async getStoreAction({ commit } : ActionContext<IState, IState>, id: string){
        const data: IStore = await getStore(id)
        return data
    }
}
