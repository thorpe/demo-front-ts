/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useState } from 'react'

import { TitleWrap, Title, Button, ContentWrap } from '@styles/base.style'
import useRootStore from '@store/useRootStore'

import { Input, List, message } from 'antd'
import { observer } from 'mobx-react'
import { useOnMount } from '@helpers/reactExt'

// img
import BettorImg from '@assets/Images/icon/bettor_icon/oddsmakerIcon.png'
import ClearIco from '@assets/Images/icon/login_icon/login_clear_icon.png'

// css
import {
  SearchWrap,
  ClearBtnStyle,
  ClearStyle,
  ListWrap,
  BettorWrap,
  BettorName,
  BettorImgStyle,
  ButtonWrap,
  BtnStyle,
} from './index.style'

const Bettor = <img src={BettorImg} alt="베터" css={BettorImgStyle} />
const Clear = <img key="login_clear_icon" src={ClearIco} alt="지우기 버튼" css={ClearStyle} />

const { Search } = Input

const GoodsSearchPopup: React.FC = props => {
  const { goodsStore } = useRootStore()

  const [searchText, setSearchText] = useState('')

  useOnMount(async () => {
    await goodsStore.getList()
  })

  const doClickSearchBtn = async value => {
    await goodsStore.getList({ id: value })
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
              {Bettor}
              <BettorName>베터</BettorName>
              <span>111</span>
            </BettorWrap>
            <ButtonWrap>
              <Button onClick={() => message.info('dd')} css={BtnStyle}>
                하트 보내기
              </Button>
              <Button onClick={() => message.info('dd')} css={BtnStyle}>
                메세지 보내기
              </Button>
            </ButtonWrap>
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
        <Search value={searchText} className="nick" placeholder="베터 닉네임을 검색하세요" onSearch={doClickSearchBtn} onChange={e => doChangeSendHeart(e.target.value)} />
        <Button className="clear-btn" css={ClearBtnStyle} onClick={e => {
          doChangeSendHeart('')
        }}>
          {Clear}
        </Button>
      </SearchWrap>
      {betterList}

    </ContentWrap>
  )
}

export default observer(GoodsSearchPopup)
