import { action, observable } from 'mobx'
import { StoreExt } from '@helpers/reactExt'
import { BettorInterface, Schema$BettorList } from "@interfaces/bettorInterface"

import { extend } from 'lodash'
import { message } from "antd"


export type betterList = Schema$BettorList
export type betterTrackItem = Schema$BettorList


export class BettorStore extends StoreExt {

  bettors: betterList[]

  @observable
  tracks: betterTrackItem[]

  constructor() {
    super()

    this.bettors = []
  }


  @action
  getList = async (params: BettorInterface.SearchParams = {}) => {
    try {
      const {data} = await this.api.bettor.getList(params)
      this.bettors = data
      const tracks = []
      for (const el of this.bettors) {
        const track: betterTrackItem = extend({}, el)
        tracks.push(track)
      }

      this.setBettors(tracks)
    } catch (err) {
      message.error(err.message)
    }
  }

  @action
  doSendHeart = async (params: BettorInterface.SendHeartParams = {}) => {
    try {
      await this.api.bettor.doSendHeart(params)
      message.info('하트 보내기 성공')
    } catch (err) {
      console.error(err)
    }
  }

  @action
  doSendMessage = async (params: BettorInterface.SendMessageParams = {}) => {
    try {
      await this.api.bettor.doSendHeart(params)
      message.info('메세지 보내기 성공')
    } catch (err) {
      console.error(err)
    }
  }

  @action
  setBettors = (tracks: betterTrackItem[]): betterTrackItem[] => {
    this.tracks = tracks
    return tracks
  }
}

export default new BettorStore()
