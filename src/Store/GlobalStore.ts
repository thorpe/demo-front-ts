import { observable, action } from 'mobx'

import { StoreExt } from '@helpers/reactExt'
import { LOCALSTORAGE_KEYS } from '@constants/index'
import uuid from 'uuid'

export type SideBarTheme = 'light' | 'dark'

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
  isLogin = false

  @observable
  sideBarCollapsed = true

  @observable
  somethingPopup = false

  @observable
  currentDialog: DialogData

  dialogQueue: DialogQueue = []

  constructor() {
    super()
    localStorage.setItem(LOCALSTORAGE_KEYS.SIDE_BAR_COLLAPSED, this.sideBarCollapsed ? '1' : '0')
    this.toLoginByLocalStorage()
  }

  @action
  toLoginByLocalStorage = () => {
    const localToken = localStorage.getItem(LOCALSTORAGE_KEYS.ACCESS_TOKEN)
    if (localToken) {
      const accessTokenInfo = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEYS.ACCESS_TOKEN))
      if (accessTokenInfo.access_token) {
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    } else {
      this.isLogin = false
    }
  }

  @action
  toggleSideBarCollapsed = (collapsed: boolean) => {
    this.sideBarCollapsed = collapsed
    localStorage.setItem(LOCALSTORAGE_KEYS.SIDE_BAR_COLLAPSED, this.sideBarCollapsed ? '1' : '0')

    this.updateSomethingPopup()
  }


  @action
  updateSomethingPopup = () => {
    this.somethingPopup =
      !this.sideBarCollapsed ||
      !!this.currentDialog
  }

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
