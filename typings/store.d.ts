import { RouterStore as _RouterStore } from 'mobx-react-router'
import { BettorStore } from '@store/bettorStore'

declare global {
  /**
   * type from mobx-react-router
   *
   * @interface RouterStore
   * @extends {_RouterStore}
   */
  interface RouterStore extends _RouterStore {
  }
}

export interface RootStore {
  bettorStore: BettorStore
}

