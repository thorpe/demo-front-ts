import { observable, action, computed } from 'mobx'

import { clone } from 'lodash'

import { StoreExt } from '@helpers/reactExt'
import { LOCALSTORAGE_KEYS } from '@constants/index'

import { SchemaUserInfo } from '@interfaces/commonInterface'
import { AuthInterface } from '@interfaces/authInterface'
import { routerStore, globalStore } from '@store/index'

export type loginParams = AuthInterface.loginParams
export type UserInfo = SchemaUserInfo


export class AuthStore extends StoreExt {

  /**
   *
   */
  @observable
  userInfo: UserInfo = {}


  @observable
  signedin: object = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEYS.ACCESS_TOKEN))


  @action
  login = async (params: loginParams) => {
    try {
      const res = await this.api.auth.login(params)
      // const { user } = res
      this.setUser(res)
      localStorage.setItem(LOCALSTORAGE_KEYS.ACCESS_TOKEN, JSON.stringify(res))
      globalStore.toggleSideBarCollapsed(true)
      routerStore.replace('/')
    } catch (err) {
      await this.reset()
    }
  }

  @action
  logout = async () => {
    try {
      await this.api.auth.login({})
      await this.reset()
    } catch (err) {
      console.error(err)
    }

    routerStore.replace('/login')
  }

  @action
  reset = async () => {
    this.setUser({})
    localStorage.removeItem(LOCALSTORAGE_KEYS.ACCESS_TOKEN)
    globalStore.toggleSideBarCollapsed(true)
    routerStore.replace('/')
  }

  @action
  fetchUser = async () => {
    try {
      console.log('authStore.fetchUser')
      const res = await this.api.user.getUsers({})
      if (!res) {
        return
      }
      const { user } = res
      this.setUser(user)
      localStorage.setItem(LOCALSTORAGE_KEYS.ACCESS_TOKEN, JSON.stringify(user))
    } catch (err) {
      await this.reset()
    }
  }

  @action
  setUser = async (res) => {
    this.signedin = res
    return res
  }

  @action
  updateUser = (update: UserInfo): UserInfo => {
    const user = clone(this.userInfo)
    user.money = update.money || user.money
    user.cash = update.cash || user.cash
    user.heart = update.heart || user.heart
    this.userInfo = user
    return user
  }

  @computed
  get isSignedIn() {
    return this.signedin === JSON.parse(localStorage.getItem(LOCALSTORAGE_KEYS.ACCESS_TOKEN))
  }
}

export default new AuthStore()
