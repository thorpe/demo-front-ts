import { LOCALSTORAGE_KEYS } from '@constants/Index'
import { AuthInterface } from '@interfaces/AuthInterface'

export const initialTokenInfo = (() => {
  const accessTokenInfo = localStorage.getItem(LOCALSTORAGE_KEYS.ACCESS_TOKEN)
  const aaa = JSON.parse(accessTokenInfo)
  return aaa.access_token
})()

export let accessTokneInfo: AuthInterface.tokenSchema = initialTokenInfo

/**
 * syncUserInfo for http
 *
 * @export
 * @param {IAuthStore.UserInfo} data
 */
// export function syncUserInfo(data: AuthInterface.listSchema) {
//   access_token = data.body.access_token
// }