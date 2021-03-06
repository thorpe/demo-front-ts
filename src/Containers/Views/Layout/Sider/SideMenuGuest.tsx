/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { Fragment } from 'react'
import intl from 'react-intl-universal'
import useRootStore from '@store/useRootStore'
import { Icon } from 'antd-mobile'

// css
import { Button, SiderMenuTitle } from '@styles/base.style'
import { MenuContainer, MemberType, Guest, CloseBtn,  LoginWrap } from './index.style'
import { observer } from "mobx-react";

interface GuestSiderMenuProps {
  onClose: () => void
}

const SideMenuGuest: React.FC<GuestSiderMenuProps> = (props: GuestSiderMenuProps) => {
  const { onClose } = props
  const { routerStore } = useRootStore()

  const onClickLogin = () => {
    routerStore.replace('login')
  }

  console.log('Render ------> Sider ------> SiderMenuGuest')

  return (
    <Fragment>
      <div key="user">
        <div css={Guest}>
          <Button onClick={onClose} css={CloseBtn}>
            <Icon type='cross' />
          </Button>
          <div css={LoginWrap}>
            <span css={MemberType}>비회원</span>
            <SiderMenuTitle>로그인이 필요합니다11.</SiderMenuTitle>
            <Button primary onClick={onClickLogin} css={{ width: '100%', height: 30 }}>
              {intl.get('component.login')}
            </Button>
          </div>
        </div>
        {/* <div css={Guest} /> */}
        <div css={MenuContainer} />
      </div>
    </Fragment>
  )
}

export default observer(SideMenuGuest)
