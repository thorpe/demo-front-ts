import { RouterStore as _RouterStore } from 'mobx-react-router'
import { BettorStore } from '@store/bettorStore'
import { AuthStore } from '@store/authStore'
import { GlobalStore } from '@store/globalStore'
import { RouterStore } from '@store/routerStore'
import { SocketStore } from '@store/socketStore'
import { TestStore } from '@store/testStore'

declare global {
  interface RouterStore extends _RouterStore {
  }
}

export interface RootStore {
  globalStore: GlobalStore
  authStore: AuthStore
  bettorStore: BettorStore
  routerStore: RouterStore
  socketStore: SocketStore
  testStore: TestStore
}

