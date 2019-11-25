import { CommonInterface } from '@interfaces/CommonInterface'

export namespace AuthInterface {

  export interface SchemaOfAccessToken  {
    access_token: string,
    expired_in: number,
    token_type: string,
    refresh_token?: string,
  }

  export interface ParamsOfLogin {
    type?: string
    account?: string
    password?: string
  }


  export interface listSchema extends CommonInterface.ResponseBase {
    body?: AuthInterface.SchemaOfAccessToken
  }
}