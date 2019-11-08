import { CommonInterface } from '@interfaces/CommonInterface'

export namespace MessageInterface {

  export interface Schema  extends CommonInterface.ResponseBase {
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

}