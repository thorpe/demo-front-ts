import React from 'react'

import { observer } from 'mobx-react'
import { Title, TitleWrap, ContentWrap } from '@styles/base.style'

const MyPage: React.FC = () => {

  return (
    <ContentWrap>
      <TitleWrap>
        <Title>Profile Update</Title>
      </TitleWrap>


    </ContentWrap>
  )
}

export default observer(MyPage)