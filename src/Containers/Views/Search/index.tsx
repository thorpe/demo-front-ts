/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useState } from 'react'

import { TitleWrap, Title, Button, ContentWrap } from '@styles/base.style'
import useRootStore from '@store/useRootStore'

import { Input, List } from 'antd'
import { observer } from 'mobx-react'
import { useOnMount } from '@helpers/reactExt'


// css
import {
  SearchWrap,
  ClearBtnStyle,
  ListWrap,
  BettorWrap,
  BettorName,
} from './index.style'


const { Search } = Input

const GoodsSearchPopup: React.FC = () => {

  const { goodsStore , testStore} = useRootStore()

  const [searchText, setSearchText] = useState('')

  useOnMount(async () => {
    await goodsStore.getList()
  })

  const doClickSearchBtn = async value => {
    await goodsStore.getList({ name: value })
  }

  const doChangeSendHeart = async (inputText) => {
    setSearchText(inputText)
  }

  const betterList = (
    <ListWrap>
      <List
        dataSource={goodsStore.tracks}
        renderItem={item => (
          <List.Item>
            <BettorWrap>
              <BettorName>{item.name}</BettorName>
              <span>{item.code}</span>
            </BettorWrap>
          </List.Item>
        )}
      />
    </ListWrap>
  )

  return (
    <ContentWrap>
      <TitleWrap>
        <Title>GoodsSearchPopup</Title>
      </TitleWrap>

      <SearchWrap>
        <Search value={searchText} className="nick" placeholder="검색하세요" onSearch={doClickSearchBtn} onChange={e => doChangeSendHeart(e.target.value)} />
        <Button className="clear-btn" css={ClearBtnStyle} onClick={e => {
          doChangeSendHeart('')
        }}>
        </Button>
      </SearchWrap>
      {betterList}

    </ContentWrap>
  )
}

export default observer(GoodsSearchPopup)
