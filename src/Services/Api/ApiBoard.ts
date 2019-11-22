import http from '@services/Http'
import { BoardInterface } from "@interfaces/BoardInterface"

export default {
  getList(data: BoardInterface.SearchParams): Promise<BoardInterface.listSchema> {
    return http.get('v1/goods/list', data || {})
  },

}
