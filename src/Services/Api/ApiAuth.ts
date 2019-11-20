import http from '@services/Http'
import { AuthInterface } from '@interfaces/AuthInterface'

export default {
  login(data: AuthInterface.loginParams): Promise<AuthInterface.listSchema> {
    return http.post('v1/do_login', data || {})
  }
}
