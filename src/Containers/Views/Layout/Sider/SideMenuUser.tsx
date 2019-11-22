/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { Fragment } from 'react'
import intl from 'react-intl-universal'
import useRootStore from '@store/useRootStore'

// css
import { Button, SiderMenuTitle } from '@styles/base.style'
import { MenuContainer, MemberType, Guest, CloseBtn, CloseBtnTxt, LoginWrap } from './index.style'
import { observer } from "mobx-react";

interface GuestSiderMenuProps {
  onClose: () => void
}

const SideMenuTest: React.FC<GuestSiderMenuProps> = (props: GuestSiderMenuProps) => {
  const { onClose } = props
  const {  authStore } = useRootStore()

  const onClickLogout = () => {
    authStore.logout()
  }

  console.log('Render ------> Sider ------> SideMenuUser')

  return (
    <Fragment>
      <div key="user">
        <div css={Guest}>
          <Button onClick={onClose} css={CloseBtn}>
            <p css={CloseBtnTxt}>닫기</p>
          </Button>
          <div css={LoginWrap}>
            <span css={MemberType}>회원</span>
            <SiderMenuTitle>로그인이 되었습니다..</SiderMenuTitle>
            <Button primary onClick={onClickLogout} css={{ width: '100%', height: 30 }}>
              {intl.get('component.logout')}
            </Button>
          </div>
        </div>
        <div css={MenuContainer} />
      </div>
    </Fragment>
  )
}

export default observer(SideMenuTest)
