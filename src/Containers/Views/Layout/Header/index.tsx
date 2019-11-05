/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { observer } from 'mobx-react'
import { NavBar, Icon } from 'antd-mobile'

import useRootStore from '@store/useRootStore'

import { LogoIco } from '@components/Icon/LogoIcon'


const Header: React.FC = props => {
  const { globalStore } = useRootStore()

  const TestTest = [
    <NavBar
      mode="dark"
      icon={<Icon type="left" />}
      onLeftClick={() => globalStore.toggleSideBarCollapsed(false)}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} onClick={() => globalStore.toggleSideBarCollapsed(false)} />,
        <Icon key="1" type="ellipsis" onClick={() => globalStore.toggleSideBarCollapsed(false)} />,
      ]}
    ><LogoIco /></NavBar>,
  ]

  return (
    <div css={{ 'z-index': 99 }}>
      {TestTest}
    </div>
  )
}

export default observer(Header)
