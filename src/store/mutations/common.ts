import {SET_ACCESS_TOKEN, SET_PROFILE} from '@/store/mutations/mutationTypes'

export default {
    [SET_ACCESS_TOKEN](state: IState, token: string){
        state.accessToken = token
    },
    [SET_PROFILE](state: IState, profile: IUser){
        state.profile = profile
    },
}
