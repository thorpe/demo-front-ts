import { Schema$ResponseBase } from '../interface/common'

export interface Schema$PeriodicPrice {
  period: number
  price: number
}

export interface Schema$Product {
  id?: number
  name?: string // 이름
  title?: string // 리스트에 보여주는 설명
  desc?: string // 상세에 보여주는 설명
  sort?: { [id: string]: number }
  price_type?: number
  price?: number
  periodic_price?: Schema$PeriodicPrice[]
  img?: string
}

/**
 * /shop/info
 */
export namespace IShopInfo {
  export interface Params {}

  export interface Schema extends Schema$ResponseBase {
    imgPrefix: string
    items: Schema$Product[]
  }
}
