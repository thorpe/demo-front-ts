import { CommonInterface } from '@interfaces/CommonInterface'


/**
 * /user/user
 */

export namespace GoodsInterface {

  export interface SchemaGoodsList {
    id?: string
    createdAt?: string
  }

  export interface SearchParams {
    id?: string
  }


  export interface listSchema extends CommonInterface.ResponseBase {
    data?: SchemaGoodsList[]
  }

}
