import http from 'Services/http'

export default {
    login(data: object): Promise<any> {
        return http.post('auth/login', data || {})
    }
}
