import { observable, action, computed } from 'mobx'

import { clone, isString } from 'lodash'

import { StoreExt } from '@helpers/reactExt'
import { LOCALSTORAGE_KEYS } from '@constants/index'

import { SchemaUserInfo, SchemaMemberInfo } from '@interfaces/common'
import { AuthInterface } from '@interfaces/authInterface'
import { routerStore, globalStore } from '@store/index'

export type loginParams = AuthInterface.loginParams
export type UserInfo = SchemaUserInfo
export type MemberInfo = SchemaMemberInfo

export class AuthStore extends StoreExt {
  /**
   * 用户信息
   *
   * @type {UserInfo}
   * @memberof AuthStore
   */
  @observable
  userInfo: UserInfo = {}

  @observable
  memberInfo?: MemberInfo

  @observable
  signedin: boolean = undefined


  @action
  login = async (params: loginParams) => {
    try {
      const res = await this.api.auth.login(params)
      const { user } = res
      this.setUser(user)
      localStorage.setItem(LOCALSTORAGE_KEYS.USERINFO, JSON.stringify(user))
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
    this.setMember(undefined)
    localStorage.removeItem(LOCALSTORAGE_KEYS.USERINFO)
    globalStore.toggleSideBarCollapsed(true)
  }

  @action
  fetchUser = async () => {
    try {
      console.log('authStore.fetchUser')
      const res = await this.api.user.getUsers({})
      if (!res) {
        return
      }
      const { user, member } = res
      this.setUser(user)
      this.setMember(member)
      localStorage.setItem(LOCALSTORAGE_KEYS.USERINFO, JSON.stringify(user))
    } catch (err) {
      await this.reset()
    }
  }

  @action
  setUser = (userInfo: UserInfo): UserInfo => {
    this.userInfo = userInfo
    this.signedin = isString(userInfo.id)
    return userInfo
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

  @action
  setMember = (memberInfo: MemberInfo): MemberInfo => {
    this.memberInfo = memberInfo
    return memberInfo
  }

  @computed
  get isSignedIn() {
    return this.signedin === true
  }
}

export default new AuthStore()
