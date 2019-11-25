import { CommonInterface } from '@interfaces/CommonInterface'
import { BannerInterface } from '@interfaces/BannerInterface'
import { GoodsInterface } from '@interfaces/GoodsInterface'


/**
 * /user/user
 */

export namespace InitialInterface {


  export interface listSchema extends CommonInterface.ResponseBase {
    body: {
      banner?: BannerInterface.Schema[]
      goods?: GoodsInterface.Schema[]
    }
  }
}
