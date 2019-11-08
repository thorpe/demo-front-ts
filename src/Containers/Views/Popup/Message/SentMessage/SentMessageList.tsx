/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { Fragment, useState } from 'react'
import { Accordion } from 'antd-mobile'
import { message, Row, Col } from 'antd'
// import useRootStore from '@store/useRootStore'
import { observer } from 'mobx-react'

// image
import DummyImg from '@assets/images/itemshop/skin_dummy.png'
import ReceivedIco from '@assets/images/icon/etc_icon/odds_maker_Icon.png'
import { PickIco } from '@shared/Icon/MenuIcon'
import { CircleDownIco } from '@shared/Icon/ArrowIcon'
import { GmoneyIco } from '@shared/Icon/MoneyIcon'

// css
import { TxtLimit, Button, Point } from 'styles/base.style'
import MessageContentPopup from '@views/Popup/MessageContentPopup'
import DeletePopup from '../Popup/DeletePopup'
import {
  AccordionWrapper,
  MessageBody,
  MessageFooter,
  MessageBtnStyle,
  DateSpan,
  MessgeTitle,
  IconWrapButton,
  ItemStyle,
  ReceivedStyle,
  ItemName,
  Name,
  ArrowStyle,
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

// image
const Item = [
  <Fragment>
    <ItemStyle className="item-style">
      <img key="dummy" src={DummyImg} alt="프로필" />
    </ItemStyle>
    <ItemName className="item-text">받기</ItemName>
  </Fragment>,
]
const Dummy = [<img key="dummy" src={DummyImg} alt="프로필" css={DummyStyle} />]
const Arrow = [
  <ArrowStyle className="circle-down">
    <CircleDownIco />
  </ArrowStyle>,
]
const Pick = [
  <Fragment>
    <ItemStyle className="item-style">
      <PickIco />
    </ItemStyle>
    <ItemName className="item-text">픽 구매</ItemName>
  </Fragment>,
]
const Received = [
  <img key="received" src={ReceivedIco} alt="수령 완료" css={ReceivedStyle} className="received-icon" />,
]
const Gmoney = (
  <GmoneyStyle>
    <GmoneyIco />
  </GmoneyStyle>
)

const SentMessageList: React.FC = props => {
  const [visiblePopup, setVisiblePopup] = useState(false)

  const onShowMessagePopup = () => {
    setVisiblePopup(true)
  }

  // 개별 삭제 팝업
  const [visibleDelete, setVisibleDelete] = useState(false)
  const onShowDeleteModal = () => {
    setVisibleDelete(true)
  }

  const header = [
    // 아이템 메세지
    <Fragment>
      <DateSpan style={{ margin: '10px 0 2px' }}>8/20(화) 21:55</DateSpan> {Arrow}
      <Name>
        <span>보낸 사람</span> 승부사 운영자
      </Name>
      <MessgeTitle css={TxtLimit}>아이템 메세지 (최대 20자)</MessgeTitle>
      <IconWrapButton>
        {/* 픽 구매일 경우 */}
        {/* {Pick} */}

        {/* 아이템일 경우 */}
        {Item}

        {/* 아이템 수령시 보이는 이미지(className으로 제어했기 때문에 상시 있어도 됩니다.))  */}
        {Received}
      </IconWrapButton>
    </Fragment>,

    // 픽 메세지
    <Fragment>
      <DateSpan style={{ margin: '10px 0 2px' }}>8/20(화) 21:55</DateSpan> {Arrow}
      <Name>
        <span>보낸 사람</span> 승부사 운영자
      </Name>
      <MessgeTitle css={TxtLimit}>픽 메세지</MessgeTitle>
      <IconWrapButton>
        {/* 픽 구매일 경우 */}
        {Pick}
        {/* 아이템일 경우 */}
        {/* {Item} */}
        {Received}
      </IconWrapButton>
    </Fragment>,

    // 픽 마감 메세지
    <Fragment>
      <DateSpan style={{ margin: '10px 0 2px' }}>8/20(화) 21:55</DateSpan> {Arrow}
      <Name>
        <span>보낸 사람</span> 승부사 운영자
      </Name>
      <MessgeTitle css={TxtLimit}>마감된 픽 메세지</MessgeTitle>
      <IconWrapButton>
        {Pick}
        {/* {Item} */}
        {Received}
      </IconWrapButton>
    </Fragment>,
  ]
  const Body = [
    <MessageBody>
      최대 330자 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis modi quidem dicta amet
      exercitationem iste soluta, repellendus quos atque, velit, libero natus ab sit est reprehenderit! Voluptatem totam
      dignissimos odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis modi quidem dicta amet
      exercitationem iste soluta, repellendus quos atque, velit, libero natus ab sit est reprehenderit! Voluptatem totam
      dignissimos odit.
    </MessageBody>,
  ]
  const FooterContent = [
    <Fragment>
      <PickButtonWrap>
        <Button primary css={PickButtonStyle} onClick={() => message.info('준비중')} className="pick">
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
      </PickButtonWrap>
      <DateSpan>베팅마감 8/20(화) 21:55</DateSpan>
      <ListItemTitle>제목입니다최대글자수바로바로이십개입니다</ListItemTitle>
      <Row type="flex" justify="space-between">
        <Col span={3} css={ListItemWrap}>
          {Dummy}
        </Col>
        <Col span={7} css={ListItemWrap}>
          <SellerName>레알마드리드짱짱</SellerName>
          <Txt>적중률 &nbsp;&nbsp;&nbsp;100%</Txt>
        </Col>
        <Col span={3} css={ListItemWrap}>
          <Txt>폴드</Txt>
          <Num>10</Num>
        </Col>
        <Col span={3} css={ListItemWrap}>
          <Txt>배당</Txt>
          <Point>14.43</Point>
        </Col>
        <Col span={8} css={ListItemWrap}>
          <Txt>판매가</Txt>
          <Money css={TxtLimit}>999,999,999,999,999</Money>
          {Gmoney}
        </Col>
      </Row>
    </Fragment>,
  ]
  const Footer = [
    // 일반 메세지
    <Row type="flex" justify="space-between" css={MessageFooter}>
      <Col span={24} className="term">
        남은 보관기간 1일
      </Col>
      {/* <Col style={{ width: '100%',marginBottom: 8 }} className="pick-content">{FooterContent}</Col> */}
      <Col span={8}>
        <Button css={MessageBtnStyle} className="delete" onClick={onShowDeleteModal}>
          삭제하기
        </Button>
      </Col>
      <Col span={16} style={{ paddingLeft: 5 }}>
        <Button css={MessageBtnStyle} onClick={onShowMessagePopup}>
          메세지 보내기
        </Button>
      </Col>
    </Row>,
    // 픽 구매 메세지
    <Row type="flex" justify="space-between" css={MessageFooter}>
      <Col span={24} className="term">
        남은 보관기간 1일
      </Col>
      <Col style={{ width: '100%', marginBottom: 8 }} className="pick-content">
        {FooterContent}
      </Col>
      <Col span={8}>
        <Button css={MessageBtnStyle} className="delete" onClick={onShowDeleteModal}>
          삭제하기
        </Button>
      </Col>
      <Col span={16} style={{ paddingLeft: 5 }}>
        <Button css={MessageBtnStyle} onClick={onShowMessagePopup}>
          메세지 보내기
        </Button>
      </Col>
    </Row>,
  ]

  return (
    <Fragment>
      <AccordionWrapper>
        <Accordion /* defaultActiveKey="4" */>
          <Accordion.Panel header={header[0]}>
            {Body}

            {/* 일반 메세지 - footer */}
            {Footer[0]}
          </Accordion.Panel>
          <Accordion.Panel header={header[1]}>
            {Body}

            {/* 픽 구매 메세지 - footer */}
            {Footer[1]}
          </Accordion.Panel>
          <Accordion.Panel header={header[2]} className="end">
            {Body}

            {/* 픽 마감 메세지 - footer */}
            {Footer[1]}
          </Accordion.Panel>
        </Accordion>
      </AccordionWrapper>

      {/* 메세지 보내기 팝업 */}
      <MessageContentPopup visible={visiblePopup} setVisible={setVisiblePopup} />

      {/* 개별 삭제 팝업 */}
      <DeletePopup visible={visibleDelete} setVisible={setVisibleDelete} />
    </Fragment>
  )
}
export default observer(SentMessageList)
