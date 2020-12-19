declare interface IUser{
    nickName: string
    phone: string
    avatarUrl: string
    province: string
    city: string
    country: string
    gender: string
}


declare interface IUpdateProfilePayload {
    encryptedData: string
    iv: string
}

declare interface ILoginPayload {
    encryptedData: string
    iv?: string
    code?: string
}
