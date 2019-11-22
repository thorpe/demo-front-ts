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
import { SideBarTheme, GlobalStore } from '@store/GlobalStore'

// css
import { IconStyle, MenuItemContainer, MenuItemWrap } from './index.style'


import menus, { filterMenus, RouteMenu, MenuInTree } from '@routes/menu'
import { CommonInterface } from "@interfaces/CommonInterface"



@observer
class SiderMenu extends React.Component<CommonInterface.SiderMenuProps> {
  private levelMap: NumberObject = {}

  @computed
  get currentRoute() {
    return this.props.routerStore.location.pathname
  }

  @computed
  get menuTree() {
    // const { isLogin = false } = this.props
    const filteredMenu = filterMenus(true)
    const availableMenu = filteredMenu.filter((el: RouteMenu) => {
      return el.invisible !== true
    })

    return arrayToTree<MenuInTree>(availableMenu, 'id', 'pid')
  }

  @computed
  get menuProps() {
    const { sideBarCollapsed } = this.props
    return !sideBarCollapsed
      ? {
        onOpenChange: this.onOpenChange
      }
      : {}
  }


  goto = ({ key }: { key: string }) => {
    const { isLogin = false } = this.props
    const { history } = this.props.routerStore
    const selectedMenu = menus.find(item => String(item.id) === key)
    if (selectedMenu) {

      if (selectedMenu.isLogin === true && isLogin === false) {
        this.props.toggleLoginCollapsed(false)
      } else if (selectedMenu.namespace && selectedMenu.namespace.length) {
      } else if (selectedMenu.path && selectedMenu.path !== this.currentRoute) {
        history.push(selectedMenu.path)
      }
      this.props.toggleSideBarCollapsed(true)
    }
  }

  onOpenChange = (openKeys: string[]): void => {

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

  getSiderMenus = (menuTree: MenuInTree[]) => {
    return menuTree.map(item => {
      if (item.position == 'left') {
        return (
          <Menu.Item key={String(item.id)} css={IconStyle}>
            {item.icon && <item.icon />}
            <p>{intl.get(item.locale)}</p>
          </Menu.Item>
        )
      }
    })
  }

  render() {
    this.levelMap = {}
    const { sideBarTheme } = this.props
    const menuItems = this.getSiderMenus(this.menuTree)

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
          toggleSideBarCollapsed={globalStore.toggleSideBarCollapsed}
          routerStore={routerStore}
          globalStore={globalStore}
          isLogin={globalStore.isLogin}
          sideBarCollapsed={globalStore.sideBarCollapsed}
          sideBarTheme={globalStore.sideBarTheme}
        />
      )}
    </RootConsumer>
  )
}

export default observer(Wrapper)
