/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { Fragment, useState } from 'react'
import { Drawer } from 'antd'
import intl from 'react-intl-universal'

// css
import styled from 'themes/theme'
import { Button } from 'styles/base.style'

import useRootStore from '@store/useRootStore'
import { observer } from 'mobx-react'
import MessageContentPopup from '@views/Popup/MessageContentPopup'
import MessageTab from './MessageTab'
// import SentMessage from './SentMessage'

const DrawerWrap = styled.div`
  position: relative;
  .ant-drawer-body {
    padding: 0 !important;
  }
`

const MessageSendBtnStyle = css`
  position: fixed;
  width: 100vw;
  bottom: 0;
  left: 0;
  padding: 8px 20px;
  border-radius: 0;
`

interface MessagePopupProps {
  visible?: boolean
  setVisible?: (arg: boolean) => void
  clubId?: string
}

const MessagePopup: React.FC<MessagePopupProps> = (props: MessagePopupProps) => {
  const {visible, setVisible, clubId} = props

  const {globalStore} = useRootStore()
  const {collapsedMessage} = globalStore
  const [visibleContent, setVisibleContent] = useState(false)

  const messageVisible = visible === true ? true : !collapsedMessage
  const messageTitle = visible === true ? intl.get('component.club-message') : intl.get('menu.sider.message')

  const onShowContent = () => {
    setVisibleContent(true)
  }

  const doCloseMessage = () => {
    if (visible) {
      setVisible(false)
    } else {
      globalStore.toggleMessageCollapsed(true)
    }
  }

  return (
    <Fragment>
      <DrawerWrap>
        <Drawer
          title={messageTitle}
          className="messagePopup"
          visible={messageVisible}
          height="100%"
          bodyStyle={{height: 'calc(100% - 54px)'}}
          placement="bottom"
          onClose={() => {
            doCloseMessage()
          }}
        >
          <MessageTab clubId={clubId} />
          <Button primary css={MessageSendBtnStyle} onClick={onShowContent}>
            메세지 보내기
          </Button>
        </Drawer>
      </DrawerWrap>

      {/* 메세지 보내기 팝업 */}
      <MessageContentPopup visible={visibleContent} setVisible={setVisibleContent} clubId={clubId}/>
    </Fragment>
  )
}
export default observer(MessagePopup)
