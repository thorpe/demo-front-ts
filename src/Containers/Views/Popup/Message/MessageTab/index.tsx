/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState } from 'react'
import { Tabs } from 'antd-mobile'

// css
import styled from 'themes/theme'
import { Content, TabWrap } from 'styles/base.style'
import { Models } from 'rmc-tabs'

import MessageList from '../MessageList'

const TabWrapStyle = css`
  position: relative;
  height: 100%;
  /* left: -20px; */
  .am-tabs-default-bar-content {
    position: relative;
    left: 50%;
    display: flex;
    justify-content: space-between;
    width: 94%;
    height: 35px;
    overflow: visible;
    transform: translate(-50%, 0) !important;
  }
  .am-list-view-scrollview {
    height: 100%;
  }
  .am-tabs-pane-wrap-active {
    overflow: hidden;
  }
  .am-tabs-content-wrap {
    margin-bottom: 38px;
  }
`
const TabTxt = styled.span`
  font-size: ${props => props.theme.font.small};
`

const tabs = [
  {
    title: <TabTxt>받은 메세지</TabTxt>,
    key: 'receive',
  },
  {
    title: <TabTxt>보낸 메세지</TabTxt>,
    key: 'send',
  },
]

interface MessageTabProps {
  clubId?: string
}

const MessageTab: React.FC<MessageTabProps> = (props: MessageTabProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { clubId } = props

  const tabChanged = (tab: Models.TabData, index: number) => {
    setCurrentIndex(index)
  }

  return (
    <TabWrap css={TabWrapStyle}>
      <Tabs tabs={tabs} initialPage={currentIndex} page={currentIndex} onChange={tabChanged}>
        <Content key="receive" style={{ height: '100%' }}>
          <MessageList currentIndex={currentIndex} index={0} dir={1} clubId={clubId} />
        </Content>
        <Content key="send" style={{ height: '100%' }}>
          <MessageList currentIndex={currentIndex} index={1} dir={0} clubId={clubId} />
        </Content>
      </Tabs>
    </TabWrap>
  )
}

export default MessageTab
