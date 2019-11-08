/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { Row, Col } from 'antd'
import { Modal } from 'antd-mobile'
// import useRootStore from '@store/useRootStore'
import { observer } from 'mobx-react'
import { Button } from 'styles/base.style'

// css
import { PopupBtnStyle, PopupTxt } from '../../index.style'

interface DeletePopupProps {
  visible: boolean
  setVisible: (arg: boolean) => void
}

const DeletePopup: React.FC<DeletePopupProps> = (props: DeletePopupProps) => {
  const { visible, setVisible } = props

  return (
    <Modal
      transparent
      visible={visible}
      maskClosable
      onClose={() => {
        setVisible(false)
      }}
      title="메세지 개별삭제"
      // css={ChildModalStyle}
    >
      <PopupTxt>
        삭제 후 복원이 불가능합니다.
        <br />
        삭제하시겠습니까?
      </PopupTxt>
      <Row type="flex" justify="space-between">
        <Col span={12}>
          <Button
            css={PopupBtnStyle}
            className="two-button cancel"
            onClick={() => {
              setVisible(false)
            }}
          >
            취소
          </Button>
        </Col>
        <Col span={12}>
          <Button
            primary
            css={PopupBtnStyle}
            onClick={() => {
              setVisible(false)
            }}
            className="two-button"
          >
            삭제
          </Button>
        </Col>
      </Row>
    </Modal>
  )
}
export default observer(DeletePopup)
