import { Schema$ResponseBase } from '../interface/common'

export enum PICK_LIST_ORDER {
    ASCENDING = 0,
    DESCENDING = 1,
}

export enum PICK_LIST_FILTER {
    DATE_BET = 0,
    DIVIDEND_RATE = 1,
    FOLD_COUNT = 2,
    DIVIDEND_MONEY = 3,
    BET_MONEY = 4,
    DIVIDEND_HEART = 5,
    BET_HEART = 6,
  }

export interface Schema$Pick {
    id: string
    type: number
    picksterId: string
    bettorBetId: string
    clubId: string
    clubOwnerId: string
    title: string
    userHitRatioTotal: number
    userHitRatioFold: number
    callType: number
    foldCount: number
    dividendRate: number
    analysis: string
    priceHeart: number
    priceMoney: number
    dateRegister: string
    datePurchaseEnd: string
    dateBettingEnd: string
    sellCount: number
    hitState: number
    sell: number

    picksterName: string
    clubName: string
}

export namespace IPickList {
    export interface Params {
      offset: number
      limit: number
      target: number    // PICK_TYPE
      filter: number    // PICK_LIST_FILTER
      order: number     // PICK_LIST_ORDER
    }
  
    export interface Schema extends Schema$ResponseBase {
      limit: number
      total: number
      items: Schema$Pick[]
    }
  }
  