/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { observer } from 'mobx-react'
import { Layout, Drawer, message } from 'antd'
import intl from 'react-intl-universal'
import useRootStore from '@store/useRootStore'
import { Button, mq } from '@styles/base.style'
import styled, { Theme } from '@themes/theme'
import { CafeIco } from '@shared/Icon/EtcIcon'
import { DrawerWrap, SiderStyle } from './index.style'

import GuestSiderMenu from './GuestSiderMenu'
import UserSiderMenu from './UserSiderMenu'
import SiderMenu from './Menu'

// css
const LogoutBtnWrap = styled.div`
  width: 100%;
  height: auto;
  margin: 32px 0 10px;
  padding: 0 30px;
  flex: 1;
  overflow-x: hidden;
  ${mq[0]} {
    margin: 25px 0 10px;
  }
`
const LogoutBtn = (theme: Theme) => css`
  position: relative;
  width: 100%;
  height: 30px;
  padding-bottom: 6px;
  background: ${theme.color.contentsBg};
  border: ${theme.border.inputLine};
  box-shadow: none;
  &:hover {
    span {
      color: ${theme.color.btnTxt};
    }
  }
`
const SubBtnWrapStyle = (theme: Theme) => css`
  position: relative;
  display: flex;
  width: 100%;
  padding: 0 30px;
  background: ${theme.color.contentsBg};
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  transition: all 0.3s;
`
const SubBtnStyle = (theme: Theme) => css`
  width: 100%;
  height: 30px;
  line-height: 3rem;
  text-align: center;
  border: ${theme.border.inputLine};
  border-radius: 4px;
`
const BtnIcoStyle = styled.span`
  position: relative;
  top: 3px;
  width: 16px;
  margin-right: 8px;
`

const NaverCafeIco = (
  <BtnIcoStyle>
    <CafeIco />
  </BtnIcoStyle>
)

// function Sider() {
const Sider: React.FC<{}> = props => {
  const { globalStore, authStore } = useRootStore()
  const { sideBarCollapsed, sideBarTheme } = globalStore
  const { signedin, userInfo } = authStore

  const onClose = () => {
    globalStore.toggleSideBarCollapsed(true)
  }

  const contentProps = {
    ...props,
    userInfo,
    onClose,
  }

  const SubButton = (
    <div css={SubBtnWrapStyle}>
      <a
        href="https://cafe.naver.com/adventureronline"
        target="_blank"
        rel="noopener noreferrer"
        css={SubBtnStyle}
        style={{ margin: '0 0 10px' }}
      >
        {NaverCafeIco}
        승부사 공식 카페
      </a>
      {/* <Button style={{ width: '100%', margin: '10px 0' }} css={SubBtnStyle} onClick={() => message.info('준비중')}>
       {NaverCafeIco}
       승부사 공식 카페
       </Button> */}
      <a href="/#" style={{ width: 'calc( 50% - 5px )' }} css={SubBtnStyle} onClick={() => message.info('준비중')}>
        도움말
      </a>
      <a href="/#" style={{ width: 'calc( 50% - 5px )' }} css={SubBtnStyle} onClick={() => message.info('준비중')}>
        설정
      </a>
      {/* <span>
       <Icon type="bulb" />
       {intl.get('menu.sider.switch-theme')}
       </span>
       <Switch
       checkedChildren="dark"
       unCheckedChildren="light"
       checked={sideBarTheme === 'dark'}
       onChange={val => changeSiderTheme(val ? 'dark' : 'light')}
       /> */}
    </div>
  )

  const Logout = (
    <LogoutBtnWrap>
      <Button primary onClick={authStore.logout} css={LogoutBtn}>
        {intl.get('component.logout')}
      </Button>
    </LogoutBtnWrap>
  )

  return (
    <Drawer
      css={DrawerWrap}
      visible={!sideBarCollapsed}
      placement="left"
      onClose={onClose}
      maskClosable
      closable={false}
    >
      <Layout.Sider
        width="100%"
        trigger={null}
        theme={sideBarTheme}
        collapsible
        collapsed={sideBarCollapsed}
        css={SiderStyle}
      >
        {signedin === true ? <UserSiderMenu {...contentProps} /> : <GuestSiderMenu {...contentProps} />}
        <SiderMenu />
      </Layout.Sider>
      {!sideBarCollapsed && SubButton}
      {signedin && Logout}
    </Drawer>
  )
}

export default observer(Sider)
