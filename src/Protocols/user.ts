import { Schema$ResponseBase, Schema$UserInfo, Schema$MemberInfo } from '../interface/common'

export interface Schema$UserInfoDetailsItems {
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

  export interface Schema extends Schema$ResponseBase {
    sid?: string
    user?: Schema$UserInfo
    member?: Schema$MemberInfo
  }
}

export namespace IUsers {
  export interface Params {}

  export interface Schema extends Schema$ResponseBase {
    users?: Schema$MemberInfo[]
    total?: number
  }
}

export namespace IUserInfoDetails {
  export interface Params {}
  export interface Schema extends Schema$ResponseBase {
    user?: Schema$UserInfo
    hitMaxRate?: number
    hitMaxMoney?: number
    changeNickItem?: number
    sport?: Schema$UserInfoDetailsItems[]
    matchup?: Schema$UserInfoDetailsItems[]
  }
}

export namespace IUserItems {
  export interface Params {
    propertyId?: number
  }
  export interface Schema extends Schema$ResponseBase {
    character?: number
    items?: Schema$UserItem[]
  }
}

export namespace IUserUseItem {
  export interface Params {
    itemId?: string
  }
  export interface Schema extends Schema$ResponseBase {
    itemCode?: number
  }
}

export namespace INotices {
  export interface Params {}

  export interface Schema extends Schema$ResponseBase {
    notices?: any
  }
}

export namespace IUserNick {
  export interface Params {
    nick?: string
  }
  export interface Schema extends Schema$ResponseBase {
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

  export interface Schema extends Schema$ResponseBase {
    items?: Schema$UserMessage[]
  }
}
