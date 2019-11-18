import { CommonInterface } from '@interfaces/CommonInterface'


/**
 * /user/user
 */

export namespace GoodsInterface {

  export interface SchemaGoodsList {
    id?: string
    name?: string
    code?: string
    imageUrl?: string
    createdAt?: string
  }

  export interface SearchParams {
    name?: string
  }


  export interface listSchema extends CommonInterface.ResponseBase {
    body?: {
      body: SchemaGoodsList[]
      count: number
    }
  }
}
