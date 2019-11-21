import { GlobalStore, SideBarTheme } from "@store/GlobalStore"

export namespace CommonInterface {

  export interface ResponseBase {
    code: number
    message: string
  }

  export interface SiderMenuProps {
    toggleSideBarCollapsed: (collapsed: boolean) => void
    sideBarCollapsed: boolean
    sideBarTheme: SideBarTheme
    isLogin: object
    routerStore: RouterStore
    globalStore: GlobalStore
  }


}


