/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { Fragment, useState } from 'react'
import { message, Row, Col } from 'antd'
import { nth } from 'lodash'
import { TxtLimit, Button, Point } from 'styles/base.style'

// image
import DummyImg from '@assets/images/itemshop/skin_dummy.png'
import { GmoneyIco } from '@shared/Icon/MoneyIcon'

// css
import { Schema$Message } from '@v2/protocol/message'
import MessageContentPopup from '@views/Popup/MessageContentPopup'
import { MESSAGE_TYPE } from '@ts/GameCommon'
import moment, { MomentInput } from 'moment'
import {
  MessageFooter,
  MessageBtnStyle,
  DateSpan,
  PickButtonWrap,
  PickButtonStyle,
  ListItemTitle,
  ListItemWrap,
  DummyStyle,
  SellerName,
  Txt,
  Num,
  Money,
  GmoneyStyle,
} from '../index.style'
import { formatNumber } from '@utils/utils'

const Dummy = [<img key="dummy" src={DummyImg} alt="프로필" css={DummyStyle} />]

const Gmoney = (
  <GmoneyStyle>
    <GmoneyIco />
  </GmoneyStyle>
)

interface MessageListItemFooterProps {
  index: number
  track: Schema$Message
  onDelete: (arg: string) => void
  onShowPick: () => void
}

const MessageListItemFooter: React.FC<MessageListItemFooterProps> = (props: MessageListItemFooterProps) => {
  const { index, track, onDelete, onShowPick } = props
  const { pick } = track
  const days = ['일', '월', '화', '수', '목', '금', '토']

  const getDateFormat = (date: MomentInput): string => {
    const d = moment(date)
    const f = [d.format('MM/DD'), '(', nth(days, d.day()), ') ', d.format('HH:mm')]
    return f.join('')
  }

  // 메세지 팝업
  const [visiblePopup, setVisiblePopup] = useState(false)
  const onShowMessagePopup = () => {
    setVisiblePopup(true)
  }

  // 개별 삭제
  const onClickDeleteMessage = () => {
    const { id } = track
    onDelete(id)
  }

  if (track) {
    switch (track.type) {
      case MESSAGE_TYPE.SYSTEM:
        break
      case MESSAGE_TYPE.NORMAL:
        break
      case MESSAGE_TYPE.GIFT:
        break
      case MESSAGE_TYPE.REWARD:
        break
      case MESSAGE_TYPE.PICK_ADD:
        break
    }
  }

  const className = []
  if (track.type === MESSAGE_TYPE.PICK_ADD) {
    className.push('pick-content')
  }

  const button = []
  if (index === 0 && track.senderId) {
    button.push(
      <Button css={MessageBtnStyle} onClick={onShowMessagePopup}>
        답장하기
      </Button>,
    )
  } else if (index === 1 && track.receiverId) {
    button.push(
      <Button css={MessageBtnStyle} onClick={onShowMessagePopup}>
        메세지 보내기
      </Button>,
    )
  }

  return (
    <Fragment>
      <Row type="flex" justify="space-between" css={MessageFooter}>
        <Col span={24} className="term">
          {`남은 보관기간 ${moment(track.dateExpire).diff(moment(), 'days')}일`}
        </Col>
        {className.length > 0 ? (
          <Col style={{ width: '100%', marginBottom: 8 }} className={className.join(' ')}>
            {index === 0 ? (
              <PickButtonWrap>
                <Button primary css={PickButtonStyle} onClick={onShowPick} className="pick">
                  픽 구매
                </Button>
                <Button
                  primary
                  css={PickButtonStyle}
                  onClick={() => message.info('이미 구매한 픽 입니다.')}
                  className="pick complete"
                >
                  구매완료
                </Button>
                <Button
                  primary
                  css={PickButtonStyle}
                  onClick={() => message.info('베팅이 마감되거나 공유가 중지된 픽은 구매할 수 없습니다.')}
                  className="pick end"
                >
                  구매불가
                </Button>
              </PickButtonWrap>
            ) : null}
            <DateSpan>베팅마감 {getDateFormat(pick.dateBettingEnd)}</DateSpan>
            <ListItemTitle>{pick.title}</ListItemTitle>
            <Row type="flex" justify="space-between">
              <Col span={3} css={ListItemWrap}>
                {Dummy}
              </Col>
              <Col span={7} css={ListItemWrap}>
                <SellerName>{pick.picksterName}</SellerName>
                <Txt>{`적중률 ${pick.userHitRatioTotal}%`}</Txt>
              </Col>
              <Col span={3} css={ListItemWrap}>
                <Txt>폴드</Txt>
                <Num>{pick.foldCount}</Num>
              </Col>
              <Col span={3} css={ListItemWrap}>
                <Txt>배당</Txt>
                <Point>{pick.dividendRate}</Point>
              </Col>
              <Col span={8} css={ListItemWrap}>
                <Txt>판매가</Txt>
                <Money css={TxtLimit}>{formatNumber(pick.priceMoney)}</Money>
                {Gmoney}
              </Col>
            </Row>
          </Col>
        ) : null}
        <Col span={8}>
          <Button css={MessageBtnStyle} className="delete" onClick={onClickDeleteMessage}>
            삭제하기
          </Button>
        </Col>
        <Col span={16} style={{ paddingLeft: 5 }}>
          {button}
        </Col>
      </Row>

      {/* 메세지 보내기 팝업 */}
      <MessageContentPopup
        key={`${track.id}_content`}
        visible={visiblePopup}
        setVisible={setVisiblePopup}
        receive={
          index === 0
            ? { id: track.senderId, nick: track.senderNick, title: track.title }
            : { id: track.receiverId, nick: track.receiverNick, title: track.title }
        }
      />
    </Fragment>
  )
}

export default MessageListItemFooter
