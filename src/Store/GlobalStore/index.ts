import { observable, action } from 'mobx'

import { StoreExt } from '@helpers/reactExt'
import { LOCALSTORAGE_KEYS } from '@constants/index'
import uuid from 'uuid'

export type SideBarTheme = 'dark' | 'light'

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
  /**
   * 사이드메뉴 접기
   *
   * @type {boolean}
   * @memberof GlobalStore
   */
  @observable
  sideBarCollapsed = true

  /**
   * 테마
   *
   * @type {SideBarTheme}
   * @memberof GlobalStore
   */
  @observable
  sideBarTheme: SideBarTheme = (localStorage.getItem(LOCALSTORAGE_KEYS.SIDE_BAR_THEME) as SideBarTheme) || 'light'

  /**
   * 사이드 메뉴 오픈키
   *
   * @type {string[]}
   * @memberof GlobalStore
   */
  @observable
  navOpenKeys: string[] = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEYS.NAV_OPEN_KEYS)) || []

  /**
   * 팝업 메뉴 접기
   * @type {boolean}
   * @memberof GlobalStore
   */
  @observable
  collapsedEvent = true

  @observable
  collapsedAttendance = true

  @observable
  collapsedGiftbox = true

  @observable
  collapsedMessage = true

  @observable
  somethingPopup = false

  @observable
  visibleChattingToast = false

  dialogQueue: DialogQueue = []

  @observable
  currentDialog: DialogData

  constructor() {
    super()

    localStorage.setItem(LOCALSTORAGE_KEYS.SIDE_BAR_COLLAPSED, this.sideBarCollapsed ? '1' : '0')
  }

  @action
  toggleSideBarCollapsed = (collapsed: boolean) => {
    this.sideBarCollapsed = collapsed
    localStorage.setItem(LOCALSTORAGE_KEYS.SIDE_BAR_COLLAPSED, this.sideBarCollapsed ? '1' : '0')

    this.updateSomethingPopup()
  }

  @action
  changeSiderTheme = (theme: SideBarTheme) => {
    this.sideBarTheme = theme
    localStorage.setItem(LOCALSTORAGE_KEYS.SIDE_BAR_THEME, theme)
  }

  @action
  setOpenKeys = (openKeys: string[]) => {
    this.navOpenKeys = openKeys
    localStorage.setItem(LOCALSTORAGE_KEYS.NAV_OPEN_KEYS, JSON.stringify(openKeys))
  }

  @action
  toggleLoginCollapsed = (collapsed: boolean) => {
    // this.collapsedLogin = collapsed
    // localStorage.setItem('collapsedLogin', this.collapsedLogin ? '1' : '0')
    // this.updateSomethingPopup()
  }

  @action
  toggleEventCollapsed = (collapsed: boolean) => {
    this.collapsedEvent = collapsed
    localStorage.setItem('collapsedEvent', this.collapsedEvent ? '1' : '0')

    this.updateSomethingPopup()
  }

  @action
  toggleAttendanceCollapsed = (collapsed: boolean) => {
    this.collapsedAttendance = collapsed
    localStorage.setItem('collapsedAttendance', this.collapsedAttendance ? '1' : '0')

    this.updateSomethingPopup()
  }

  @action
  toggleGiftBoxCollapsed = (collapsed: boolean) => {
    this.collapsedGiftbox = collapsed
    localStorage.setItem('collapsedGiftbox', this.collapsedGiftbox ? '1' : '0')

    this.updateSomethingPopup()
  }

  @action
  toggleMessageCollapsed = (collapsed: boolean) => {
    this.collapsedMessage = collapsed
    localStorage.setItem('collapsedMessage', this.collapsedMessage ? '1' : '0')

    this.updateSomethingPopup()
  }

  @action
  updateSomethingPopup = () => {
    this.somethingPopup =
      !this.sideBarCollapsed ||
      // !this.collapsedLogin ||
      !this.collapsedEvent ||
      !this.collapsedAttendance ||
      !this.collapsedGiftbox ||
      !this.collapsedMessage ||
      !!this.currentDialog
  }

  // Dialog usage

  // case 1: single
  // globalStore.pushDialogOk({ title: '테스트1', text: ['클럽 포털 더보기 클릭!'] })

  // // case 2: single
  // const custom = <p>Custom Contents</p>
  // globalStore.pushDialogOk({ title: '테스트2', custom })

  // // case 3: single
  // globalStore.pushDialogOk({ title: '테스트3', text: ['클럽 포털 더보기 클릭!'], singlePress: '닫기' })

  // globalStore.pushDialogYesNo({
  //   title: '테스트4',
  //   text: ['클럽 포털 더보기 클릭!'],
  //   singlePress: '닫기',
  //   callbackPositive: () => {
  //     message.info('positive clicked!')
  //   },
  //   callbackNegative: () => {
  //     message.info('negative clicked!')
  //   },
  // })

  @action
  pushDialog = (type: DialogType, params: DialogParams): DialogData => {
    const dlg = params as DialogData
    dlg.id = uuid.v4()
    dlg.type = type
    dlg.callbackClose = this.closeDialog

    if (this.currentDialog) {
      this.dialogQueue.push(this.currentDialog)
    }

    this.currentDialog = dlg

    this.updateSomethingPopup()

    return dlg
  }

  @action
  pushDialogOk = (params: DialogParams): DialogData => {
    params.singlePress = params.singlePress || '확인'
    return this.pushDialog(DialogType.SINGLE, params)
  }

  @action
  pushDialogYesNo = (params: DialogParams): DialogData => {
    params.negativePress = params.negativePress || '아니오'
    params.positivePress = params.positivePress || '예'
    return this.pushDialog(DialogType.CHOICE, params)
  }

  @action
  closeDialog = () => {
    const nextDlg = this.dialogQueue.pop()
    this.currentDialog = nextDlg
    this.updateSomethingPopup()
    return nextDlg
  }
}

export default new GlobalStore()
