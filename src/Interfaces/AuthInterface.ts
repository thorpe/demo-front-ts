import { CommonInterface } from '@interfaces/CommonInterface'


/**
 * /user/user
 */

export namespace AuthInterface {

  export interface loginParams {
    account?: string
    password?: string
  }


  export interface listSchema extends CommonInterface.ResponseBase {
    aaa?: number
  }

}