import {request} from '@/utils'

export const login = (payload: ILoginPayload) => {
    const path = '/login'
    return request({
        url: path,
        method: 'POST',
        data: {
            ...payload
        }
    })
}


export const getProfile = () => {
    const path = '/profile'
    return request({
        url: path,
        method: 'GET',
    })
}


export const updateProfile = (payload: IUpdateProfilePayload) => {
    const path = '/profile'
    return request({
        url: path,
        method: 'POST',
        data: payload
    })
}
