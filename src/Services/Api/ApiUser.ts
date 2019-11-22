import http from '@services/Http'
import { GoodsInterface } from '@interfaces/GoodsInterface'
import { InitialInterface } from '@interfaces/InitialInterface'

export default {
  getUsers(data: InitialInterface.SearchParams): Promise<GoodsInterface.listSchema> {
    return http.get('user', data || {})
  },

  createUser(data: InitialInterface.SearchParams): Promise<GoodsInterface.listSchema> {
    return http.post('user/create', data || {})
  },

  modifyUser(data: InitialInterface.SearchParams): Promise<GoodsInterface.listSchema> {
    return http.post('user/modify', data || {})
  },

  deleteUser(data: InitialInterface.SearchParams): Promise<GoodsInterface.listSchema> {
    return http.post('user/delete', data || {})
  }
}
