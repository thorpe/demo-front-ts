import http from '@services/http'

// eslint-disable-next-line @typescript-eslint/no-namespace

export default {
  login(data: any): Promise<any> {
    return http.post('login/do_login', data || {})
  }
}
