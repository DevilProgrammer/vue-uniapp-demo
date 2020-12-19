import {request} from '@/utils'
import couponIcon from '@/static/images/pages/ad1.jpg'
import storeIcon from '@/static/images/pages/ad1.jpg'



const mockCoupon: ICoupon = {
    id: '1',
    name: '洗车券',
    icon: couponIcon,
    abstract: '该洗车券很实惠，很牛逼',
    notice: '部分商家不可用，节假日不可用',
    validStartTime: '2020-01-21',
    validEndTime: '2021-01-20',
    status: 'AVAILABLE',
    quota: 10,
    unclaimedCount: 10,
    description: '该洗车券很实惠，很牛逼该洗车券很实惠，很牛逼该洗车券很实惠，很牛逼',
    issuerID: '123213',
    validType: 1,
    validDays: 1,
    claimedCount: 0,
    unconsumedCount: 10,
    consumedCount: 0,
    tags: [],
    scopeStores: [{
        id: '1',
        name: '上汽集团',
        profilePicUrl : storeIcon,
        abstract: '该洗车券很实惠，很牛逼',
        status: 'active',
        couponsOnlineAndUnclaimedQuantity: 10,
        address: '上海市浦东新区沈家弄路901弄',
        longitude: '121.545564',
        latitude: '31.237638',
        airLineDistance: 100
    },
        {
            id: '2',
            name: '上汽集团',
            profilePicUrl : storeIcon,
            abstract: '该洗车券很实惠，很牛逼',
            status: 'active',
            couponsOnlineAndUnclaimedQuantity: 10,
            address: '上海市浦东新区沈家弄路901弄',
            longitude: '121.545564',
            latitude: '31.237638',
            airLineDistance: 100
        },
        {
            id: '3',
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
    ]
 }





export const getCoupons = (option: IBaseOption = {current: 1, size: 8}): Promise<ICouponsResponse> => {
    const path = '/coupons'
    return new Promise(resolve => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        resolve({
            data: Array(option.size).join(',').split(',').map((_, index) => {
                const { current, size } = option
                const id = String(current * size + index)
                return {
                    id,
                    name: `洗车券${id}`,
                    icon: couponIcon,
                    abstract: '该洗车券很实惠，很牛逼, 部分商家不可用，节假日不可用',
                    notice: '部分商家不可用，节假日不可用',
                    validStartTime: '2020-01-21',
                    validEndTime: '2021-01-20',
                    status: 'AVAILABLE',
                    quota: 10,
                    unclaimedCount: 9
                }
            }),
            current: option.current,
            total: 30
        })
    })
}

export const getCoupon = (id: string): Promise<ICoupon> => {
    return new Promise(resolve => {
        resolve(mockCoupon)
    })
}


export const getMyCoupons = (): Promise<Partial<ICoupon>[]> => {
    const path = '/coupons/my'
    return new Promise(resolve => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        resolve(Array(10).join(1).split(1).map((_, index) => {
            return {
                id: String(index),
                name: '洗车券',
                icon: couponIcon,
                abstract: '该洗车券很实惠，很牛逼, 部分商家不可用，节假日不可用',
                notice: '部分商家不可用，节假日不可用',
                validStartTime: '2020-01-21',
                validEndTime: '2021-01-20',
                status: 'AVAILABLE',
                quota: 10
            }
        }))
    })
}

export const getMyCoupon = (id: string): Promise<ICoupon> => {
    return new Promise(resolve => {
        resolve(mockCoupon)
    })
}

