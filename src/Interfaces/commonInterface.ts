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
