/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState } from 'react'
import { isString } from 'lodash'
import { Input, Row, Col, message } from 'antd'
import { Modal } from 'antd-mobile'
import dateFormat from 'dateformat'
import useRootStore from '@store/useRootStore'
import { BettingFoldGrouped, BettingFoldData } from '@store/bettingHistoryStore'
import { observer } from 'mobx-react'
import { ArrDayText } from '@game/util'
import { Button, Right, Left, TxtRight, Point, TxtLimit, TxtCenter } from 'styles/base.style'

// icon
import { HeartIco } from '@shared/Icon/MoneyIcon'

// css
import styled, { ThemeProps, Theme } from 'themes/theme'

const PickSaleWrap = styled.div`
  position: relative;
  height: 100%;
  overflow-x: visible;
  .ant-input {
    width: 99%;
    height: 30px;
    margin: 1px 1px;
    padding-left: 0;
    line-height: 3rem;
    border: none;
    color: ${props => props.theme.color.themeTxt};
    font-size: ${props => props.theme.font.medium};
    background: ${props => props.theme.color.TP} !important;
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 22px;
    left: 50%;
    width: 100%;
    height: 10px;
    border-bottom: 1px solid ${props => props.theme.color.disabled};
    transform: translate(-50%, 0);
  }
`
const RowStyle = css`
  margin: 2px 0;
  line-height: 2.8rem;
  text-align: left;
`
const InputWrap = styled.div`
  position: relative;
  width: 100%;
  /* 판매가 input */
  .ant-input {
    z-index: 1;
    position: relative;
    text-align: right;
    line-height: 3rem;
    color: ${props => props.theme.color.themeTxt};
    font-size: ${props => props.theme.font.large};
    background: ${props => props.theme.color.lowestBg} !important;
    border: none;
    border-radius: 50px;
  }
`
const Txt = styled.span`
  margin-right: 6px;
  font-size: ${props => props.theme.font.small};
  color: ${props => props.theme.color.detail};
  p {
    margin: 0 3px;
    font-size: inherit;
    color: inherit;
  }
  &.price {
    font-size: ${props => props.theme.font.medium};
  }
`
const ListWrap = styled.div`
  z-index: 2;
  position: relative;
  left: -20px;
  width: 100vw;
  height: 140px;
  overflow-x: hidden;
  overflow-y: scroll;
`
const ModalTxt = styled.p`
  display: block;
  margin: 10px 0 14px;
  text-align: left;
  font-size: ${props => props.theme.font.small};
  color: ${props => props.theme.color.detail};
`
const SendBtnStyle = css`
  left: 0;
  bottom: 0;
  width: 100%;
  height: 36px;
`
const MoneyStyle = styled.span`
  position: relative;
  float: right;
  top: 4px;
  width: 14px;
  margin: 0 6px 0 4px;
  &::after {
    content: '';
    display: block;
    clear: both;
  }
`
const HiddenWrap = styled.div`
  position: relative;
  width: 100%;
  padding: 9.5px 20px;
  line-height: 2.5rem;
  text-align: left;
  background: ${props => props.theme.color.contentsBg};
  * {
    font-size: ${props => props.theme.font.small};
    color: ${props => props.theme.color.detail};
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
const League = css`
  margin-bottom: -4px;
`
const ItemDate = styled.span`
  position: relative;
  top: 2px;
  color: ${props => props.theme.color.detail};
`
const TeamWrap = styled.div`
  position: relative;
  width: 100%;
  top: 2px;
  float: right;
  text-align: right;
`
const ListItemFoldWrap = styled.div`
  border-bottom: ${props => props.theme.border.line};
  &:last-of-type {
    border: none;
  }
`
const Wrap = (theme: Theme) =>
  css`
    position: relative;
  `
const CenterWrap = (theme: Theme) =>
  css`
    z-index: 1;
    position: relative;
    height: 20px;
    line-height: 2rem;
    &::after {
      content: '';
      z-index: -1;
      display: block;
      position: absolute;
      top: 0;
      left: 50%;
      width: 250%;
      height: 20px;
      border-top: 1px solid ${theme.color.disabled};
      transform: translate(-50%, 0);
    }
    &:first-of-type::after {
      border: none;
    }
  `
const TxtWrapStyle = css`
  max-width: 55%;
  width: auto;
  white-space: nowrap;
  margin: 0 6px;
`
const TxtStyle = (props: ThemeProps) => css`
  position: relative;
  z-index: 1;
  margin-right: 5px;
  color: ${props.theme.color.disabled};
  font-size: ${props.theme.font.small};
`
const MyPickTxt = styled.span`
  ${TxtStyle};
`
const ResultTxt = styled.span`
  ${TxtStyle};
`
const TypeTxt = styled.span`
  color: ${props => props.theme.color.detail};
`
const TeamNameTxt = styled.span`
  float: right;
  width: auto;
  max-width: 44%;
  color: ${props => props.theme.color.themeTxt};
`
const Score = styled.span`
  width: 12%;
  float: right;
  text-align: center;
`
const ColStyle = (theme: Theme) => css`
  position: absolute !important;
  top: 0;
  left: 0;
`

// icon
const Heart = (
  <MoneyStyle>
    <HeartIco />
  </MoneyStyle>
)

function getMatchTrack(match: BettingFoldGrouped, fold: BettingFoldData) {
  const dateText = dateFormat(match.dateOfMatch, 'mm/dd')
  const timeText = dateFormat(match.dateOfMatch, 'HH:MM')
  const monthText = ArrDayText[match.dateOfMatch.getDay()]
  const dateOfMatchText = `${dateText}(${monthText}) ${timeText}`
  return (
    <HiddenWrap>
      <h3 css={League}>
        {match.sportName} - {match.tournamentName}
      </h3>
      <Row css={{ margin: '-10px 0 0' }} type="flex" justify="space-between">
        <Col span={6} style={{ maxWidth: 80 }}>
          <ItemDate>{dateOfMatchText}</ItemDate>
        </Col>
        <Col span={18}>
          <TeamWrap>
            {/* float: right로 했기 때문에 awayTeam이 먼저 나와야 합니다 */}
            <TeamNameTxt css={TxtLimit}>{match.homeTeamName}</TeamNameTxt>
            <Score>VS</Score>
            <TeamNameTxt css={TxtLimit}>{match.awayTeamName}</TeamNameTxt>
          </TeamWrap>
        </Col>
      </Row>

      <ListItemFoldWrap>
        <Col css={Wrap}>
          <Row type="flex" justify="end" css={CenterWrap}>
            <Col span={8} css={ColStyle}>
              {fold.marketName}
            </Col>
            <Col css={[TxtCenter, TxtWrapStyle]}>
              <MyPickTxt>선택</MyPickTxt>-&nbsp;
              <TypeTxt>{fold.selectionName}</TypeTxt>
            </Col>
            <Col css={[TxtCenter, TxtWrapStyle]}>
              <ResultTxt>결과</ResultTxt>-&nbsp;
              <TypeTxt>대기</TypeTxt>
            </Col>
          </Row>
        </Col>
      </ListItemFoldWrap>
    </HiddenWrap>
  )
}

const PickSalePopup: React.FC = props => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')

  const { bettingHistoryStore, pickStore } = useRootStore()
  const { publishPickRecord } = bettingHistoryStore
  const visible = !!publishPickRecord

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setTitle(value)
    // console.log(title)
  }

  const onPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/
    if ((isString(value) && reg.test(value)) || value === '') {
      setPrice(value)
    }
    // console.log(price)
  }

  const onClickPublish = async () => {
    let priceAsNumber = 0
    try {
      priceAsNumber = Number(price)
    } catch (err) {}

    if (title.length === 0) {
      message.warn('픽제목을 입력해주세요.')
      return
    }
    if (priceAsNumber === 0) {
      message.warn('판매가를 입력해주세요.')
      return
    }

    const ret = await pickStore.publishPick(publishPickRecord.betId, title, priceAsNumber)
    if (ret === true) {
      bettingHistoryStore.setPublishPickBetting('')
    }
  }

  const eleMatchTracks = []
  if (publishPickRecord) {
    for (const matchId in publishPickRecord.folds) {
      const match = publishPickRecord.folds[matchId]
      for (const fold of match.data) {
        const track = getMatchTrack(match, fold)
        eleMatchTracks.push(track)
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
        bettingHistoryStore.setPublishPickBetting('')
      }}
      className="short-top"
    >
      <PickSaleWrap>
        <Input maxLength={20} placeholder="픽 제목을 입력해주세요. (20자 이내)" onChange={onTitleChange} />
        <Row type="flex" justify="space-between" css={RowStyle}>
          <Col span={5}>
            <Txt>폴드</Txt>
            10
          </Col>
          <Col span={5}>
            <Txt>배당</Txt>
            <Point>3.78</Point>
          </Col>
          <Col span={14} css={Right}>
            <Txt style={{ margin: 0 }}>
              <p>베팅 마감</p>
              <p>8/20(화)</p>
              <p style={{ marginRight: 0 }}>21:55</p>
            </Txt>
          </Col>
        </Row>
        <ListWrap>{eleMatchTracks}</ListWrap>
        <Row type="flex" justify="space-between" css={[RowStyle, { marginTop: 14 }]}>
          <Col span={9} css={Left}>
            <Txt className="price">판매가</Txt>
          </Col>
          <Col span={13} css={TxtRight}>
            <InputWrap>
              <Input placeholder="판매가를 입력해주세요." maxLength={25} value={price} onChange={onPriceChange} />
            </InputWrap>
          </Col>
          <Col span={2}>{Heart}</Col>
        </Row>
        <ModalTxt>
          픽 판매 시 베팅 취소가 불가합니다. 판매가 완료되면 구매자는 G머니를 소진, 판매자에게는 하트로 변환되어
          지급됩니다.
        </ModalTxt>

        <Button primary css={SendBtnStyle} onClick={onClickPublish}>
          판매 등록하기
        </Button>
      </PickSaleWrap>
    </Modal>
  )
}
export default observer(PickSalePopup)
