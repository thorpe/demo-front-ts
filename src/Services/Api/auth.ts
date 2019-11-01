import http from '@services/http'

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ISignIn {
  export interface Params {
    username: string
    password: string
  }
}

export default {
  login(data: ISignIn.Params): Promise<ISignIn.Params> {
    return http.post('login/do_login', data || {})
  }
}
