import { observable, action, computed } from 'mobx'

import { clone, isString } from 'lodash'

import { StoreExt } from '@helpers/reactExt'
import { LOCALSTORAGE_KEYS } from '@constants/index'
// import { initialUserInfo, syncUserInfo } from './syncUserInfo'
import { Schema$UserInfo, Schema$MemberInfo } from '@interfaces/common'
import { ISignin } from '@protocols/auth'
import { routerStore, globalStore } from '@store/index'

export type LoginParams = ISignin.Params
export type UserInfo = Schema$UserInfo
export type MemberInfo = Schema$MemberInfo

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

  //   constructor() {
  //     super()
  //     reaction(() => this.userInfo, syncUserInfo)
  //   }

  @action
  login = async (params: LoginParams) => {
    try {
      const res = await this.api.auth.login(params)
      const { user } = res
      this.setUser(user)
      localStorage.setItem(LOCALSTORAGE_KEYS.USERINFO, JSON.stringify(user))
      globalStore.toggleSideBarCollapsed(true)
      routerStore.replace('/')
    } catch (err) {
      // console.error(err)
      await this.reset()
    }
  }

  @action
  logout = async () => {
    try {
      await this.api.auth.logout({})
      await this.reset()
      // routerStore.replace('/login')
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
      const res = await this.api.user.getUserInfo({})
      if (!res) {
        return
      }
      const { user, member } = res
      this.setUser(user)
      this.setMember(member)
      localStorage.setItem(LOCALSTORAGE_KEYS.USERINFO, JSON.stringify(user))
    } catch (err) {
      // if (err.message !== 'Unauthorized') {
      //   Message.error(err.message || 'error!')
      // }
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
