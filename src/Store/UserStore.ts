import { observable, action, runInAction } from 'mobx'
import { PaginationConfig } from 'antd/lib/pagination'
import { UserInterface } from '@interfaces/UserInterface'

import { StoreExt } from '@helpers/ReactExt'

export class UserStore extends StoreExt {
  /**
   * 加载用户列表时的loading
   *
   * @memberof UserStore
   */
  @observable
  getUsersloading = false

  /**
   * table pageIndex
   *
   * @memberof UserStore
   */
  @observable
  pageIndex = 1
  /**
   * table pageSize
   *
   * @memberof UserStore
   */
  @observable
  pageSize = 30
  /**
   * users total
   *
   * @memberof UserStore
   */
  @observable
  total = 0

  /**
   * 加载用户列表
   *
   * @memberof UserStore
   */
  @action
  getUsers = async () => {
    this.getUsersloading = true
    try {
      const res = await this.api.user.getUsers({ pageIndex: this.pageIndex, pageSize: this.pageSize })
      runInAction('SET_USER_LIST', () => {
        this.total = res.total
      })
    } catch (err) {
    }
    runInAction('HIDE_USER_LIST_LOADING', () => {
      this.getUsersloading = false
    })
  }

  createUser = async (user: UserInterface.UserInfo) => {
    await this.api.user.createUser(user)
  }

  modifyUser = async (user: UserInterface.UserInfo) => {
    await this.api.user.modifyUser(user)
  }

  deleteUser = async (_id: string) => {
    await this.api.user.deleteUser({ _id })
    this.getUsers()
  }

  @action
  changePageIndex = (pageIndex: number) => {
    this.pageIndex = pageIndex
    this.getUsers()
  }

  @action
  changePageSize = (pageSize: number) => {
    this.pageSize = pageSize
    this.getUsers()
  }

  handleTableChange = (pagination: PaginationConfig) => {
    const { current, pageSize } = pagination
    if (current !== this.pageIndex) {
      this.changePageIndex(current)
    }
    if (pageSize !== this.pageSize) {
      this.changePageSize(pageSize)
    }
  }
}

export default new UserStore()
