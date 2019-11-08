/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { Fragment, useState } from 'react'
import { List, message } from 'antd'
// import useRootStore from '@store/useRootStore'
import { observer } from 'mobx-react'
import { Button, Point } from 'styles/base.style'
import ReceiveMessageList from './ReceiveMessageList'
import AllDeletePopup from '../Popup/AllDeletePopup'

// css
import { ListWrap, ListHeaderWrap, ListTitle, TopBtnStyle } from '../index.style'

const ListData = [<ReceiveMessageList />]

const ReceiveMessage: React.FC = props => {
  const [visibleAllDelete, setVisibleAllDelete] = useState(false)
  const onShowModal = () => {
    setVisibleAllDelete(true)
  }

  const ListHeader = [
    <ListHeaderWrap>
      <ListTitle>
        받은 메세지 총 <Point primary>52</Point> 개
      </ListTitle>

      <div style={{ float: 'right' }}>
        {/* onClick={() => message.info('아이템을 모두 받은 후 메세지 삭제가 가능합니다.')} */}
        <Button css={TopBtnStyle} onClick={onShowModal}>
          전체삭제
        </Button>
        <Button css={TopBtnStyle}>전체읽기</Button>
        <Button css={TopBtnStyle} className="received-all" onClick={() => message.info('아이템을 모두 받았습니다.')}>
          모두받기
        </Button>
      </div>
    </ListHeaderWrap>,
  ]
  return (
    <Fragment>
      <ListWrap className="receive">
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
export default observer(ReceiveMessage)
