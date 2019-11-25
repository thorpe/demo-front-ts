import { CommonInterface } from '@interfaces/CommonInterface'


/**
 * /user/user
 */

export namespace BannerInterface {

  export interface Schema {
    id: string
    createdAt: string
  }

  export interface ParamsOfSearch {
    id?: string
  }


  export interface ResponseSchema extends CommonInterface.ResponseBase {
  }

}
