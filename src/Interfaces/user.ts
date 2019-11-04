import { SchemaResponseBase, SchemaUserInfo, SchemaMemberInfo } from '@interfaces/common'

export interface SchemaUserInfoDetailsItems {
  code?: string
  name?: string
  value?: number
  rate?: string
  color?: string
  order?: number
}

export interface Schema$UserItem {
  id?: string
  name?: string
  item_code?: number
  icon_m?: string
  quantity?: number
  period?: number
  volume?: number
  state?: number
  link_index?: number
}

export interface Schema$UserMessage {
  id?: string
  senderId?: string
  receiverId?: number
  clubId?: string
  messageType?: number
  title?: number
  content?: number
}

/**
 * /user/user
 */
export namespace IUserInfo {
  export interface Params {}

  export interface Schema extends SchemaResponseBase {
    sid?: string
    user?: SchemaUserInfo
    member?: SchemaMemberInfo
  }
}

export namespace IUsers {
  export interface Params {}

  export interface Schema extends SchemaResponseBase {
    users?: SchemaMemberInfo[]
    total?: number
  }
}

export namespace IUserInfoDetails {
  export interface Params {}
  export interface Schema extends SchemaResponseBase {
    user?: SchemaUserInfo
    hitMaxRate?: number
    hitMaxMoney?: number
    changeNickItem?: number
    sport?: SchemaUserInfoDetailsItems[]
    matchup?: SchemaUserInfoDetailsItems[]
  }
}

export namespace IUserItems {
  export interface Params {
    propertyId?: number
  }
  export interface Schema extends SchemaResponseBase {
    character?: number
    items?: Schema$UserItem[]
  }
}

export namespace IUserUseItem {
  export interface Params {
    itemId?: string
  }
  export interface Schema extends SchemaResponseBase {
    itemCode?: number
  }
}

export namespace INotices {
  export interface Params {}

  export interface Schema extends SchemaResponseBase {
    notices?: any
  }
}

export namespace IUserNick {
  export interface Params {
    nick?: string
  }
  export interface Schema extends SchemaResponseBase {
    nick?: string
  }
}

export namespace IUserClubMessages {
  export interface SelectParams {
    limit?: number
    page?: number
    clubId?: string
  }

  export interface InsertParams {
    receivePromiseId?: number
    clubId?: string
    title?: string
    message?: string
  }

  export interface UpdateParams {
    id?: string
  }

  export interface DeleteParams {
    id?: string
  }

  export interface Schema extends SchemaResponseBase {
    items?: Schema$UserMessage[]
  }
}
