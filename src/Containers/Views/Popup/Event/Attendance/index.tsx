/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { Fragment } from 'react'
import { Modal, Grid, Tabs } from 'antd-mobile'

// css
import styled, { Theme } from 'themes/theme'
import { TabWrap, TabTxt, mq, TxtLimit, Point, Button } from 'styles/base.style'
import { observer } from 'mobx-react'
import useRootStore from '@store/useRootStore'

import AttendanceIco from '@assets/images/icon/etc_icon/attendance.png'

const CloseBtn = (theme: Theme) =>
  css`
    z-index: 2;
    position: absolute;
    top: 1px;
    right: 4px;
    width: 40px;
    height: 40px;
    padding: 0;
    overflow: hidden;
    text-align: center;
    background: ${theme.color.TP};
    border: none;
    box-shadow: none;
    &::before {
      position: absolute;
      top: 18px;
      left: 14px;
      display: block;
      width: 16px;
      height: 16px;
      background: ${theme.color.TP};
      border: none;
      border-left: 2px solid ${theme.color.detail};
      border-radius: 0;
      transform: rotate(45deg);
      opacity: 1;
      animation: none;
      content: '';
    }
    &::after {
      position: absolute;
      top: 8px;
      right: 10px;
      display: block;
      width: 16px;
      height: 16px;
      background: ${theme.color.TP};
      border-left: 2px solid ${theme.color.detail};

      transform: rotate(-45deg);
      opacity: 1;
      content: '';
    }
  `
const CloseBtnTxt = css({
  position: 'absolute',
  lineHeight: '9999',
})
const EventStyle = css`
  width: 90vw !important;
  padding: 10px;
  .am-modal-close {
    display: none;
  }
  .am-modal-content {
    padding: 14px 18px !important;
    .am-modal-header {
      padding: 2px 0 14px;
    }
    .am-modal-body {
      padding: 0;
    }
  }
`
const EventTabStyle = css`
  width: 80%;
  text-align: left;
  ${mq[0]} {
    width: 100%;
  }
`
const GridWrap = styled.div`
  .am-grid .am-flexbox {
    background: ${props => props.theme.color.TP};
    .am-flexbox .am-flexbox-item,
    .am-grid-item {
      position: relative;
      height: 40px !important;
      margin: 1px;
      background: ${props => props.theme.color.contentsBg};
      border-radius: 2px;
      overflow: hidden;
      &::before {
        display: none;
      }
      .am-grid-item-content {
        padding: 0;
      }
    }
  }
  /* 기본으로 생기는 라인 제거 */
  .am-grid .am-grid-item::before,
  .am-grid .am-grid-item::after,
  .am-grid.am-grid-line .am-flexbox::after,
  .am-grid.am-grid-line:not(.am-grid-carousel)::before,
  .am-grid.am-grid-line:not(.am-grid-carousel)::after {
    display: none !important;
  }
`
const Dates = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  padding: 2px;
  font-size: ${props => props.theme.font.small};
`
const RewardImg = styled.img`
  position: relative;
  display: block;
  width: auto;
  height: 16px;
  margin: 4px auto 0;
`
const RewardTxt = styled.div`
  position: relative;
  left: 50%;
  top: 0;
  width: 100%;
  font-size: ${props => props.theme.font.tiny};
  transform: translate(-50%, 0);
  &.name {
    position: absolute;
    left: 50%;
    top: auto;
    bottom: 2.5px;
    height: auto;
    max-height: 20px;
    line-height: 0.8rem;
    white-space: normal;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: ${props => props.theme.color.tabSubTxt};
  }
`
const AttendanceWrap = styled.div`
  position: relative;
  top: -4px;
  &::before {
    z-index: 1;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 42px;
    background: ${props => props.theme.color.lowestBg};
    opacity: 0.8;
  }
`
const AttendanceImg = styled.img`
  position: absolute;
  display: block;
  width: 35px;
  height: 35px;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 1;
`

const TxtWrap = styled.div`
  margin-top: 12px;
`

const Txt = styled.span``

const tabs = [
  {
    title: <TabTxt className="event-text">출석체크</TabTxt>,
    key: 'attendance',
  },
  {
    title: <TabTxt className="event-text">승부사이벤트</TabTxt>,
    key: 'event',
  },
  {
    title: <TabTxt className="event-text">승부사이벤트2</TabTxt>,
    key: 'event2',
  },
]

// Modal
function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector
  let resultEl = el
  while (resultEl) {
    if (matchesSelector.call(resultEl, selector)) {
      return resultEl
    }
    resultEl = resultEl.parentElement
  }
  return null
}

// grid
// const data = Array.from(new Array(28)).map((_val, i) => ({
//   icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
//   text: `${i + 1}`,
//   reward: 'G 머니',
// }))
const ICON_IMG = 'https://d1i7hydgfclv7m.cloudfront.net/data_center/attendance_image/'
const Attendance: React.FC = props => {
  const { authStore, globalStore, componentStore } = useRootStore()
  const { collapsedAttendance } = globalStore
  const { attendance } = componentStore
  const { signedin } = authStore

  const fetchAttendance = async () => {
    await componentStore.getAttendance({})
  }

  const onCloseModal = () => {
    globalStore.toggleAttendanceCollapsed(true)
  }

  const onWrapTouchStart = e => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return
    }
    const pNode = closest(e.target, '.am-modal-content')
    if (!pNode) {
      e.preventDefault()
    }
  }

  if (signedin && !collapsedAttendance && !attendance) {
    fetchAttendance()
  }

  return (
    <Fragment>
      {attendance ? (
        <Modal
          transparent
          visible={!collapsedAttendance}
          maskClosable
          closable
          onClose={onCloseModal}
          title={
            <Fragment>
              <p>이벤트</p>
              <Button onClick={onCloseModal} css={CloseBtn}>
                <p css={CloseBtnTxt}>닫기</p>
              </Button>
            </Fragment>
          }
          // title={attendance.title ? attendance.title : '출석체크'}
          wrapProps={{ onTouchStart: onWrapTouchStart }}
          css={EventStyle}
          className="event"
        >
          {/* <Button onClick={onCloseModal} css={CloseBtn}>
            <p css={CloseBtnTxt}>닫기</p>
          </Button> */}
          <TabWrap css={EventTabStyle} className="event">
            <Tabs tabs={tabs} initialPage="0" />
          </TabWrap>
          {attendance.title ? (
            <Fragment>
              <GridWrap>
                <Grid
                  data={attendance ? attendance.items : []}
                  columnNum={7}
                  activeStyle={false}
                  itemStyle={{ height: 50 }}
                  renderItem={(dataItem, idx) => (
                    <div>
                      {attendance.hitCount >= idx + 1 ? (
                        <AttendanceWrap>
                          <AttendanceImg src={AttendanceIco} alt="출석" />
                        </AttendanceWrap>
                      ) : null}
                      <RewardImg src={`${ICON_IMG + dataItem.icon}.png`} alt="보상" />
                      <Dates>{idx + 1}</Dates>
                      <RewardTxt>{dataItem.volume > 0 ? dataItem.volume : null}</RewardTxt>
                      <RewardTxt className="name" css={TxtLimit}>
                        {dataItem.name}
                      </RewardTxt>
                    </div>
                  )}
                />
              </GridWrap>
              <TxtWrap>
                <Txt>출석</Txt>
                <Point style={{ margin: '0 6px 0 12px' }}>{attendance ? attendance.hitCount : 0}</Point>
                <Txt>일차</Txt>
              </TxtWrap>
            </Fragment>
          ) : (
            <div>이벤트가 없습니다.</div>
          )}
        </Modal>
      ) : null}
    </Fragment>
  )
}

export default observer(Attendance)
