import http from '@services/Http'
import { BoardInterface } from "@interfaces/BoardInterface"

export default {
  // ------- 유저의 메세지를 관리하는 부분 (클럽메세지) -------
  getList(data: BoardInterface.SearchParams): Promise<BoardInterface.listSchema> {
    return http.get('v1/goods/list', data || {})
  },

}
