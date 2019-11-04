/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { Fragment } from 'react'
import intl from 'react-intl-universal'
import { Row, Col } from 'antd'
import { formatNumber } from '@helpers/utils'
import useRootStore from '@store/useRootStore'

// icon
import { GmoneyIco, ScashIco, HeartIco } from '@shared/Icon/MoneyIcon'

// css
import { Button, TxtLimit } from '@styles/base.style'
import { UserInfo } from '@store/authStore'
import {
  MoneyStyle,
  Brand,
  CloseBtn,
  CloseBtnTxt,
  MenuContainer,
  UserType,
  UserName,
  UserBtn,
  UserSideBtn,
  MoneyWrap,
  MoneyRow,
  MoneyRowWrap,
  MoneyRowWrapNum,
} from './index.style'

// icon
const Gmoney = (
  <MoneyStyle>
    <GmoneyIco />
  </MoneyStyle>
)
const Heart = (
  <MoneyStyle>
    <HeartIco />
  </MoneyStyle>
)
const Scash = (
  <MoneyStyle>
    <ScashIco />
  </MoneyStyle>
)

// import SiderMenu, { SiderMenuProps } from '@ant-design/pro-layout/lib/SiderMenu/SiderMenu';
// import SiderMenu from './SiderMenu'

export interface UserSiderMenuProps {
  onClose: () => void
  userInfo: UserInfo
}

const UserSiderMenu: React.FC<UserSiderMenuProps> = (props: UserSiderMenuProps) => {
  const { onClose, userInfo } = props
  const { nick = 'Unknown', job, money, heart, cash } = userInfo

  const jobName = job === 2 ? '오즈' : '베터'

  const { routerStore } = useRootStore()
  const onClickScash = () => {
    routerStore.history.push(`/scash`)
  }

  return (
    <Fragment>
      <div key="user">
        <div css={Brand}>
          <Button onClick={onClose} css={CloseBtn}>
            <p css={CloseBtnTxt}>닫기</p>
          </Button>

          <h1 css={UserName}>{nick}</h1>
          <p css={UserType}>{jobName}</p>
        </div>
        <div css={MenuContainer}>
          <div key="user" css={MoneyWrap}>
            {/* <Divider orientation="left">{intl.get('menu.sider.my-info')}</Divider> */}
            <Row type="flex" justify="space-between">
              <Col span={24} css={MoneyRow}>
                <p className="Txt">G{intl.get('money')}</p>
                <span css={MoneyRowWrap}>
                  <MoneyRowWrapNum css={TxtLimit}>{formatNumber(money)}</MoneyRowWrapNum>
                  {Gmoney}
                </span>
              </Col>

              <Col span={24} css={MoneyRow}>
                <p className="Txt">{intl.get('heart')}</p>
                <span css={MoneyRowWrap}>
                  <MoneyRowWrapNum>{formatNumber(heart)}</MoneyRowWrapNum>
                  {Heart}
                </span>
              </Col>

              <Col span={24} css={MoneyRow}>
                <p className="Txt">S{intl.get('cash')}</p>
                <span css={MoneyRowWrap}>
                  <MoneyRowWrapNum>{formatNumber(cash)}</MoneyRowWrapNum>
                  {Scash}
                </span>
              </Col>
            </Row>
            <Row css={UserBtn}>
              <Col>
                <Button
                  primary
                  css={UserSideBtn}
                  onClick={() => {
                    onClickScash()
                    onClose()
                  }}
                >
                  S캐시 충전
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default UserSiderMenu
