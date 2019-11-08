/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState, Fragment } from 'react'
// import { message } from 'antd'
import { Modal } from 'antd-mobile'
import useRootStore from '@store/useRootStore'
import { observer } from 'mobx-react'
import { Button, mq, TxtLimit } from 'styles/base.style'
import { CartItem } from '@store/matchupStore'
import ClubPortal from './ClubPortalList'
import { useOnMount } from '@utils/reactExt'
import { ClubInfoItem } from '@store/clubStore'
import ClubInfoPopUp from './ClubPortalList'

// css
import styled, { ThemeProps, Theme } from 'themes/theme'
// import { getDayFromWeek } from '@amcharts/amcharts4/.internal/core/utils/Utils'

const Title = styled.h2`
  font-size: ${props => props.theme.font.large};
`
const CloseBtn = (theme: Theme) =>
  css`
    float: right;
    /* position: absolute; */
    top: -25px;
    right: 5px;
    width: 40px;
    height: 40px;
    padding: 0;
    overflow: hidden;
    background: ${theme.color.TP};
    border: none;
    box-shadow: none;
    &::before {
      position: absolute;
      top: 16.5px;
      left: 15px;
      display: block;
      width: 15px;
      height: 15px;
      background: ${theme.color.TP};
      border: none;
      border-left: 2px solid ${theme.color.themeTxt};
      border-radius: 0;
      transform: rotate(45deg);
      opacity: 1;
      animation: none;
      content: '';
    }
    &::after {
      position: absolute;
      top: 7px;
      right: 10px;
      display: block;
      width: 15px;
      height: 15px;
      background: ${theme.color.TP};
      border-left: 2px solid ${theme.color.themeTxt};
      transform: rotate(-45deg);
      opacity: 1;
      content: '';
    }
    p {
      position: absolute;
      line-height: 9999;
    }
  `

interface ClubPotalPopupProps {
  visible: boolean
  setVisible: (arg: boolean) => void
}

const ClubPotalPopup: React.FC<ClubPotalPopupProps> = (props: ClubPotalPopupProps) => {
  const { visible, setVisible } = props
  const [clubDetail, setClubDetail] = useState(null)
  const { authStore, clubStore, routerStore, globalStore } = useRootStore()
  const { signedin } = authStore
  const { clubs = [] } = clubStore

  const onClickMatchup = (id: string) => {
    routerStore.history.push(`/matchup/${id}`)
  }

  const onClickShowDetail = (club: ClubInfoItem) => {
    setClubDetail(club)
  }

  const onCloseClubDetail = () => {
    setClubDetail(null)
  }

  useOnMount(() => {
    clubStore.fetch({})
  })

  const clubList = []
  for (const el of clubs) {
    clubList.push(
      <div>
        <ClubInfoPopUp
          signedin={signedin}
          club={el}
          onClickMatchup={onClickMatchup}
          onClickShowDetail={onClickShowDetail}
        />
      </div>,
    )
  }

  const isDetailVisible = clubDetail !== null
  return (
    <Modal
      popup
      visible={visible}
      maskClosable
      animationType="slide-up"
      onClose={() => {
        setVisible(false)
      }}
      title={
        <Fragment>
          <Title>클럽찾기</Title>
          <Button
            css={CloseBtn}
            onClick={() => {
              setVisible(false)
            }}
          >
            <p>닫기</p>
          </Button>
        </Fragment>
      }
      className="club-potal"
    >
      {clubList}
    </Modal>
  )
}
export default observer(ClubPotalPopup)
