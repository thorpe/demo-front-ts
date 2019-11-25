import React from 'react'


import { observer } from 'mobx-react'
import { Title, TitleWrap, ContentWrap } from '@styles/base.style'



const Goods: React.FC = () => {


  return (
    <ContentWrap>
      <TitleWrap>
        <Title>Goods</Title>
      </TitleWrap>


    </ContentWrap>
  )
}

export default observer(Goods)