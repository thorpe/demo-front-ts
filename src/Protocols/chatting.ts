import { Schema$ResponseBase } from '../interface/common'

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

  export interface listSchema extends Schema$ResponseBase {
    code?: number
    message?: string
    data?: Schema$ChattingList[]
  }

}
