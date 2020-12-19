declare interface IState {
    accessToken: string
    profile: IUser | undefined
    coupons: ICoupon[] | any[]
    stores: IStore[] | []
    myCoupons: Partial<ICoupon>[]
}


declare interface IBaseOption {
    current: number
    size: number
}

declare interface ICouponOption extends IBaseOption{
    status: string
}
