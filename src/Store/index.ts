import { RouterStore } from 'mobx-react-router'

export const routerStore = new RouterStore()

export { default as socketStore } from './SocketStore'
export { default as globalStore } from './GlobalStore'
export { default as authStore } from './AuthStore'
export { default as userStore } from './UserStore'
export { default as bettorStore } from './BettorStore'
