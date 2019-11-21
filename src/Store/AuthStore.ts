import { observable, action, computed } from 'mobx'

import { StoreExt } from '@helpers/reactExt'
import { LOCALSTORAGE_KEYS } from '@constants/index'

import { AuthInterface } from '@interfaces/AuthInterface'
import { routerStore, globalStore } from '@store/index'

export type loginParams = AuthInterface.loginParams

export class AuthStore extends StoreExt {

  @observable
  accessTokenInfo: {}

  @observable
  isLogin: boolean

  @observable
  access_token: string


  @action
  localLoginByLocalStorage = async () => {
    try {
      const accessTokenInfo = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEYS.ACCESS_TOKEN))
      if (accessTokenInfo.access_token) {
        this.isLogin = true
      } else {
        this.isLogin = false
      }
      globalStore.toggleSideBarCollapsed(true)
      routerStore.replace('/')
    } catch (err) {
      await this.doResetAccessTokenInfo()
    }
  }

  @action
  login = async (params: loginParams) => {
    try {
      const res = await this.api.auth.login(params)
      this.setAccessTokenInfo(res.body)
      localStorage.setItem(LOCALSTORAGE_KEYS.ACCESS_TOKEN, JSON.stringify(res.body))
      globalStore.toggleSideBarCollapsed(true)
      this.isLogin = true
      routerStore.replace('/')
    } catch (err) {
      await this.doResetAccessTokenInfo()
    }
  }

  @action
  logout = async () => {
    try {
      await this.doResetAccessTokenInfo()
    } catch (err) {
      console.error(err)
    }

    routerStore.replace('/login')
  }

  @action
  doResetAccessTokenInfo = async () => {
    this.isLogin = false
    localStorage.removeItem(LOCALSTORAGE_KEYS.ACCESS_TOKEN)
    globalStore.toggleSideBarCollapsed(true)
    routerStore.replace('/')
  }


  @action
  setAccessTokenInfo = async (res) => {
    this.accessTokenInfo = res
    return res
  }

  @computed
  get isSignedIn() {
    const accessTokenInfo = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEYS.ACCESS_TOKEN))
    if (accessTokenInfo.access_token) {
      return this.isLogin = true
    } else {
      return this.isLogin = false
    }
  }

  @computed
  get getAccessToken() {
    const accessTokenInfo = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEYS.ACCESS_TOKEN))
    if (accessTokenInfo.access_token) {
      return this.access_token = accessTokenInfo.access_token
    } else {
      return this.access_token = null
    }
  }
}

export default new AuthStore()
