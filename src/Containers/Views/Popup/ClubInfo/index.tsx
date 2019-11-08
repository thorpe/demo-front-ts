/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { Fragment } from 'react'
import { Row, Col } from 'antd'
import intl from 'react-intl-universal'

// icon
import { GmoneyIco } from '@shared/Icon/MoneyIcon'
import {
  CrossOnIco,
  CrossOffIco,
  WDLOnIco,
  WDLOffIco,
  HandiOffIco,
  HandiOnIco,
  SpecialOnIco,
  SpecialOffIco,
  LiveOffIco,
  LiveOnIco,
} from '@shared/Icon/ClubIcon'

// css
import styled, { ThemeProps } from 'themes/theme'
import { TxtLimit, mq, mqMin } from 'styles/base.style'
import { formatNumber } from '@utils/utils'
import { ClubInfoItem } from '@store/clubStore'

const ClubPopup = styled.div`
  text-align: left;
`
const PopupTitle = styled.h2`
  display: block;
  margin: 0;
  padding: 0 28px;
  font-size: ${props => props.theme.font.large};
  color: ${props => props.theme.color.themeTxt};
  text-align: left;
`
const PopupContents = styled.div`
  padding: 8px 28px;
  border-bottom: ${props => props.theme.border.line};
`
const LimitWrap = styled.span`
  position: relative;
  display: inline-block;
  width: 48%;
`
const PopupSubTitle = styled.h3`
  display: block;
  margin: 4px 0;
  color: ${props => props.theme.color.detail};
  font-size: ${props => props.theme.font.small};
  text-align: left;
`
const Num = styled.span`
  float: right;
  width: 87%;
  color: ${props => props.theme.color.themeTxt};
  text-align: right;
  ${mq[0]} {
    width: 85%;
  }
`
const GmoneyStyle = styled.span`
  position: relative;
  top: 2px;
  float: right;
  width: 14px;
  margin-left: 4px;
`
const OzWrap = css`
  text-align: center;
`
const OzIco = styled.span`
  position: relative;
  top: 2px;
  display: block;
  text-align: center;
`
const IcoStyle = styled.span`
  width: 36px;
`
const OzText = styled.span`
  font-size: ${props => props.theme.font.small};
  color: ${props => props.theme.color.themeTxt};
`
const CommonTitleStyle = (props: ThemeProps) =>
  css`
    display: block;
    width: 100%;
    padding-left: 10px;
    color: ${props.theme.color.themeTxt};
    white-space: normal;
    overflow: hidden;
  `
const NewsTitle = styled.h4`
  ${CommonTitleStyle}
  border-left: 4px solid #56dfc4;
`
const EventTitle = styled.h4`
  ${CommonTitleStyle}
  border-left: 4px solid #f39800;
`
const Txt = styled.p`
  height: auto;
  max-height: 62px;
  padding-left: 10px;
  overflow-y: scroll;
  color: ${props => props.theme.color.themeTxt};
  font-size: ${props => props.theme.font.small};
  white-space: normal;
  ${mqMin[1]} {
    max-height: 99px;
  }
`
// icon
const Gmoney = (
  <GmoneyStyle>
    <GmoneyIco />
  </GmoneyStyle>
)
/* 크로스 */
const CrossOn = (
  <IcoStyle>
    <CrossOnIco />
  </IcoStyle>
)
const CrossOff = (
  <IcoStyle>
    <CrossOffIco />
  </IcoStyle>
)
/* 승무패 */
const WDLOn = (
  <IcoStyle>
    <WDLOnIco />
  </IcoStyle>
)
const WDLOff = (
  <IcoStyle>
    <WDLOffIco />
  </IcoStyle>
)
/* 핸디캡/언더오버 */
const HandiOn = (
  <IcoStyle>
    <HandiOnIco />
  </IcoStyle>
)
const HandiOff = (
  <IcoStyle>
    <HandiOffIco />
  </IcoStyle>
)
/* 스페셜 */
const SpecialOn = (
  <IcoStyle>
    <SpecialOnIco />
  </IcoStyle>
)
const SpecialOff = (
  <IcoStyle>
    <SpecialOffIco />
  </IcoStyle>
)
/* 라이브 */
const LiveOn = (
  <IcoStyle>
    <LiveOnIco />
  </IcoStyle>
)
const LiveOff = (
  <IcoStyle>
    <LiveOffIco />
  </IcoStyle>
)

interface ClubInfoPopupProps {
  club: ClubInfoItem
  onCloseClubDetail: () => void
}

const ClubInfoPopup: React.FC<ClubInfoPopupProps> = (props: ClubInfoPopupProps) => {
  const { club, onCloseClubDetail } = props
  if (!club) {
    onCloseClubDetail()
    return <Fragment />
  }

  const {
    name,
    isCrossSupport,
    isWaySupport,
    isHandicapSupport,
    isSpecialSupport,
    isLiveSupport,
    pre_betmoney_max,
    live_betmoney_max,
  } = club

  const pre_betmoney_text = pre_betmoney_max >= 0 ? formatNumber(pre_betmoney_max) : '무제한'
  const live_betmoney_text = live_betmoney_max >= 0 ? formatNumber(live_betmoney_max) : '무제한'

  const eleCrossSupport = isCrossSupport ? CrossOn : CrossOff
  const eleWaySupport = isWaySupport ? WDLOn : WDLOff
  const eleHandicapSupport = isHandicapSupport ? HandiOn : HandiOff
  const eleSpecialSupport = isSpecialSupport ? SpecialOn : SpecialOff
  const eleLiveSupport = isLiveSupport ? LiveOn : LiveOff

  const eleNoticeTitle = ''
  const eleNoticeText = ''
  const eleEventTitle = ''
  const eleEventText = ''

  return (
    <ClubPopup>
      <PopupTitle>{name}</PopupTitle>
      <PopupContents>
        <LimitWrap>
          <PopupSubTitle>스포츠 베팅 한도</PopupSubTitle>
          {Gmoney}
          <Num css={TxtLimit}>{pre_betmoney_text}</Num>
        </LimitWrap>
        <LimitWrap css={{ float: 'right' }}>
          <PopupSubTitle>라이브 베팅 한도</PopupSubTitle>
          {Gmoney}
          <Num css={TxtLimit}>{live_betmoney_text}</Num>
        </LimitWrap>
      </PopupContents>

      <PopupContents>
        <PopupSubTitle>베팅 방식 종류</PopupSubTitle>
        <Row type="flex" justify="space-between" css={OzWrap}>
          <Col span={4}>
            <OzIco>{eleCrossSupport}</OzIco>
            <OzText>{intl.get('component.cross')}</OzText>
          </Col>
          <Col span={4}>
            <OzIco>{eleWaySupport}</OzIco>
            <OzText>{intl.get('component.3way')}</OzText>
          </Col>
          <Col span={5}>
            <OzIco>{eleHandicapSupport}</OzIco>
            <OzText css={[{ minWidth: 150, width: 'auto' }, TxtLimit]}>
              {intl.get('component.handicap-underover')}
            </OzText>
          </Col>
          <Col span={4}>
            <OzIco>{eleSpecialSupport}</OzIco>
            <OzText>{intl.get('component.specials')}</OzText>
          </Col>
          <Col span={4}>
            <OzIco>{eleLiveSupport}</OzIco>
            <OzText>{intl.get('component.live')}</OzText>
          </Col>
        </Row>
      </PopupContents>

      <PopupContents>
        <PopupSubTitle>{intl.get('component.club-notice')}</PopupSubTitle>
        <NewsTitle css={TxtLimit}>{eleNoticeTitle}</NewsTitle>

        <Col>
          <Txt>{eleNoticeText}</Txt>
        </Col>
      </PopupContents>
      <PopupContents css={{ borderBottom: 'none' }}>
        <PopupSubTitle>{intl.get('component.club-event')}</PopupSubTitle>
        <EventTitle css={TxtLimit}>{eleEventTitle}</EventTitle>

        <div>
          <Txt>{eleEventText}</Txt>
        </div>
      </PopupContents>
    </ClubPopup>
  )
}
export default ClubInfoPopup
