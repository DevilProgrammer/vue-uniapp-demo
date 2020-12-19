import {request} from '@/utils'
import storeIcon from '@/static/images/pages/ad1.jpg'

const mockStore: IStore = {
    id: '1',
    name: '上汽集团',
    profilePicUrl : storeIcon,
    abstract: '该洗车券很实惠，很牛逼',
    description: '该洗车券很实惠，很牛逼该洗车券很实惠，很牛逼该洗车券很实惠，很牛逼',
    status: 'active',
    couponsOnlineAndUnclaimedQuantity: 10,
    couponsOnlineQuantity: 10,
    couponsTypesNum: 10,
    address: '上海市浦东新区沈家弄路901弄',
    province: '上海市',
    city: '上海市',
    district: '浦东新区',
    street: '沈家弄路901弄',
    tags: [],
    longitude: '121.545564',
    latitude: '31.237638',
    airLineDistance: 100,
    contact: '18521556899',
    scopeCoupons:[
        {
            id: '1',
            name: '洗车券',
            icon: storeIcon,
            abstract: '该洗车券很实惠，很牛逼, 部分商家不可用，节假日不可用',
            notice: '部分商家不可用，节假日不可用',
            validStartTime: '2020-01-21',
            validEndTime: '2021-01-20',
            status: 'AVAILABLE',
            quota: 10,
            unclaimedCount: 9
        },
        {
            id: '2',
            name: '洗车券',
            icon: storeIcon,
            abstract: '该洗车券很实惠，很牛逼, 部分商家不可用，节假日不可用',
            notice: '部分商家不可用，节假日不可用',
            validStartTime: '2020-01-21',
            validEndTime: '2021-01-20',
            status: 'AVAILABLE',
            quota: 10,
            unclaimedCount: 9
        }
    ]
}

export const getStores = (option: {page: number, perPage: number} = {page: 1, perPage: 8}): Promise<Partial<IStore>[]> => {
    const path = '/stores'
    // return request({
    //     url: path,
    //     method: 'GET',
    // })
    return new Promise(resolve => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        resolve(Array(20).join(1).split(1).map((_, index) => {
            return {
                id: String(index),
                name: '上汽集团',
                profilePicUrl : storeIcon,
                abstract: '该洗车券很实惠，很牛逼',
                status: 'active',
                couponsOnlineAndUnclaimedQuantity: 10,
                address: '上海市浦东新区沈家弄路901弄',
                longitude: '121.545564',
                latitude: '31.237638',
                airLineDistance: 100
            }
        }))
    })
}

export const getStore = (id: string): Promise<IStore> => {
    return new Promise(resolve => {
        resolve(mockStore)
    })
}
