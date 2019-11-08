/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core'
import React, { Fragment, useState } from 'react'
import { Modal } from 'antd-mobile'
import intl from 'react-intl-universal'
import { padStart } from 'lodash'

// image
import { GmoneyIco } from '@shared/Icon/MoneyIcon'
import GiftBoxClosedImg from '@assets/images/bg/gift_box.png'
import GiftBoxOpendImg from '@assets/images/bg/gift_box_open.png'
import EventImg from '@assets/images/bg/gift-box-event.png'

// css
import styled, { Theme, ThemeProps } from 'themes/theme'
import { Button } from 'styles/base.style'
import { message } from 'antd'
import moment from 'moment'
import { observer } from 'mobx-react'
import useRootStore from '@store/useRootStore'

const ModalStyle = (theme: Theme) => css`
  position: relative;
  width: 75vw !important;
  height: 254px;
  .am-modal-content {
    padding: 22px 40px 0;
    /* background: transparent; */
    overflow: visible;
  }
  .am-modal-body {
    /* height: 210px; */
    overflow: visible;
  }
  .am-modal-button-group-v .am-modal-button::before {
    display: none !important;
  }
`
const GiftBoxBgAni = (props: ThemeProps) => keyframes`
from {
  box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 60px ${props.theme.color.primary}, 0 0 80px ${props.theme.color.primary}, 0 0 90px ${props.theme.color.primary}, 0 0 95px ${props.theme.color.primary}, 0 0 100px ${props.theme.color.primary};
  }
  to {
    box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 40px ${props.theme.color.primary}, 0 0 55px ${props.theme.color.primary}, 0 0 60px ${props.theme.color.primary}, 0 0 65px ${props.theme.color.primary}, 0 0 80px ${props.theme.color.primary};
  }
`
const GiftBoxWrap = styled.span`
  z-index: 0;
  position: relative;
  display: inline-block;
  top: 15px;
  width: 100%;
  height: auto;
  &::before {
    content: '';
    z-index: -1;
    display: none;
    /* display: block; */
    position: absolute;
    left: 50%;
    top: 50%;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: ${props => props.theme.color.TP};
    box-shadow: 10px 10px 5px grey;
    transform: translate(-50%, -50%);
    -webkit-animation: ${GiftBoxBgAni} 1s ease-in-out infinite alternate;
    -moz-animation: ${GiftBoxBgAni} 1s ease-in-out infinite alternate;
    animation: ${GiftBoxBgAni} 1s ease-in-out infinite alternate;
  }
`
const GiftBoxStyle = css`
  position: relative;
  display: block;
  width: auto;
  height: 105px;
  margin: 0 auto;
  &.opened {
    top: 10px;
  }
`
const TxtWrap = styled.div`
  position: relative;
  &.after {
    position: absolute;
    left: 50%;
    bottom: 65px;
    transform: translate(-50%, 0);
  }
`
const TxtStyle = (props: ThemeProps) => css`
  position: relative;
  font-size: ${props.theme.font.large};
  line-height: 1.6rem;
`
const Txt = styled.p`
  ${TxtStyle};
  color: ${props => props.theme.color.btnTxt};
`
const ButtonStyle = (theme: Theme) => css`
  position: absolute;
  bottom: 18px;
  left: 50%;
  width: 150px;
  height: 30px;
  padding: 0;
  line-height: 3rem;
  color: ${theme.color.btnTxt};
  font-size: ${theme.font.medium};
  background: ${theme.color.primary};
  border-radius: 4px;
  transform: translate(-50%, 0);
`
const ChildModalStyle = (theme: Theme) => css`
  position: relative;
  width: 58.5vw !important;
  height: 238px;
  .am-modal-content {
    padding: 0px 10px 0;
    overflow: visible;
  }
  .am-modal-body {
    overflow: visible;
  }
`
const DummyWrap = styled.div`
  position: relative;
  top: 75px;
  span {
    width: 75px;
  }
  .gmoney {
    position: relative;
    display: inline-block;
    top: 6px;
    width: 75px;
    margin-left: 2px;
    svg {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`
const ChildTxt = styled.p`
  ${TxtStyle};
  color: ${props => props.theme.color.themeTxt};
`
const GmoneyStyle = styled.span`
  position: relative;
  display: inline-block;
  top: -4px;
  width: 14px;
  margin-left: 2px;
  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`
const EventStlye = css`
  z-index: 1;
  position: absolute;
  top: 18px;
  left: 50%;
  width: 85%;
  transform: translate(-50%, 0);
`

// bg
const GiftBoxClosed = <img src={GiftBoxClosedImg} alt="닫혀있는 선물상자" css={GiftBoxStyle} />
const GiftBoxOpened = <img src={GiftBoxOpendImg} alt="열려있는 선물상자" css={GiftBoxStyle} className="opened" />
const Event = <img src={EventImg} alt="폭죽 이미지" css={EventStlye} className="opened" />
// icon
const Gmoney = (
  <GmoneyStyle className="gmoney">
    <GmoneyIco />
  </GmoneyStyle>
)

const GiftBox: React.FC = props => {
  const { authStore, globalStore, componentStore } = useRootStore()
  const { collapsedGiftbox } = globalStore
  const [visibleChildModal, setVisibleChildModal] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [nextOpenTime, setNextOpenTime] = useState()
  const { giftbox, openGiftbox } = componentStore
  const { signedin } = authStore

  let timer = null
  const startInterval = (from: string | Date, to: string | Date) => {
    const s = 1000
    const m = s * 60
    const h = m * 60
    const d = h * 24
    const fTime = moment(from).valueOf()
    const tTime = moment(to).valueOf()
    let mTime = 0

    clearInterval(timer)
    timer = setInterval(() => {
      const diff = tTime - fTime - mTime
      const seconds = Math.floor((diff % m) / s)
      const minutes = Math.floor((diff % h) / m)
      const hours = Math.floor((diff % d) / h)
      mTime += s
      const arr = [
        padStart(hours.toString(), 2, '0'),
        padStart(minutes.toString(), 2, '0'),
        padStart(seconds.toString(), 2, '0'),
      ]
      setNextOpenTime(arr.join(':'))
    }, s)
  }

  const fetchGiftBox = async () => {
    await componentStore.getGiftBox({})
    const nextOpenDate =
      componentStore.giftbox && !componentStore.giftbox.openEnabled
        ? componentStore.giftbox.nextOpenDate
        : new Date().toISOString()
    const now = new Date().toISOString()
    if (!componentStore.giftbox.openEnabled) {
      startInterval(now, nextOpenDate)
    }
  }

  const onCloseModal = () => {
    clearInterval(timer)
    setNextOpenTime(null)
    componentStore.setGiftbox(null)
    globalStore.toggleGiftBoxCollapsed(true)
  }

  const showChildModal = async () => {
    setIsDisabled(true)
    await componentStore.fetchOpenGiftbox({})
    if (componentStore.openGiftbox && componentStore.openGiftbox.giftboxId) {
      onCloseModal()
      setVisibleChildModal(true)
    } else {
      message.error(intl.get('btn.get-gift-box'))
    }
  }

  const onCloseChildModal = () => {
    setVisibleChildModal(false)
  }

  if (signedin && !collapsedGiftbox && !giftbox) {
    fetchGiftBox()
  }

  return (
    <Fragment>
      <Modal transparent visible={!collapsedGiftbox} maskClosable onClose={onCloseModal} title="" css={ModalStyle}>
        {giftbox && giftbox.openEnabled ? (
          <div>
            <TxtWrap>
              <Txt>
                24시간에 한번!
                <br />
                1,000{Gmoney} ~ 100,000{Gmoney}
                <br />
                무료로 획득하세요!
              </Txt>
            </TxtWrap>
            <GiftBoxWrap>{GiftBoxClosed}</GiftBoxWrap>
            <Button primary css={ButtonStyle} onClick={showChildModal} disabled={isDisabled}>
              선물상자 열기
            </Button>
          </div>
        ) : (
          <div>
            <GiftBoxWrap>{GiftBoxOpened}</GiftBoxWrap>
            <TxtWrap className="after">
              <Txt>남은시간 {nextOpenTime}</Txt>
            </TxtWrap>
            {/* <Button primary css={ButtonStyle} onClick={() => setVisibleChildModal(true)}> */}
            <Button primary css={ButtonStyle} onClick={onCloseModal}>
              닫기
            </Button>
          </div>
        )}
      </Modal>

      {/* 두번째 모달 (획득 아이템) */}
      <Modal
        transparent
        visible={visibleChildModal}
        maskClosable
        onClose={onCloseChildModal}
        css={ChildModalStyle}
        // footer={[
        //   {
        //     text: '확인',
        //     onPress: () => {
        //       onCloseChildModal()
        //     },
        //   },
        // ]}
      >
        {Event}
        <DummyWrap>{Gmoney}</DummyWrap>
        <TxtWrap className="after">
          <ChildTxt>
            {openGiftbox ? openGiftbox.giftboxDesc : ''}
            {Gmoney}
          </ChildTxt>
        </TxtWrap>
        <Button primary css={ButtonStyle} onClick={onCloseChildModal}>
          확인
        </Button>
      </Modal>
    </Fragment>
  )
}

export default observer(GiftBox)
