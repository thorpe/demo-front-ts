import { CommonInterface } from '@interfaces/CommonInterface'

/**
 * /user/user
 */

export namespace UserInterface {

  export interface UserInfo  extends CommonInterface.ResponseBase {
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