import http from '@services/Http'
import { GoodsInterface } from "@interfaces/GoodsInterface"

export default {

  getList(data: GoodsInterface.SearchParams): Promise<GoodsInterface.listSchema> {
    return http.get('v1/goods/list', data || {})
  },
}
