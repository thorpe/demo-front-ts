import http from '@services/Http'

export default {
  login(data: any): Promise<any> {
    return http.post('login/do_login', data || {})
  }
}
