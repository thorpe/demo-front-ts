/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { NavBar, Icon } from 'antd-mobile'

import useRootStore from '@store/useRootStore'

import { LogoIco } from '@components/Icon/LogoIcon'


const Header: React.FC = () => {

  const {routerStore, globalStore} = useRootStore()

  console.log('==============')
  console.log(routerStore.location.pathname)
  console.log(routerStore)

  const doOpenSideBar = () => {
    globalStore.toLoginByLocalStorage()
    globalStore.toggleSideBarCollapsed(false)
  }


  console.log('Render ------> Sider -> Header')


  return (
    <NavBar style={{position: 'fixed', width: '100%', top: 0}}
            key="layout_header"
            mode="dark"
            icon={<Icon type="left"/>}
            onLeftClick={() => doOpenSideBar()}
            rightContent={[
              <Icon key="0" type="search" style={{marginRight: '16px'}} onClick={() => globalStore.toggleSideBarCollapsed(false)}/>,
              <Icon key="1" type="ellipsis" onClick={() => globalStore.toggleSideBarCollapsed(false)}/>,
            ]}
    ><LogoIco/></NavBar>
  )
}

export default Header
