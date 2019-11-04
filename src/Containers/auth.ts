import { SchemaResponseBase, SchemaUserInfo } from '@interfaces/common'

/**
 * /auth/signin
 */

export namespace ISignin {
  export interface Params {
    username: string
    password: string
  }

  export interface Schema extends SchemaResponseBase {
    user?: SchemaUserInfo
  }
}

/**
 * /auth/logout
 */
export namespace ILogout {
  export interface Params {}

  export interface Schema extends SchemaResponseBase {}
}
