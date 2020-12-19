declare interface IStore{
    id: string
    name: string
    abstract: string
    description: string
    address: string
    province: string
    contact:string
    city: string
    district: string
    street: string
    longitude: string
    latitude: string
    airLineDistance: number
    profilePicUrl: string
    couponsOnlineAndUnclaimedQuantity: number
    couponsOnlineQuantity: number
    status: string
    couponsTypesNum: number
    tags: ITag[]
    scopeCoupons: Partial<ICoupon>[]
}
