import { RouterStore as _RouterStore } from 'mobx-react-router'
import { AuthStore } from '@store/AuthStore'
import { GlobalStore } from '@store/GlobalStore'
import { RouterStore } from '@store/RouterStore'
import { SocketStore } from '@store/SocketStore'
import { TestStore } from '@store/TestStore'
import { GoodsStore } from '@store/GoodStore'

declare global {
  interface RouterStore extends _RouterStore {
  }
}

export interface RootStore {
  globalStore: GlobalStore
  authStore: AuthStore
  routerStore: RouterStore
  socketStore: SocketStore
  testStore: TestStore
  goodStore: GoodsStore
}

