import { GlobalStore } from "@store/GlobalStore"
import { AsynchronousComponentKeys } from '@routes/Route'

export namespace CommonInterface {

  export interface ResponseBase {
    code: number
    message: string
  }

  export interface SiderMenuProps {
    toggleSideBarCollapsed: (collapsed: boolean) => void
    sideBarCollapsed: boolean
    isLogin: boolean
    routerStore: RouterStore
    globalStore: GlobalStore
  }


  export interface RouteMenu {
    id: string
    position: string
    exact: boolean
    pid?: number
    isLogin?: boolean
    path?: string
    name?: string
    icon?: () => JSX.Element
    component?: AsynchronousComponentKeys
    namespace?: string // models's namespace to set popup page
    locale?: string
    invisible?: boolean
  }


}


