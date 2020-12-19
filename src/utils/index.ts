
export const request = (options: UniApp.RequestOptions) => {
    return new Promise((resolve, reject) => {
        uni.request({
            ...options,
            ...{
                header: {
                    Authorization: `bearer ${uni.getStorageSync('ACCESS_TOKEN')}`
                },
             url: API_ENDPOINT + options.url
            },
            success: (res) => {
                resolve(res.data)
            },
            fail: (res) => {
                reject(res.errMsg)
            }
           })
    })
}

export const COUPON_STATUS = {
    'ACTIVE': 'ACTIVE',
    'REDEEMED': 'REDEEMED',
    'EXPIRED': 'EXPIRED'
}

export const COUPON_STATUS_MAP ={
    [COUPON_STATUS.ACTIVE] : '可用',
    [COUPON_STATUS.REDEEMED]: '已使用',
    [COUPON_STATUS.EXPIRED]: '已过期'
}

export const login = () => {
    return new Promise((resolve, reject)=>{
        uni.login({
            complete:(res)=>{
                resolve(res.code)
            },
            fail: (err)=>{
                reject(err)
            }
        })
    }).then(data => data)
}

export const vipShops = [
    {
        imageUrl:  '/static/images/pages/ad1.jpg'
    },
    {
        imageUrl:  '/static/images/pages/ad1.jpg'
    },
    {
        imageUrl:  '/static/images/pages/ad1.jpg'
    },
    {
        imageUrl:  '/static/images/pages/ad1.jpg'
    },
    {
        imageUrl:  '/static/images/pages/ad1.jpg'
    },
    {
        imageUrl:  '/static/images/pages/ad1.jpg'
    },
    {
        imageUrl:  '/static/images/pages/ad1.jpg'
    },
    {
        imageUrl:  '/static/images/pages/ad1.jpg'
    }
]


export const API_ENDPOINT = 'https://www.xxx.com/'

export const PRIMARY_COLOR = '#3498db'

export const DEFAULT_PAGE_SIZE = 8

export function throttle(func, delay = 0){
    let timeout:any = null
    return function(){
        if(timeout) return
        timeout = setTimeout(()=>{
            func.apply()
            timeout = null
        }, delay)
    }
}
