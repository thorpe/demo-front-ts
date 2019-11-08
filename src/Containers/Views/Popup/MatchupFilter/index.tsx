/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { Fragment } from 'react'
import { List } from 'antd'
import { Modal } from 'antd-mobile'

// css
import { Button, Point, Right } from 'styles/base.style'
import { MatchupFilterTrack } from '@store/matchupStore'
import { FilterList, ListBtnStyle, ImgStyle, LeagueName, OkBtnStyle } from './index.style'

function getSymbolIco(e) {
  e.target.src = 'https://adventurer486.s3.ap-northeast-2.amazonaws.com/data_center/qa/meta_image/symbol.png'
}

function getRowEle(el: MatchupFilterTrack, onClickItem: (uniqueId: number) => void) {
  const { UniqueID, Name, matchCount, emblemCategory, emblemTournament } = el
  return (
    <Button css={ListBtnStyle} onClick={() => onClickItem(UniqueID)}>
      <List.Item>
        <img src={emblemCategory} alt="cate" onError={getSymbolIco} css={ImgStyle} />
        <img src={emblemTournament} alt="league" onError={getSymbolIco} css={ImgStyle} />
        <LeagueName>{Name}</LeagueName>
        <Point css={Right}>{el.matchCount}</Point>
      </List.Item>
    </Button>
  )
}

interface MatchupFilterPopupProps {
  tracks: MatchupFilterTrack[]
  visible: boolean
  onClose: () => void
  onClickItem: (uniqueId: number) => void
}

const MatchupFilterPopup: React.FC<MatchupFilterPopupProps> = (props: MatchupFilterPopupProps) => {
  const { tracks, visible, onClose, onClickItem } = props

  return (
    <Fragment>
      <Modal
        transparent
        maskClosable
        className="filter-popup"
        visible={visible}
        onClose={() => {
          onClose()
        }}
      >
        <List
          className="filter-list"
          css={FilterList}
          header={<div>국가/리그</div>}
          // footer={<div>Footer</div>}
          bordered
          dataSource={tracks}
          renderItem={(item: MatchupFilterTrack) => {
            return getRowEle(item, onClickItem)
          }}
        />
        <Button
          primary
          onClick={() => {
            onClose()
          }}
          css={OkBtnStyle}
        >
          확인
        </Button>
      </Modal>
    </Fragment>
  )
}

export default MatchupFilterPopup
