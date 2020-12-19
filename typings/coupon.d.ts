declare interface ITag{
    id: number
    name: string
}

declare interface ICoupon{
    id: string
    icon: string
    name: string
    notice: string
    abstract: string
    description: string
    issuerID: string
    validType: number
    validStartTime: string
    validEndTime: string
    validDays: number
    quota: number
    unclaimedCount: number
    claimedCount: number
    unconsumedCount: number
    consumedCount: number
    tags: ITag[]
    status: string
    scopeStores: Partial<IStore>[]
}


declare interface ICouponsResponse{
    data: Partial<ICoupon>[],
    current: number,
    size: number,
    total: number
}
