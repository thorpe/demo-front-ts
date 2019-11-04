import { Schema$ResponseBase, Schema$UserInfo } from '../interface/common'

/**
 * /auth/signin
 */
export namespace ISignin {
  export interface Params {
    username: string
    password: string
  }

  export interface Schema extends Schema$ResponseBase {
    user?: Schema$UserInfo
  }
}

/**
 * /auth/logout
 */
export namespace ILogout {
  export interface Params {}

  export interface Schema extends Schema$ResponseBase {}
}
