import { Schema$ResponseBase } from '../interface/common'
import { schema_item_def } from '../../models/game/item_def'
import { schema_pick_purchase } from '../../models/shard-user/pick-purchase'
import { schema_pickster } from '../../models/dedicated/pickster'
import { schema_pick_market } from '../../models/dedicated/pick-market'
import { schema_pick } from '../../models/dedicated/pick'

export interface Schema$Message {
  id?: string
  type?: number
  senderId?: string
  senderNick?: string
  receiverId?: string
  receiverNick?: string
  title?: string
  content?: string
  itemCode?: number
  itemQuantity?: number
  itemPeriod?: number
  itemVolume?: number
  receiverRead?: number
  productId?: number
  receivedItem?: number
  createdAt?: Date
  dateExpire?: Date
  item?: schema_item_def
  pickPurchase?: schema_pick_purchase
  pickMarket?: schema_pick_market
  pickster?: schema_pickster
  pick?: schema_pick
}

export namespace IMessagePagination {
  export interface Params {
    offset: number
    limit: number
  }
  export interface Schema extends Schema$ResponseBase {
    limit: number
    total: number
  }
}

export namespace IMessageList {
  export interface Params extends IMessagePagination.Params {
    dir?: number
  }
  export interface Schema extends IMessagePagination.Schema {
    dir?: number
    readableCount?: number
    receivedItemCount?: number
    messages?: Schema$Message[]
  }
}

export namespace IReadMessages {
  export interface Params {
    messageId?: string
    all?: boolean
  }
  export interface Schema extends Schema$ResponseBase {}
}

export namespace IDeleteMessages {
  export interface Params {
    messageId?: string
    all?: boolean
    dir?: number
  }
  export interface Schema extends Schema$ResponseBase {}
}

export namespace ISendMessage {
  export interface Params {
    receiverId?: string
    title?: string
    content?: string
  }
  export interface Schema extends Schema$ResponseBase {}
}

export namespace IReceiveItem {
  export interface Params {
    messageId?: string
    all?: boolean
    dir?: number
  }
  export interface Schema extends Schema$ResponseBase {}
}
