/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { Row, Col } from 'antd'
// import intl from 'react-intl-universal'

import { formatNumber } from '@utils/utils'
import styled from 'themes/theme'

// icon
import { GmoneyIco } from '@shared/Icon/MoneyIcon'
import { InfoGreenIco } from '@shared/Icon/ClubIcon'
import JoinIco from '@assets/images/icon/club_icon/join_man.png'
import NJoinIco from '@assets/images/icon/club_icon/join_man_not.png'

// css
import { TxtLimit, Button } from 'styles/base.style'
import { CLUB_MEMBER_STATE } from '@ts/GameCommon'
import { ClubInfoItem } from '@store/clubStore'
import { Schema$ClubInfo } from '@interface/common'
import {
  ClubPotal,
  ClubListButton,
  ClubName,
  JoinState,
  ClubLocate,
  Wrap,
  Txt,
  Num,
  NumLimit,
  GmoneyStyle,
  JoinyIco,
  InfoStyle,
  InfoBtnStyle,
  LimitWrap,
  LimitNum,
} from './index.style'

const InvalidClubName = styled.span`
  color: #ed5565; /* 컬러 임시로 적용 */
`

// icon
const Gmoney = (
  <GmoneyStyle>
    <GmoneyIco />
  </GmoneyStyle>
)
const Info = (
  <InfoStyle>
    <InfoGreenIco />
  </InfoStyle>
)
const Join = [<img src={JoinIco} alt="가입" css={JoinyIco} />]
const NJoin = [<img src={NJoinIco} alt="미가입" css={JoinyIco} />]

interface ClubCardProps {
  signedin: boolean
  club: ClubInfoItem
  onClickMatchup: (id: string) => void
  onClickShowDetail: (club: Schema$ClubInfo) => void
}

const ClubPortal: React.FC<ClubCardProps> = (props: ClubCardProps) => {
  const { signedin, club, onClickMatchup, onClickShowDetail } = props
  const {
    id,
    name,
    soluble,
    state,
    isMember,
    memberState,
    sportsCount,
    isLiveSupport,
    pre_betmoney_max,
    live_betmoney_max,
  } = club

  let eleMemberImg
  if (isMember === true) {
    eleMemberImg = Join
  } else {
    eleMemberImg = NJoin
  }

  let eleJoinStateText = ''
  if (signedin === true && isMember === false) {
    if (memberState === CLUB_MEMBER_STATE.SEEK_MEMBER) {
      eleJoinStateText = ' 승인 대기중'
    }
  }

  let eleLiveSupport
  if (isLiveSupport === true) {
    eleLiveSupport = (
      <Txt css={theme => ({ color: theme.color.on })} className="live-state">
        ON
      </Txt>
    )
  } else {
    eleLiveSupport = <Txt className="live-state">OFF</Txt>
  }

  const pre_betmoney_text = pre_betmoney_max >= 0 ? formatNumber(pre_betmoney_max) : '무제한'
  const live_betmoney_text = live_betmoney_max >= 0 ? formatNumber(live_betmoney_max) : '무제한'

  const eleStateName = state === 5 ? <InvalidClubName>{name}</InvalidClubName> : name

  return (
    <ClubPotal>
      <ClubListButton
        onClick={e => {
          onClickShowDetail(club)
        }}
      >
        <ClubName>
          {eleStateName}
          {eleMemberImg}
          <JoinState>{eleJoinStateText}</JoinState>
          <ClubLocate>현재 클럽 위치</ClubLocate>
        </ClubName>
        <Row type="flex" justify="space-between">
          <Col span={2} css={Wrap}>
            <Txt>종목</Txt>
            <Num>{sportsCount}</Num>
          </Col>
          <Col span={3} css={Wrap} className="live">
            <Txt>라이브</Txt>
            {eleLiveSupport}
          </Col>
          <Col span={7} css={Wrap}>
            <Txt css={{ textAlign: 'left' }}>클럽가용머니</Txt>
            <Num css={[NumLimit, TxtLimit]}>{formatNumber(soluble)}</Num>
            <span css={{ float: 'left' }}>{Gmoney}</span>
          </Col>
          <Col span={12}>
            <LimitWrap>
              <Txt css={{ float: 'left' }}>스포츠 베팅 한도</Txt>
              {Gmoney}
              <LimitNum css={TxtLimit}>{pre_betmoney_text}</LimitNum>

              <Txt css={{ float: 'left' }}>라이브 베팅 한도</Txt>
              {Gmoney}
              <LimitNum css={TxtLimit}>{live_betmoney_text}</LimitNum>
            </LimitWrap>
          </Col>
        </Row>
      </ClubListButton>
    </ClubPotal>
  )
}

export default ClubPortal
