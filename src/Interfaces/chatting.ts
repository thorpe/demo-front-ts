import { SchemaResponseBase } from '@interfaces/common'

export interface Schema$ChattingList {
  chatType?: string
  nick?: string
  content?: string
}


/**
 * /user/user
 */

export namespace IChatting {
  export interface SearchParams {
    type?: string
  }

  export interface SendMessageParams {
    content?: string
  }

  export interface listSchema extends SchemaResponseBase {
    code?: number
    message?: string
    data?: Schema$ChattingList[]
  }

}
