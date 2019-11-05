import { RouterStore as _RouterStore } from 'mobx-react-router'
import { BettorStore } from '@store/bettorStore'

declare global {
  interface RouterStore extends _RouterStore {
  }
}

export interface RootStore {
  bettorStore: BettorStore
}

