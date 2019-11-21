/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { observer } from 'mobx-react'
import { Drawer, Toast } from 'antd-mobile'
import intl from 'react-intl-universal'
import useRootStore from '@store/useRootStore'
import { Button, mq } from '@styles/base.style'
import styled, { Theme } from '@themes/theme'


import SideMenuWarp from './SideMenuWarp'
import SideMenuGuest from './SideMenuGuest'
import SideMenuUser from './SideMenuUser'



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
  width: 80%;
  height:100%;
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


const Sider: React.FC<{}> = props => {
  const { globalStore, authStore } = useRootStore()
  const { sideBarCollapsed, isLogin } = globalStore

  globalStore.toLoginByLocalStorage()

  const onClose = () => {
    globalStore.toggleSideBarCollapsed(true)
  }

  const contentProps = {
    ...props,
    onClose,
  }

  const Logout = (
    <LogoutBtnWrap>
      <Button primary onClick={authStore.logout} css={LogoutBtn}>
        {intl.get('component.logout')}
      </Button>
    </LogoutBtnWrap>
  )

  const sidebar = (
    <div css={SubBtnWrapStyle}>

      {isLogin == true ? <SideMenuUser {...contentProps} /> : <SideMenuGuest {...contentProps} />}
      <SideMenuWarp />
      <a
        href="https://www.cafe-latte.co.kr"
        target="_blank"
        rel="noopener noreferrer"
        css={SubBtnStyle}
        style={{ margin: '0 0 10px' }}
      >
         공식 카페
      </a>
      <a href="/#" style={{ width: 'calc( 50% - 5px )' }} css={SubBtnStyle} onClick={() => Toast.info('test', 1)}>
        도움말
      </a>
      <a href="/#" style={{ width: 'calc( 50% - 5px )' }} css={SubBtnStyle} onClick={() => Toast.info('test', 1)}>
        설정
      </a>
      <a href="/#" style={{ width: 'calc( 50% - 5px )' }} css={SubBtnStyle} onClick={onClose}>
        닫기
      </a>
      {Logout}
    </div>
  )


  return (
    <Drawer
      className="my-drawer"
      style={{
        overflow: 'auto',
        height: '100%',
        paddingBottom: '108px',
      }}
      sidebar={sidebar}
      contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
      open={!sideBarCollapsed}
      onOpenChange={onClose}
    >
    </Drawer>
  )
}

export default observer(Sider)
