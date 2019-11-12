import http from '@services/Http'
import { BettorInterface } from "@interfaces/bettorInterface"

export default {
  // ------- 유저의 메세지를 관리하는 부분 (클럽메세지) -------
  getList(data: BettorInterface.SearchParams): Promise<BettorInterface.listSchema> {
    return http.get('v1/goods/list', data || {})
  },


  doSendHeart(data: BettorInterface.SendHeartParams): Promise<BettorInterface.successSchema> {
    return http.post('v1/goods/do_send_heart', data || {})
  },

  doSendMessage(data: BettorInterface.SendMessageParams): Promise<BettorInterface.successSchema> {
    return http.post('v1/goods/do_send_message', data || {})
  },
}
