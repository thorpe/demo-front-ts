/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { observer } from 'mobx-react'
import { computed } from 'mobx'
import { Menu } from 'antd'
import pathToRegexp from 'path-to-regexp'
import intl from 'react-intl-universal'
import { RootConsumer } from '@shared/App/Provider'
import { arrayToTree, queryArray } from '@helpers/index'
import { SideBarTheme, GlobalStore } from '@store/globalStore'
// css
import { IconStyle, MenuItemContainer, MenuItemWrap } from './index.style'


import menus, { filterMenus, RouteMenu, MenuInTree } from '../menu'


interface SiderMenuProps {
  toggleLoginCollapsed: (collapsed: boolean) => void
  toggleSideBarCollapsed: (collapsed: boolean) => void
  sideBarCollapsed: boolean
  sideBarTheme: SideBarTheme
  navOpenKeys: string[]
  setOpenKeys: (openKeys: string[]) => void
  signedin: object
  routerStore: RouterStore
  globalStore: GlobalStore
}

@observer
class SiderMenu extends React.Component<SiderMenuProps> {
  private levelMap: NumberObject = {}

  @computed
  get currentRoute() {
    return this.props.routerStore.location.pathname
  }

  @computed
  get menuTree() {
    // const { signedin = false } = this.props
    const filteredMenu = filterMenus(true)
    const availableMenu = filteredMenu.filter((el: RouteMenu) => {
      return el.invisible !== true
    })

    return arrayToTree<MenuInTree>(availableMenu, 'id', 'pid')
  }

  @computed
  get menuProps() {
    const { sideBarCollapsed, navOpenKeys } = this.props
    return !sideBarCollapsed
      ? {
        onOpenChange: this.onOpenChange,
        openKeys: navOpenKeys,
      }
      : {}
  }

  showModalMenu = (selectedMenu: RouteMenu) => {


    if (selectedMenu.namespace === 'message') {
      this.props.globalStore.toggleMessageCollapsed(false)
    } else if (selectedMenu.namespace === 'giftbox') {
      this.props.globalStore.toggleGiftBoxCollapsed(false)
    } else if (selectedMenu.namespace === 'attendance') {
      this.props.globalStore.toggleAttendanceCollapsed(false)
    }
  }

  goto = ({ key }: { key: string }) => {
    const { signedin = false } = this.props
    const { history } = this.props.routerStore
    const selectedMenu = menus.find(item => String(item.id) === key)
    if (selectedMenu) {

      if (selectedMenu.signedin === true && signedin === false) {
        this.props.toggleLoginCollapsed(false)
      } else if (selectedMenu.namespace && selectedMenu.namespace.length) {
        this.showModalMenu(selectedMenu)
      } else if (selectedMenu.path && selectedMenu.path !== this.currentRoute) {
        history.push(selectedMenu.path)
      }
      this.props.toggleSideBarCollapsed(true)
    }
  }

  onOpenChange = (openKeys: string[]): void => {
    const { navOpenKeys, setOpenKeys } = this.props
    const latestOpenKey = openKeys.find(key => !navOpenKeys.includes(key))
    const latestCloseKey = navOpenKeys.find(key => !openKeys.includes(key))
    let nextOpenKeys = []
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey)
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey)
    }
    setOpenKeys(nextOpenKeys)
  }

  getPathArray = (array: RouteMenu[], current: RouteMenu): string[] => {
    const result = [String(current.id)]
    const getPath = (item: RouteMenu): void => {
      if (item && item.pid) {
        result.unshift(String(item.pid))
        getPath(queryArray(array, String(item.pid), 'id'))
      }
    }
    getPath(current)
    return result
  }

  getAncestorKeys = (key: string): string[] => {
    const map = {}
    const getParent = index => {
      const result = [String(this.levelMap[index])]
      if (this.levelMap[result[0]]) {
        result.unshift(getParent(result[0])[0])
      }
      return result
    }
    for (const index in this.levelMap) {
      if ({}.hasOwnProperty.call(this.levelMap, index)) {
        map[index] = getParent(index)
      }
    }
    return map[key] || []
  }

  getMenus = (menuTree: MenuInTree[]) => {
    return menuTree.map(item => {
      return (
        <Menu.Item key={String(item.id)} css={IconStyle}>
          {item.icon && <item.icon />}
          <p>{intl.get(item.locale)}</p>
        </Menu.Item>
      )
    })
  }

  render() {
    this.levelMap = {}
    const { sideBarTheme } = this.props
    const menuItems = this.getMenus(this.menuTree)

    let currentMenu: RouteMenu = null
    for (const item of menus) {
      if (item.path && pathToRegexp(item.path).exec(this.currentRoute)) {
        currentMenu = item
        break
      }
    }
    let selectedKeys: string[] = null
    if (currentMenu) {
      selectedKeys = this.getPathArray(menus, currentMenu)
    }
    if (!selectedKeys) {
      selectedKeys = ['1']
    }
    return (
      <MenuItemContainer>
        <MenuItemWrap>
          <Menu
            // className="MenuList"
            theme={sideBarTheme}
            mode="inline"
            selectedKeys={selectedKeys}
            onClick={this.goto}
            {...this.menuProps}
          >
            {menuItems}
          </Menu>
        </MenuItemWrap>
      </MenuItemContainer>
    )
  }
}

function Wrapper() {
  return (
    <RootConsumer>
      {({ routerStore, authStore, globalStore }) => (
        <SiderMenu
          toggleLoginCollapsed={globalStore.toggleLoginCollapsed}
          toggleSideBarCollapsed={globalStore.toggleSideBarCollapsed}
          routerStore={routerStore}
          globalStore={globalStore}
          signedin={authStore.signedin}
          sideBarCollapsed={globalStore.sideBarCollapsed}
          sideBarTheme={globalStore.sideBarTheme}
          navOpenKeys={globalStore.navOpenKeys}
          setOpenKeys={globalStore.setOpenKeys}
        />
      )}
    </RootConsumer>
  )
}

export default Wrapper
