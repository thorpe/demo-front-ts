import { CommonInterface } from '@interfaces/CommonInterface'


/**
 * /user/user
 */

export namespace BoardInterface {

  export interface SchemaBoardList {
    id?: string
    createdAt?: string
  }

  export interface SearchParams {
    id?: string
  }


  export interface listSchema extends CommonInterface.ResponseBase {
    data?: SchemaBoardList[]
  }

}
