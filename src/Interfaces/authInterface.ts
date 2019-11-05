import { SchemaResponseBase } from '@interfaces/common'


/**
 * /user/user
 */

export namespace authInterface {
  export interface loginParams {
    account?: string
    password?: string
  }


  export interface listSchema extends SchemaResponseBase {
    code?: number
    message?: string
  }

  export interface successSchema extends SchemaResponseBase {
    code?: number
    message?: string
  }
}
