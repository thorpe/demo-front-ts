import { observable, action, computed } from 'mobx'

import { StoreExt } from '@helpers/ReactExt'
import { LOCALSTORAGE_KEYS } from '@constants/Index'

import { AuthInterface } from '@interfaces/AuthInterface'
import { routerStore, globalStore } from '@store/Index'

export type loginParams = AuthInterface.ParamsOfLogin

export class AuthStore extends StoreExt {

  @observable
  accessTokenInfo: {}


  @observable
  access_token: string

  @action
  login = async (params: loginParams) => {
    try {
      const res = await this.api.auth.login(params)
      this.setAccessTokenInfo(res.body)
      localStorage.setItem(LOCALSTORAGE_KEYS.ACCESS_TOKEN, JSON.stringify(res.body))
      globalStore.toggleSideBarCollapsed(true)
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

    routerStore.replace('/')
  }

  @action
  doResetAccessTokenInfo = async () => {
    localStorage.removeItem(LOCALSTORAGE_KEYS.ACCESS_TOKEN)
    globalStore.toggleSideBarCollapsed(true)
    globalStore.toLoginByLocalStorage()
    routerStore.replace('/')
  }


  @action
  setAccessTokenInfo = async (res) => {
    this.accessTokenInfo = res
    return res
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
