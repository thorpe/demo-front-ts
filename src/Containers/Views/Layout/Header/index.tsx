/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment, useState } from 'react'
import { observer } from 'mobx-react'
import { Popover, List, Row, Col, message } from 'antd'
import { Badge } from 'antd-mobile'
import intl from 'react-intl-universal'

import useRootStore from '@store/useRootStore'

// icon
import { MenuIco, MessageIco } from '@shared/Icon/MenuIcon'
import { LogoIco } from '@shared/Icon/LogoIcon'
import { AlramIco, ProfileIco } from '@shared/Icon/HeaderIcon'

// css
import { Button, TxtLimit, Point } from '@styles/base.style'
import { MenuBtnStyle, MenuStyle, LogoStyle, MainHeader, right, LoginBtnStyle, HeaderIcoStyle, IconStyle, BadgeStyle, ListBtnStyle, ListWrap, ListRowStyle, DummyStyle, PopoverDate, PopoverTitle, PopoverContent } from './index.style'

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
const PopoverDummy = (
  <DummyStyle>
    <LogoIco />
  </DummyStyle>
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
  const PopoverSource = [
    <Button css={ListBtnStyle} onClick={() => message.info('click')}>
      <Row type="flex" justify="space-between" css={ListRowStyle}>
        <Col span={3}>{PopoverDummy}</Col>
        <Col span={21}>
          <PopoverDate>8/20(화) 21:55</PopoverDate>
          <PopoverTitle css={TxtLimit}>
            1폴드 <Point className="hit">적중</Point> 37,000G을(를) 획득하였습니다.
          </PopoverTitle>
          <PopoverContent css={TxtLimit}>가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차카타파</PopoverContent>
        </Col>
      </Row>
    </Button>,
    <Button css={ListBtnStyle} onClick={() => message.info('click')}>
      <Row type="flex" justify="space-between" css={ListRowStyle}>
        <Col span={3}>{PopoverDummy}</Col>
        <Col span={21}>
          <PopoverDate>test1</PopoverDate>
          <PopoverTitle css={TxtLimit}>최대 20자</PopoverTitle>
          <PopoverContent css={TxtLimit}>최대 33자</PopoverContent>
        </Col>
      </Row>
    </Button>,
    <Button css={ListBtnStyle} onClick={() => message.info('click')}>
      <Row type="flex" justify="space-between" css={ListRowStyle}>
        <Col span={3}>{PopoverDummy}</Col>
        <Col span={21}>
          <PopoverDate>최대 글자수 테스트</PopoverDate>
          <PopoverTitle css={TxtLimit}>가나다라마바사아자차가나다라마바사아자차</PopoverTitle>
          <PopoverContent css={TxtLimit}>가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차카타파</PopoverContent>
        </Col>
      </Row>
    </Button>,
    <Button css={ListBtnStyle} onClick={() => message.info('click')}>
      <Row type="flex" justify="space-between" css={ListRowStyle}>
        <Col span={3}>{PopoverDummy}</Col>
        <Col span={21}>
          <PopoverDate>부가 내용 없는 알림</PopoverDate>
          <PopoverTitle css={TxtLimit}>가나다라마바사아자차가나다라마바사아자차</PopoverTitle>
          {/* <PopoverContent css={TxtLimit}>
           가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차카타파
           </PopoverContent> */}
        </Col>
      </Row>
    </Button>,
  ]
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
          // header={ListHeader}
          // footer={<div>Footer</div>}
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
          {/* <Badge
           text={13}
           overflowCount={99}
           style={{ boxShadow: 'none' }}
           css={{
           fontSize: '1.8rem',
           }}
           > */}
          {/* <Icon
           type="bell"
           css={{
           padding: '4px',
           verticalAlign: 'middle',
           }}
           /> */}
          {/* </Badge> */}
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
            // title={
            //   <Fragment>
            //     <span>알림</span>
            //     {/* <Button className="read-btn">모두 읽은 상태로 표시</Button> */}
            //     <Button
            //       className="alert-bakcground"
            //       onClick={() => {
            //         setVisiblePopover(false)
            //       }}
            //     />
            //   </Fragment>
            // }
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
