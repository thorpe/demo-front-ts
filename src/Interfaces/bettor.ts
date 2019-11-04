import { SchemaResponseBase } from '@interfaces/common'

export interface Schema$BettorList {
  id?: string
  nick?: string
  job?: string
  level?: string
}


/**
 * /user/user
 */

export namespace IBettor {
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

  export interface listSchema extends SchemaResponseBase {
    code?: number
    message?: string
    data?: Schema$BettorList[]
  }

  export interface successSchema extends SchemaResponseBase {
    code?: number
    message?: string
  }
}
