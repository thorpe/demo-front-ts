/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
// import { message } from 'antd'
import { Modal } from 'antd-mobile'
import useRootStore from '@store/useRootStore'
import { observer } from 'mobx-react'
import { Button, mq, TxtLimit } from 'styles/base.style'
import { CartItem } from '@store/matchupStore'

// css
import styled /* , { ThemeProps, Theme }  */ from 'themes/theme'
// import { getDayFromWeek } from '@amcharts/amcharts4/.internal/core/utils/Utils'

const ChangeRateWrap = styled.div`
  position: relative;
  height: 100%;
  overflow-x: visible;
`
const ModalTxt = styled.p`
  display: block;
  margin: 0 auto;
  color: ${props => props.theme.color.tabSubTxt};
`
const ListWrap = styled.div`
  z-index: 2;
  position: relative;
  left: -20px;
  width: 100vw;
  height: 122px;
  margin: 10px 0;
  overflow-x: hidden;
  overflow-y: scroll;
`
const SendBtnStyle = css`
  left: 0;
  bottom: 0;
  width: 100%;
  height: 36px;
`
const HiddenWrap = styled.div`
  position: relative;
  width: 100%;
  height: 26px;
  padding: 0 20px;
  line-height: 2.5rem;
  text-align: left;
  background: ${props => props.theme.color.contentsBg};
  * {
    font-size: ${props => props.theme.font.small};
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-top: ${props => props.theme.border.line};
  }
  &:last-of-type::before {
    display: none;
  }
`
const TeamWrap = styled.div`
  position: relative;
  width: calc(58.5% - 4px); /* 4px은 padding-left 값 */
  float: left;
  text-align: left;
  ${mq[0]} {
    width: calc(52.6% - 4px);
  }
`
const TeamNameTxt = styled.span`
  float: left;
  width: auto;
  max-width: 42%;
  color: ${props => props.theme.color.themeTxt};
`
const Score = styled.span`
  width: 16%;
  float: left;
  text-align: center;
  color: ${props => props.theme.color.detail};
`
const RateWrap = styled.div`
  position: relative;
  width: auto;
  max-width: calc(41.5% + 4px); /* 4px은 padding-left 값 */
  float: left;
  padding-left: 4px;
  ${mq[0]} {
    max-width: calc(47.4% + 4px);
  }
  &::after {
    content: '';
    display: block;
    clear: both;
  }
`
const Origin = styled.span`
  margin-right: 4px;
  .rate {
    color: ${props => props.theme.color.tabSubTxt};
  }
`
const Change = styled.span`
  margin-left: 4px;
  .rate.up {
    color: ${props => props.theme.color.up};
  }
  .rate.down {
    color: ${props => props.theme.color.down};
  }
`
const Rate = styled.span`
  margin-left: 4px;
  color: ${props => props.theme.color.tabSubTxt};
`

const generateRow = (item: CartItem) => {
  let ele
  const { changeRate = { from: null, to: null } } = item
  const { from, to } = changeRate
  if (from && to) {
    let className = 'rate up'
    if (from.rate > to.rate) {
      className = 'rate down'
      /* 배당률 올랐을 때 */
    }
    ele = (
      <HiddenWrap>
        <TeamWrap>
          <TeamNameTxt css={TxtLimit}>{item.match.homeTeamName}</TeamNameTxt>
          <Score>VS</Score>
          <TeamNameTxt css={TxtLimit}>{item.match.awayTeamName}</TeamNameTxt>
        </TeamWrap>
        <RateWrap>
          <Origin>
            기존<Rate className="rate"> {from.rate}</Rate>
          </Origin>
          &#8594;
          <Change>
            변경<Rate className={className}> {to.rate}</Rate>
          </Change>
        </RateWrap>
      </HiddenWrap>
    )
  }

  return ele
}

const ChangeRatePopup: React.FC = props => {
  const { matchupStore } = useRootStore()
  const { collapsedChangeRate, cart, detailCart, detailVisibility } = matchupStore

  const targetCart = detailVisibility === true ? detailCart : cart
  let count = 0
  for (const el of targetCart) {
    if (el && el.changeRate) {
      count += 1
    }
  }
  const visible = collapsedChangeRate === false && count > 0

  const eleContents = []
  for (const item of targetCart) {
    if (item) {
      const el = generateRow(item)
      if (el) {
        eleContents.push(el)
      }
    }
  }

  return (
    <Modal
      popup
      visible={visible}
      maskClosable
      animationType="slide-up"
      onClose={() => {
        matchupStore.toggleChangeRateCollapsed(true)
      }}
      title="배당률이 변경되었습니다."
      className="short-top change-rate"
    >
      <ChangeRateWrap>
        <ModalTxt>변경된 배당률을 확인하시겠습니까?</ModalTxt>
        <ListWrap>{eleContents}</ListWrap>

        <Button
          primary
          css={SendBtnStyle}
          onClick={() => {
            matchupStore.toggleChangeRateCollapsed(true)
            matchupStore.toggleBetSlipSiderCollapsed(false)
          }}
        >
          확인
        </Button>
      </ChangeRateWrap>
    </Modal>
  )
}
export default observer(ChangeRatePopup)
