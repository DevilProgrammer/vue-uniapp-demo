import { ActionContext } from 'vuex'
import {getProfile, login, updateProfile} from '@/apis/common'
import {SET_ACCESS_TOKEN, SET_PROFILE} from '@/store/mutations/mutationTypes'

export default {
     async loginAction({ commit } : ActionContext<IState, IState>, payload: ILoginPayload) {
          const data: any = await login(payload)
          commit(SET_ACCESS_TOKEN, data.accessToken)
     },
     async getProfileAction({ commit } : ActionContext<IState, IState>) {
          const profile:any = await getProfile()
          commit(SET_PROFILE, profile)
     },

     async getLocalProfileAction({ commit } : ActionContext<IState, IState>,user: IUser ) {
          commit(SET_PROFILE, user)
     },

     async updateProfileAction({ commit, dispatch } : ActionContext<IState, IState>, payload: IUpdateProfilePayload){
          await updateProfile(payload)
          await dispatch('getProfileAction')
     }
}
