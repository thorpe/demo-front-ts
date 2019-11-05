import { RouterStore as _RouterStore } from 'mobx-react-router'
import { BettorStore } from '@store/bettorStore'
import { AuthStore } from '@store/authStore'
import { GlobalStore } from '@store/globalStore'
import { RouterStore } from '@store/routerStore'

declare global {
  interface RouterStore extends _RouterStore {
  }
}

export interface RootStore {
  globalStore: GlobalStore
  authStore: AuthStore
  bettorStore: BettorStore
  routerStore: RouterStore
}

