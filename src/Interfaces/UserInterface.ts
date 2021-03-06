import { CommonInterface } from '@interfaces/CommonInterface'


/**
 * /user/user
 */

export namespace UserInterface {

  export interface Schema {
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

  export interface ParamsOfSearch {
    id?: string
  }


  export interface ResponseSchema extends CommonInterface.ResponseBase {

  }

}