import { CommonInterface } from '@interfaces/CommonInterface'


/**
 * /user/user
 */

export namespace BettorInterface {

  export interface SchemaBettorList {
    id?: string
    nick?: string
    job?: string
    level?: string
  }

  export interface SearchParams {
    nick?: string
  }

  export interface SendHeartParams {
    nick?: string
    heart?: string
  }

  export interface SendMessageParams {
    nick?: string
    title?: string
    message?: string
  }

  export interface listSchema extends CommonInterface.ResponseBase {
    data?: SchemaBettorList[]
  }

  export interface successSchema extends CommonInterface.ResponseBase {
  }
}
