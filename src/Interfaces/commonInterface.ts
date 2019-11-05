export interface SchemaResponseBase {
  statusCode?: number
  error?: string
  errcode?: number
  user?: SchemaUserInfo
}

export interface SchemaUserInfo {
  id?: string
  cash?: number
  mileage?: number
  point?: number
  money?: number
  heart?: number
  job?: number
  nick?: string
  avatar?: string
  present_box_openedAt?: Date
  clubId?: string
}

export interface SchemaMemberInfo {
  account: string
  name?: string
  gender?: number
  phone?: string
  email?: string
  last_connected_date?: Date
  pw_change_date?: Date
  phone_send?: string
  age?: string
}

export interface SchemaClubInfo {
  id?: string
  ownerId?: string
  name?: string
  soluble?: number
  state?: number

  pre_betmoney_min?: number
  pre_betmoney_max?: number
  live_betmoney_min?: number
  live_betmoney_max?: number
  special_betmoney_min?: number
  special_betmoney_max?: number
  hit_max?: number
  limit_betting_rate?: number

  sportsCount?: number

  isCrossSupport?: boolean
  isWaySupport?: boolean
  isHandicapSupport?: boolean
  isSpecialSupport?: boolean
  isLiveSupport?: boolean

  isMember?: boolean
  memberState?: number
}
