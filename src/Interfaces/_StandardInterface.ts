import { CommonInterface } from '@interfaces/CommonInterface'

/**
 * /user/user
 */

export namespace StandardInterface {

  export interface Schema {
    id: string
    createdAt: string
  }

  export interface ParamsOfSearch {
    id?: string
  }


  export interface ResponseSchema extends CommonInterface.ResponseBase {
    body?: {
      body: Schema[]
      count: number
    }
  }

}
