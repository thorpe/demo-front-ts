/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { Fragment } from 'react'
import { Modal, message } from 'antd'

// css
import styled from 'themes/theme'
import { Button, TxtCenter, ModalButtonStyle, JoinClubModalStyle } from 'styles/base.style'

const ClubName = styled.h1`
  font-size: ${props => props.theme.font.title};
`
interface JoinClubPopupProps {
  visible: boolean
  setVisible: (arg: boolean) => void
}

const JoinClubPopup: React.FC<JoinClubPopupProps> = (props: JoinClubPopupProps) => {
  const { visible, setVisible } = props

  return (
    <Fragment>
      <Modal
        visible={visible}
        css={[JoinClubModalStyle, TxtCenter]}
        footer={
          <Fragment>
            <Button
              css={ModalButtonStyle}
              onClick={() => {
                setVisible(false)
              }}
            >
              취소
            </Button>
            <Button
              primary
              css={ModalButtonStyle}
              onClick={() => {
                setVisible(false)
                message.info('강원랜드강원랜드 클럽 가입대기 상태입니다.')
              }}
            >
              클럽가입
            </Button>
          </Fragment>
        }
      >
        <ClubName>강원랜드강원랜드</ClubName>
        <p>
          클럽 미가입 상태입니다.
          <br />
          가입하시겠습니까?
        </p>
      </Modal>
    </Fragment>
  )
}
export default JoinClubPopup
