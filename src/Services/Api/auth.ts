import http from '@services/http'

export default {
  login(data: object): Promise<any> {
    return http.post('login/db_login', data || {})
  }
}
