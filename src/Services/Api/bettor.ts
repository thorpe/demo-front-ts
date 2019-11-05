import http from '@services/http'
import { BettorInterface } from "@interfaces/bettorInterface"

export default {
  // ------- 유저의 메세지를 관리하는 부분 (클럽메세지) -------
  getList(data: BettorInterface.SearchParams): Promise<BettorInterface.listSchema> {
    return http.get('bettor/list', data || {})
  },


  doSendHeart(data: BettorInterface.SendHeartParams): Promise<BettorInterface.successSchema> {
    return http.post('bettor/do_send_heart', data || {})
  },

  doSendMessage(data: BettorInterface.SendMessageParams): Promise<BettorInterface.successSchema> {
    return http.post('bettor/do_send_message', data || {})
  },
}
