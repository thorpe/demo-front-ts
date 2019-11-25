import { action, computed, observable } from 'mobx'

import { StoreExt } from '@helpers/ReactExt'


export class BannerStore extends StoreExt {

  /**
   *
   */
  @observable
  private count = 1

  @observable
  totalPrice = 1110

  @action
  doIncrement = () => {
    this.count++
  }

  @computed
  get doTotal() {
    return this.count * 800
  }

  @action
  doDecrement = () => {
    this.count--
  }

}

export default new BannerStore()
