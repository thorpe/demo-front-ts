import { observable, action } from 'mobx'

import { StoreExt } from '@helpers/reactExt'
import { LOCALSTORAGE_KEYS } from '@constants/index'

export enum DialogType {
  SINGLE,
  CHOICE,
}

type DialogCallback = () => void

export interface DialogParams {
  title?: string
  custom?: React.ReactNode
  text?: string[]

  singlePress?: string

  negativePress?: string
  positivePress?: string

  callbackPositive?: DialogCallback
  callbackNegative?: DialogCallback
}

export interface DialogData extends DialogParams {
  id: string
  type: DialogType
  callbackClose: () => void
}

export type DialogQueue = DialogData[]

export class GlobalStore extends StoreExt {
  @observable
  currentDialog: DialogData

  @observable
  sideBarCollapsed: boolean = localStorage.getItem(LOCALSTORAGE_KEYS.SIDE_BAR_COLLAPSED) === '1'
  /**
   * 菜单栏主题
   *
   * @type {IGlobalStore.SideBarTheme}
   * @memberof GlobalStore
   */
  @observable
  sideBarTheme: IGlobalStore.SideBarTheme = (localStorage.getItem(LOCALSTORAGE_KEYS.SIDE_BAR_THEME) as IGlobalStore.SideBarTheme) || 'light'
  /**
   * 打开的菜单key
   *
   * @type {string[]}
   * @memberof GlobalStore
   */
  @observable
  navOpenKeys: string[] = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEYS.NAV_OPEN_KEYS)) || []

  @action
  toggleSideBarCollapsed = () => {
    this.sideBarCollapsed = !this.sideBarCollapsed
    localStorage.setItem(LOCALSTORAGE_KEYS.SIDE_BAR_COLLAPSED, this.sideBarCollapsed ? '1' : '0')
  }

  @action
  changeSiderTheme = (theme: IGlobalStore.SideBarTheme) => {
    this.sideBarTheme = theme
    localStorage.setItem(LOCALSTORAGE_KEYS.SIDE_BAR_THEME, theme)
  }

  @action
  setOpenKeys = (openKeys: string[]) => {
    this.navOpenKeys = openKeys
    localStorage.setItem(LOCALSTORAGE_KEYS.NAV_OPEN_KEYS, JSON.stringify(openKeys))
  }
}

export default new GlobalStore()
