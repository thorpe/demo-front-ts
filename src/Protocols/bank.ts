import { Schema$ResponseBase } from '../interface/common'
import { Schema$ClubBetRecord } from './club'

export interface Schema$RecordUserAsset {
  id?: string
  moveType?: number
  subType?: number
  desc?: string
  productId?: number
  amount?: number
  remain?: number
  dateHappen?: Date
  trace?: string
  userId?: string
  betHistoryContent?: Schema$ClubBetRecord
}

export interface Schema$RecordUserMoney extends Schema$RecordUserAsset {
  targetId?: string
  clubId?: string
}

/**
 * /bank/assets
 */
export namespace IAssets {
  export interface Params {}
  export interface Schema extends Schema$ResponseBase {
    money?: number
    cash?: number
    heart?: number
  }
}

export namespace IAssetsHistory {
  export interface Params {
    offset: number
    limit: number
  }
  export interface Schema extends Schema$ResponseBase {
    limit: number
    total: number
  }
}

/**
 * /bank/moneyHistory
 */
export namespace IMoneyHistory {
  export interface Params extends IAssetsHistory.Params {}
  export interface Schema extends IAssetsHistory.Schema {
    items?: Schema$RecordUserMoney[]
  }
}

/**
 * /bank/cashHistory
 */
export namespace ICashHistory {
  export interface Params extends IAssetsHistory.Params {}
  export interface Schema extends IAssetsHistory.Schema {
    items?: Schema$RecordUserAsset[]
  }
}

/**
 * /bank/heartHistory
 */
export namespace IHeartHistory {
  export interface Params extends IAssetsHistory.Params {}
  export interface Schema extends IAssetsHistory.Schema {
    items?: Schema$RecordUserAsset[]
  }
}
