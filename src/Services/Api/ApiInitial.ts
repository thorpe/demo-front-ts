import http from '@services/Http'
import { InitialInterface } from "@interfaces/InitialInterface"

export default {
  // ------- 유저의 메세지를 관리하는 부분 (클럽메세지) -------
  getList(data: InitialInterface.SearchParams): Promise<InitialInterface.listSchema> {
    return http.get('v1/goods/list', data || {})
  },
}
