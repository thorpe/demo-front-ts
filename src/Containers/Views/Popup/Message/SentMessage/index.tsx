/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { Fragment, useState } from 'react'
import { List } from 'antd'
// import useRootStore from '@store/useRootStore'
import { observer } from 'mobx-react'
import { Button, Point } from 'styles/base.style'
import SentMessageList from './SentMessageList'
import AllDeletePopup from '../Popup/AllDeletePopup'

// css
import { ListWrap, ListHeaderWrap, ListTitle, TopBtnStyle } from '../index.style'

const ListData = [<SentMessageList />]

const SentMessage: React.FC = props => {
  const [visibleAllDelete, setVisibleAllDelete] = useState(false)
  const onShowModal = () => {
    setVisibleAllDelete(true)
  }

  const ListHeader = [
    <ListHeaderWrap>
      <ListTitle>
        보낸 메세지 총 <Point primary>52</Point> 개
      </ListTitle>

      <div style={{ float: 'right' }}>
        <Button css={TopBtnStyle} onClick={onShowModal}>
          전체삭제
        </Button>
      </div>
    </ListHeaderWrap>,
  ]

  return (
    <Fragment>
      <ListWrap className="send">
        <List
          header={ListHeader}
          // footer={<div>Footer</div>}
          bordered
          dataSource={ListData}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </ListWrap>

      {/* 전체 삭제 팝업 */}
      <AllDeletePopup visible={visibleAllDelete} setVisible={setVisibleAllDelete} />
    </Fragment>
  )
}
export default observer(SentMessage)
