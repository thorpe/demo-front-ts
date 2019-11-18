import { action, observable } from 'mobx'
import { StoreExt } from '@helpers/reactExt'
import { GoodsInterface } from "@interfaces/GoodsInterface"

import { extend } from 'lodash'
import { message } from "antd"


export type goodsList = GoodsInterface.SchemaGoodsList
export type goodsTrackItem =  GoodsInterface.SchemaGoodsList


export class GoodsStore extends StoreExt {

  goods: goodsList[]
  count: number

  @observable
  tracks: goodsTrackItem[]

  constructor() {
    super()

    this.goods = []
    this.count = 0
  }


  @action
  getList = async (params: GoodsInterface.SearchParams = {}) => {
    try {
      const { body } = await this.api.goods.getList(params)
      this.goods = body.body
      this.count = body.count
      const tracks = []
      for (const el of this.goods) {
        const track: goodsTrackItem = extend({}, el)
        tracks.push(track)
      }

      this.setGoods(tracks)
    } catch (err) {
      message.error(err.message)
    }
  }

  @action
  setGoods = (tracks: goodsTrackItem[]): goodsTrackItem[] => {
    this.tracks = tracks
    return tracks
  }
}

export default new GoodsStore()
