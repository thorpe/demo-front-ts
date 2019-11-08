/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { Fragment, useState } from 'react'
import { Row, Col } from 'antd'
import { Modal } from 'antd-mobile'
import useRootStore from '@store/useRootStore'
import { observer } from 'mobx-react'
import { Button, Point } from 'styles/base.style'
import { formatNumber } from '@utils/utils'

// icon
import { GmoneyIco } from '@shared/Icon/MoneyIcon'
// css
import { PopupBtnStyle, PopupTxt, Num, PickPopupRowStyle, GmoneyStyle } from './index.style'

const Gmoney = (
  <GmoneyStyle>
    <GmoneyIco />
  </GmoneyStyle>
)

const PickPurchase: React.FC = props => {
  const [visibleChild, setVisibleChild] = useState(false)

  const { authStore, pickStore } = useRootStore()
  const { userInfo } = authStore
  const { purchasePickTrack } = pickStore
  const visible = !!purchasePickTrack

  let price
  let remain
  if (userInfo && purchasePickTrack) {
    price = formatNumber(purchasePickTrack.priceMoney)
    remain = formatNumber(userInfo.money - price)
  }

  const onClickBuy = async () => {
    const ret = await pickStore.purchasePick()
    if (ret === true) {
      setVisibleChild(true)
    } else {
      pickStore.setPurchasePick('')
    }
  }

  return (
    <Fragment>
      <Modal
        popup
        visible={visible}
        maskClosable
        animationType="slide-up"
        onClose={() => {
          pickStore.setPurchasePick('')
        }}
        title="해당 픽을 구매하시겠습니까?"
      >
        <Row css={PickPopupRowStyle}>
          <Col span={8}>
            <PopupTxt>판매가</PopupTxt>
          </Col>
          <Col span={16}>
            {Gmoney}
            <Num className="pick-popup">{price}</Num>
          </Col>
        </Row>

        <Row css={PickPopupRowStyle}>
          <Col span={8}>
            <PopupTxt>구매 후 잔액</PopupTxt>
          </Col>
          <Col span={16}>
            {Gmoney}
            <Num className="pick-popup">{remain}</Num>
          </Col>
        </Row>
        <Point style={{ display: 'inline-block', marginTop: 10, lineHeight: '1.6rem', textAlign: 'left' }}>
          픽 구매에 대한 책임은 구매자 본인에게 있으며, 본사는 해당 픽에 대한 보상 및 책임을 지지 않으니 신중히
          구매하시기 바랍니다.
        </Point>

        <Button
          primary
          css={PopupBtnStyle}
          onClick={() => {
            onClickBuy()
          }}
        >
          동의 후 구매하기
        </Button>
      </Modal>

      {/* 두번째 모달 (픽 구매 완료 팝업) */}
      <Modal
        transparent
        visible={visibleChild}
        maskClosable
        onClose={() => {
          setVisibleChild(false)
        }}
        title="픽 구매 완료"
      >
        <PopupTxt>
          구매한 픽으로 베팅이 가능합니다.
          <br />
          내가 구매한 픽으로 이동하시겠습니까?
        </PopupTxt>
        <Row>
          <Col span={12}>
            <Button
              css={PopupBtnStyle}
              className="two-button cancel"
              onClick={() => {
                pickStore.setPurchasePick('')
                setVisibleChild(false)
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
                pickStore.setPurchasePick('')
                pickStore.setTab(2)
                setVisibleChild(false)
              }}
              className="two-button"
            >
              이동
            </Button>
          </Col>
        </Row>
      </Modal>
    </Fragment>
  )
}
export default observer(PickPurchase)
