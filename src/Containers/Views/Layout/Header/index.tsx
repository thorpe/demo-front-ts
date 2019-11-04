/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment, useState } from 'react'
import { observer } from 'mobx-react'
import { Popover, List } from 'antd'
import { Badge } from 'antd-mobile'
import intl from 'react-intl-universal'

import useRootStore from '@store/useRootStore'

// icon
import { MenuIco, MessageIco } from '@shared/Icon/MenuIcon'
import { LogoIco } from '@shared/Icon/LogoIcon'
import { AlramIco, ProfileIco } from '@shared/Icon/HeaderIcon'

// css
import { Button } from '@styles/base.style'
import { MenuBtnStyle, MenuStyle, LogoStyle, MainHeader, right, LoginBtnStyle, HeaderIcoStyle, IconStyle, BadgeStyle, ListWrap } from './index.style'

const Menu = (
  <MenuStyle>
    <MenuIco />
  </MenuStyle>
)
const AdvLogo = (
  <LogoStyle>
    <LogoIco />
  </LogoStyle>
)
const Alram = (
  <IconStyle className="alert">
    <AlramIco />
  </IconStyle>
)
const Message = (
  <IconStyle className="message">
    <MessageIco />
  </IconStyle>
)
const Profile = (
  <IconStyle className="profile">
    <ProfileIco />
  </IconStyle>
)

function Header() {
  const { globalStore, authStore, routerStore } = useRootStore()
  const [alertBtn, setalertBtn] = useState('')
  const [alertBtnColor, setAlertBtnColor] = useState('alert')
  const onClickAlertBtn = async () => {
    if (alertBtn === 'click') {
      setalertBtn('')
      setAlertBtnColor('alert')
    } else {
      setalertBtn('click')
      setAlertBtnColor('alert click')
    }
  }

  const { signedin } = authStore
  const [visiblePopover, setVisiblePopover] = useState(false)
  const onShowPopover = () => {
    setVisiblePopover(true)
  }
  const PopoverSource = []
  const PopoverList = [
    <Fragment>
      <Button
        className="alert-bakcground"
        onClick={() => {
          onClickAlertBtn()
          setVisiblePopover(false)
        }}
      />

      <ListWrap className="popover">
        <List
          bordered
          dataSource={PopoverSource}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </ListWrap>
    </Fragment>,
  ]

  const rightContent = []
  if (signedin === true) {
    const noticeButtonClass = css({
      display: 'inline-block',
      lineHeight: '3.5rem',
      cursor: 'pointer',
      transition: 'all 0.3s',
    })
    rightContent.push(
      <div key="rightContent" css={right}>
        <span css={[noticeButtonClass, { opened: true }]}>
          <Button
            css={HeaderIcoStyle}
            style={{ top: '-1px' }}
            onClick={() => {
              globalStore.toggleMessageCollapsed(false)
            }}
          >
            {Message}
            <Badge text={1} overflowCount={99} css={BadgeStyle} />
          </Button>

          <Popover
            visible={visiblePopover}
            className="alert"
            placement="bottom"
            content={PopoverList}
            trigger="click"
          >
            <Button
              css={HeaderIcoStyle}
              style={{ top: '3px' }}
              onClick={() => {
                onShowPopover()
                onClickAlertBtn()
              }}
              className={alertBtnColor}
            >
              {Alram}
            </Button>
          </Popover>

          <a href="/#/my-info">{Profile}</a>
        </span>
        {/* <NoticeIconView/> */}
        {/* <SelectLang className={styles.action} key="selectlang" /> */}
      </div>,
    )
  } else if (signedin === false) {
    rightContent.push(
      <div key="rightContent" css={right}>
        <Button
          primary
          key="guest"
          onClick={() => {
            // globalStore.toggleLoginCollapsed(false)
            routerStore.replace('login')
          }}
          css={LoginBtnStyle}
        >
          {intl.get('component.login')}
        </Button>
        {}
        {}
      </div>,
    )
  }

  console.log('render Header')

  return (
    <MainHeader>
      <Button onClick={() => globalStore.toggleSideBarCollapsed(false)} css={MenuBtnStyle}>
        {Menu}
      </Button>
      <a href="/#/home">{AdvLogo}</a>
      {rightContent}
    </MainHeader>
  )
}

export default observer(Header)
