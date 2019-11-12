import { action, observable } from 'mobx'

import { StoreExt } from '@helpers/reactExt'


export class TestStore extends StoreExt {

  /**
   *
   */
  @observable
  count = 1

  count2 = 1

  @action
  doIncrement = () => {
    this.count++
  }

  @action
  doDecrement = () => {
    this.count--
  }

}

export default new TestStore()
