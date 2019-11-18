import { CommonInterface } from '@interfaces/CommonInterface'


/**
 * /user/user
 */

export namespace InitialInterface {

  export interface SchemaInitialList {
    id?: string
    createdAt?: string
  }

  export interface SearchParams {
    name?: string
  }


  export interface listSchema extends CommonInterface.ResponseBase {
    body?: {
      body: SchemaInitialList[]
      count: number
    }
  }
}
