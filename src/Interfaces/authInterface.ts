import { SchemaResponseBase } from '@interfaces/commonInterface'


/**
 * /user/user
 */

export namespace AuthInterface {
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