/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { Fragment, useState } from 'react'
import { Row, Col, InputNumber } from 'antd'
import useRootStore from '@store/useRootStore'
import { formatNumber } from '@utils/utils'
import { observer } from 'mobx-react'
import Dock from 'react-dock'
import BettingCouponPopup from '@views/Popup/BettingCoupon'

// icon
import { GmoneyIco } from '@shared/Icon/MoneyIcon'
import { ArrowIco } from '@shared/Icon/MatchupIcon'

// css
import { Button, TxtLimit } from 'styles/base.style'
import { useOnMount, useOnUnmount } from '@utils/reactExt'
import {
  BetSlipBottomWrap,
  BetSlipStyle,
  NumSimple,
  RowLine,
  TopColStyle,
  NumButtonWrap,
  NumButton,
  Txt,
  Num,
  GmoneyStyle,
  MoneyInput,
  InputGmoney,
  BettingCouponStyle,
  ResetBtnStyle,
  ListBtnStyle,
  ArrowBtnStyle,
  ArrowStyle,
  BettingBtnStyle,
} from '@views/Matchup/BetSlip/index.style'

const Gmoney = (
  <GmoneyStyle className="gmoney">
    <GmoneyIco />
  </GmoneyStyle>
)
const Arrow = (
  <ArrowStyle className="arrow">
    <ArrowIco />
  </ArrowStyle>
)

let lastScrollY = 0

const PickBetSlip: React.FC = props => {
  const { globalStore, pickStore, authStore } = useRootStore()
  const { somethingPopup } = globalStore
  const { pickBetting = { club: {}, betMoney: 0, pick: undefined } } = pickStore
  const { club, betMoney, pick } = pickBetting
  const { userInfo } = authStore
  const { money } = userInfo
  const { pre_betmoney_min, pre_betmoney_max } = club

  // 베팅권 팝업
  const [visibleBetCoupon, setVisibleBetCoupon] = useState(false)
  const onShowBetCoupon = () => {
    setVisibleBetCoupon(true)
  }

  const onBetMoneyChange = (value: number) => {
    const asNumber = value || 0
    pickStore.setBetMoney(asNumber)
  }

  const doBet = () => {
    pickStore.betPick()
  }
  const onClickMoneyButton = (value: number) => {
    const plusNumber = value ? Number(value) : 0
    pickStore.setBetMoney(betMoney + plusNumber)
  }
  const onClickMoneyAllin = () => {
    pickStore.setBetMoney(Number(money))
  }

  const onClickMoneyReset = () => {
    pickStore.setBetMoney(0)
  }

  const onVisibleChange = e => {
    pickStore.setBettingPick('')
  }

  let visible = !!pick
  if (somethingPopup) {
    visible = false
  }

  if (visible === false) {
    return <Fragment />
  }

  // const minimizeDisplay = minimizeBetSlip ? 'block' : 'none'
  // const maximizeDisplay = !minimizeBetSlip ? 'block' : 'none'
  // track.receiverRead === 1 ? 'block' : 'none'

  // minimizeBetSlip null / undefined / true / false / '' / 1 /
  const simple = ['hide-simple']
  const detail = ['BetslipDetail']

  const foldNum = 999
  let calDividendRate = pick.dividendRate
  const dividendRate = Math.floor(calDividendRate * 100) / 100
  const dividendMoney = Math.ceil((betMoney * (dividendRate * 100)) / 100)
  const initialBetMoney = betMoney
  const formatedDividendMoney = formatNumber(Math.floor(dividendMoney))
  const bet_min_max =
    pre_betmoney_max > 0 ? `${formatNumber(pre_betmoney_min)} ~ ${formatNumber(pre_betmoney_max)}` : '제한없음'

  return (
    <Fragment>
      <Dock
        zIndex="9999"
        position="bottom"
        fluid={false}
        size="36"
        dimMode="opaque"
        isVisible={visible}
        onVisibleChange={onVisibleChange}
        dockStyle={{
          bottom: 0,
          width: '100%',
          minHeight: '1px',
          maxHeight: '400px',
          padding: '0',
          borderRadius: '10px 10px 0 0',
          boxShadow: '0 -10px 4px rgba(0, 0, 0, 0.15)',
          transition: 'all .3s',
        }}
      >
        <BetSlipBottomWrap>
          <div css={BetSlipStyle}>
            <Row /* style={{ display: minimizeDisplay }} */ className={simple.join(' ')}>
              <Col span={24} css={{ lineHeight: '1.8rem' }}>
                <Button css={ArrowBtnStyle}>{Arrow}</Button>
              </Col>
              <Col span={12} style={{ position: 'relative', top: '-2px', textAlign: 'center' }}>
                <Txt>폴드</Txt>
                <NumSimple>{foldNum}</NumSimple>
              </Col>
              <Col span={12} style={{ position: 'relative', top: '-2px', textAlign: 'center' }}>
                <Txt>배당</Txt>
                <NumSimple className="point">{dividendRate}</NumSimple>
              </Col>
            </Row>

            <div
              /* className="BetslipDetail"  */ /* style={{ display: maximizeDisplay }}  */ className={detail.join(' ')}
            >
              <Row type="flex" justify="space-between" css={RowLine}>
                <Col span={12} css={TopColStyle} style={{ paddingRight: 14 }}>
                  <Txt>보유머니</Txt>
                  {Gmoney}
                  <Num css={TxtLimit} className="top-num">
                    {formatNumber(money)}
                  </Num>
                </Col>
                <Col span={12} css={TopColStyle}>
                  <Txt>베팅한도</Txt>
                  {Gmoney}
                  <Num css={TxtLimit} className="top-num">
                    {bet_min_max}
                  </Num>
                </Col>

                <Col span={15} css={{ padding: '6px 0' }}>
                  <Txt css={{ display: 'inline-block', marginLeft: 2 }}>베팅머니</Txt>
                  <Button css={BettingCouponStyle} onClick={onShowBetCoupon}>
                    베팅권
                  </Button>
                  <MoneyInput className="betting-money">
                    <InputNumber size="small" value={initialBetMoney} onChange={onBetMoneyChange} />
                    <InputGmoney>{Gmoney}</InputGmoney>
                  </MoneyInput>
                </Col>

                {/* <Col span={9} css={{ padding: '6px 0' }}>
                  <Button css={ResetBtnStyle} onClick={() => matchupStore.clearCart()}>
                    폴드 초기화
                  </Button>
                </Col> */}

                <Col span={15}>
                  <NumButtonWrap>
                    <NumButton onClick={() => onClickMoneyButton(10000)}>10,000</NumButton>
                    <NumButton onClick={() => onClickMoneyButton(100000)}>100,000</NumButton>
                    <NumButton onClick={() => onClickMoneyButton(1000000)}>1,000,000</NumButton>
                    <NumButton onClick={() => onClickMoneyButton(1000)}>1,000</NumButton>
                    <NumButton onClick={onClickMoneyAllin}>올인</NumButton>
                    <NumButton onClick={onClickMoneyReset}>초기화</NumButton>
                  </NumButtonWrap>
                </Col>

                <Col span={9} style={{ paddingLeft: 12 }}>
                  <Row>
                    <Col style={{ lineHeight: '1.6rem' }}>
                      <Txt>폴드</Txt>
                      <Num>{foldNum}</Num>
                    </Col>
                    <Col style={{ lineHeight: '1.6rem' }}>
                      <Txt>배당</Txt>
                      <Num className="point">{dividendRate}</Num>
                    </Col>
                    <Col style={{ lineHeight: '1.6rem' }}>
                      <Txt style={{ display: 'block' }}>예상 적중금액</Txt>
                      {Gmoney}
                      <MoneyInput css={TxtLimit} className="expected">
                        {formatedDividendMoney}
                      </MoneyInput>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Button css={ListBtnStyle} disabled>
                베팅목록
              </Button>
              <Button primary onClick={doBet} css={BettingBtnStyle}>
                베팅하기
              </Button>
            </div>
          </div>
        </BetSlipBottomWrap>
      </Dock>

      {/* 베팅권 팝업 */}
      <BettingCouponPopup visible={visibleBetCoupon} setVisible={setVisibleBetCoupon} />
    </Fragment>
  )
}

export default observer(PickBetSlip)
