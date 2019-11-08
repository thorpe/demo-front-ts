/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { Fragment, useState } from 'react'
import { Accordion } from 'antd-mobile'
import { message } from 'antd'
import { nth, isObject } from 'lodash'
import moment from 'moment'
import { Schema$Message } from '@v2/protocol/message'

// image
import DummyImg from '@assets/images/itemshop/skin_dummy.png'
import ReceivedIco from '@assets/images/icon/etc_icon/odds_maker_Icon.png'
import { PickIco } from '@shared/Icon/MenuIcon'
import { CircleDownIco } from '@shared/Icon/ArrowIcon'

// css
import { TxtLimit } from 'styles/base.style'

import { MESSAGE_TYPE } from '@ts/GameCommon'
import useRootStore from '@store/useRootStore'
import PickPurchase from '@views/Popup/PickPurchase'
import {
  AccordionWrapper,
  MessageBody,
  DateSpan,
  MessgeTitle,
  IconWrapButton,
  ItemStyle,
  ReceivedStyle,
  ItemName,
  Name,
  ArrowStyle,
} from '../index.style'
import MessageListItemFooter from './MessageListItemFooter'

// image

const Arrow = [
  <ArrowStyle className="circle-down">
    <CircleDownIco />
  </ArrowStyle>,
]

interface MessageListItemProps {
  index: number
  track: Schema$Message
  onDelete: (arg: string) => void
  onReceiveItem: (arg: string) => void
}

const MessageListItem: React.FC<MessageListItemProps> = (props: MessageListItemProps) => {
  const { messageStore, pickStore } = useRootStore()
  const [change, setChange] = useState(false)
  const { index, track, onDelete, onReceiveItem } = props
  const { pick } = track
  const days = ['일', '월', '화', '수', '목', '금', '토']
  const now = moment().valueOf()
  let betEnd
  if (isObject(pick)) {
    betEnd = moment(pick.dateBettingEnd).valueOf()
  }

  // 픽 팝업
  // const [visiblePick, setVisiblePick] = useState(false)
  const onShowPickModal = () => {
    // setVisiblePick(true)
    const { id } = pick
    pickStore.setPurchasePick(id)
  }

  const getDateFormat = (date: Date): string => {
    const d = moment(date)
    const f = [d.format('MM/DD'), '(', nth(days, d.day()), ') ', d.format('HH:mm')]
    return f.join('')
  }

  const onReceiveHandler = () => {
    switch (track.type) {
      case MESSAGE_TYPE.SYSTEM:
      case MESSAGE_TYPE.NORMAL:
      case MESSAGE_TYPE.GIFT:
      case MESSAGE_TYPE.REWARD:
        onReceiveItem(track.id)
        break
      case MESSAGE_TYPE.PICK_ADD:
        const { sell, id } = pick
        if (sell === 1 && now < betEnd) {
          // onShowPickModal()
          pickStore.setPurchasePick(id)
        } else {
          message.info('베팅이 마감되거나 공유가 중지된 픽은 구매할 수 없습니다.')
        }
        break
    }
  }

  const onClickHeaderIcon = e => {
    e.stopPropagation()
    if (index === 0) {
      onReceiveHandler()
    }
  }

  const onChangeCollpse = key => {
    if (key.length > 0 && track.receiverRead === 0 && index === 0) {
      messageStore.readMessage({ messageId: track.id })
      track.receiverRead = 1
      if (change) {
        setChange(false)
      } else {
        setChange(true)
      }
    }
  }

  const typeIcon = []
  let iconWrapButton = null
  if (track) {
    switch (track.type) {
      case MESSAGE_TYPE.SYSTEM:
      case MESSAGE_TYPE.NORMAL:
      case MESSAGE_TYPE.GIFT:
      case MESSAGE_TYPE.REWARD:
        if (track.itemCode > 0) {
          if (index === 0) {
            typeIcon.push(
              <ItemStyle className="item-style">
                <img key="dummy" src={DummyImg} alt="프로필" />
              </ItemStyle>,
            )
            typeIcon.push(<ItemName className="item-text">받기</ItemName>)
            typeIcon.push(
              <img key="received" src={ReceivedIco} alt="수령 완료" css={ReceivedStyle} className="received-icon" />,
            )
          } else if (index === 1) {
            typeIcon.push(
              <ItemStyle className="item-style only-img">
                <img key="dummy" src={DummyImg} alt="프로필" />
              </ItemStyle>,
            )
          }
          iconWrapButton = <IconWrapButton onClick={onClickHeaderIcon}>{typeIcon}</IconWrapButton>
        }
        break
      case MESSAGE_TYPE.PICK_ADD:
        const { sell } = pick
        if (index === 0) {
          typeIcon.push(
            <ItemStyle className="item-style">
              <PickIco />
            </ItemStyle>,
          )
          if (sell === 1 && now < betEnd) {
            typeIcon.push(<ItemName className="item-text">픽 구매</ItemName>)
          } else {
            typeIcon.push(<ItemName className="item-text">구매불가</ItemName>)
          }
          typeIcon.push(
            <img key="received" src={ReceivedIco} alt="구매완료" css={ReceivedStyle} className="received-icon" />,
          )
        } else if (index === 1) {
          typeIcon.push(
            <ItemStyle className="item-style only-img">
              <PickIco />
            </ItemStyle>,
          )
        }
        iconWrapButton = <IconWrapButton onClick={onClickHeaderIcon}>{typeIcon}</IconWrapButton>
        break
    }
  }

  const className = []
  if (index === 0) {
    if (track.receiverRead === 1) {
      className.push('read')
    }
    if (track.receivedItem === 1) {
      className.push('received')
    }
    if (track.type === MESSAGE_TYPE.PICK_ADD && isObject(track.pickPurchase)) {
      className.push('received')
    }
    if ((track.type === MESSAGE_TYPE.PICK_ADD && track.pick.sell === 0) || now > betEnd) {
      className.push('end')
    }
  }

  return (
    <Fragment>
      <AccordionWrapper>
        <Accordion onChange={onChangeCollpse}>
          <Accordion.Panel
            key={track.id}
            className={className.join(' ')}
            header={
              <Fragment>
                <DateSpan style={{ margin: '10px 0 2px' }}>{getDateFormat(track.createdAt)}</DateSpan>
                {Arrow}
                <Name>
                  {index === 0 ? <span>보낸 사람</span> : <span>받는 사람</span>}
                  {index === 0 ? track.senderNick : track.receiverNick}
                </Name>
                <MessgeTitle css={TxtLimit}>{track.title}</MessgeTitle>
                {iconWrapButton}
              </Fragment>
            }
          >
            {track.type === MESSAGE_TYPE.PICK_ADD ? null : (
              <MessageBody css={{ whiteSpace: 'pre' }}>{track.content}</MessageBody>
            )}
            <MessageListItemFooter index={index} track={track} onDelete={onDelete} onShowPick={onShowPickModal} />
          </Accordion.Panel>
        </Accordion>
      </AccordionWrapper>

      {/* 픽 구매 팝업 */}
      {/* <PickPurchase key={`${track.id}_pick`} visible={visiblePick} setVisible={setVisiblePick} /> */}
      <PickPurchase />
    </Fragment>
  )
}
export default MessageListItem
