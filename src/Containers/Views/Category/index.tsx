import React from 'react'

import { observer } from 'mobx-react'
import { Title, TitleWrap, ContentWrap } from '@styles/base.style'

const Category: React.FC = () => {

  return (
    <ContentWrap>
      <TitleWrap>
        <Title>Test</Title>
      </TitleWrap>


    </ContentWrap>
  )
}

export default observer(Category)