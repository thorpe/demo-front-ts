import http from '@services/http'
import { IBettor } from "@interfaces/bettor"

export default {
  // ------- 유저의 메세지를 관리하는 부분 (클럽메세지) -------
  getList(data: IBettor.SearchParams): Promise<IBettor.listSchema> {
    return http.get('bettor/list', data || {})
  },


  doSendHeart(data: IBettor.SendHeartParams): Promise<IBettor.successSchema> {
    return http.post('bettor/do_send_heart', data || {})
  },

  doSendMessage(data: IBettor.SendMessageParams): Promise<IBettor.successSchema> {
    return http.post('bettor/do_send_message', data || {})
  },
}
