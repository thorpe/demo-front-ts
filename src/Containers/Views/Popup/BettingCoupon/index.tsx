/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { Fragment, useState } from 'react'
import { Row, Col, Pagination, message } from 'antd'
import { Modal } from 'antd-mobile'
import { observer } from 'mobx-react'

// image
import BetCouponImg1 from '@assets/images/icon/matchup_icon/betting-coupon-10000.png'
import BetCouponImg2 from '@assets/images/icon/matchup_icon/betting-coupon-100000.png'
import BetCouponImg3 from '@assets/images/icon/matchup_icon/betting-coupon-500000.png'
import { GmoneyIco } from '@shared/Icon/MoneyIcon'

// css
import { Button, Point, Right, Left } from 'styles/base.style'
import { PopupBtnStyle, Wrap, ButtonStyle, BetCouponImgWrap, BetCouponImg, GmoneyStyle, TotalNum } from './index.style'

// image
const BetCoupon1 = <img src={BetCouponImg1} alt="베팅권 10,000" css={BetCouponImg} />
const BetCoupon2 = <img src={BetCouponImg2} alt="베팅권 100,000" css={BetCouponImg} />
const BetCoupon3 = <img src={BetCouponImg3} alt="베팅권 500,000" css={BetCouponImg} />
const Gmoney = (
  <GmoneyStyle className="gmoney">
    <GmoneyIco />
  </GmoneyStyle>
)

function itemRender(current, type, originalElement) {
  if (type === 'prev') {
    return (
      <Button css={ButtonStyle} className="left">
        -
      </Button>
    )
  }
  if (type === 'next') {
    return (
      <Button css={ButtonStyle} className="right">
        +
      </Button>
    )
  }
  return originalElement
}

interface BettingCouponDrawerProps {
  visible: boolean
  setVisible: (arg: boolean) => void
}

const BettingCouponPopup: React.FC<BettingCouponDrawerProps> = (props: BettingCouponDrawerProps) => {
  const { visible, setVisible } = props
  const [count, setCount] = useState(1)

  const onChangeCount = (page: number, pageSize?: number) => {
    setCount(page)
    message.info(count)
  }
  return (
    <Fragment>
      <Modal
        popup
        visible={visible}
        maskClosable
        animationType="slide-up"
        onClose={() => {
          setVisible(false)
        }}
        title="베팅권 선택"
        className="betting-coupon short-top"
      >
        <Point style={{ display: 'inline-block', marginBottom: 10, lineHeight: '1.6rem' }}>
          베팅권은 1.4배당 이상에서만 사용할 수 있습니다.
        </Point>

        <Wrap>
          <BetCouponImgWrap>{BetCoupon1}</BetCouponImgWrap>
          <Row style={{ width: 'calc(100% - 80px)', paddingLeft: 16, lineHeight: '2.5rem' }}>
            <Col span={14} css={Left}>
              10,000 {Gmoney} 베팅권
            </Col>
            <Col span={10} css={Right}>
              <Point>보유 &nbsp;15개</Point>
            </Col>
            {/* total = 보유갯수 */}
            <Pagination simple defaultCurrent={0} total={100} itemRender={itemRender} onChange={onChangeCount} />
          </Row>
        </Wrap>
        <Wrap>
          <BetCouponImgWrap>{BetCoupon2}</BetCouponImgWrap>
          <Row style={{ width: 'calc(100% - 80px)', paddingLeft: 16, lineHeight: '2.5rem' }}>
            <Col span={14} css={Left}>
              100,000 {Gmoney} 베팅권
            </Col>
            <Col span={10} css={Right}>
              <Point>보유 &nbsp;15개</Point>
            </Col>
            {/* total = 보유갯수 */}
            <Pagination simple defaultCurrent={0} total={100} itemRender={itemRender} onChange={onChangeCount} />
          </Row>
        </Wrap>
        <Wrap>
          <BetCouponImgWrap>{BetCoupon3}</BetCouponImgWrap>
          <Row style={{ width: 'calc(100% - 80px)', paddingLeft: 16, lineHeight: '2.5rem' }}>
            <Col span={14} css={Left}>
              500,000 {Gmoney} 베팅권
            </Col>
            <Col span={10} css={Right}>
              <Point>보유 &nbsp;15개</Point>
            </Col>
            {/* total = 보유갯수 */}
            <Pagination simple defaultCurrent={0} total={100} itemRender={itemRender} onChange={onChangeCount} />
          </Row>
        </Wrap>

        <Row style={{ position: 'relative', top: 4 }}>
          <Col span={12} css={Left} style={{ marginTop: 4, lineHeight: '1.4rem' }}>
            <p css={theme => ({ color: theme.color.detail })}> 총 사용 베팅권</p>
          </Col>
          <Col span={12} css={Right}>
            <TotalNum>220,000 {Gmoney}</TotalNum>
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <Button
              css={PopupBtnStyle}
              className="two-button cancel"
              onClick={() => {
                setVisible(false)
              }}
            >
              취소
            </Button>
          </Col>
          <Col span={12}>
            <Button
              primary
              css={PopupBtnStyle}
              onClick={() => {
                setVisible(false)
              }}
              className="two-button"
            >
              선택 완료
            </Button>
          </Col>
        </Row>
      </Modal>
    </Fragment>
  )
}

export default observer(BettingCouponPopup)
