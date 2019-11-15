import React from 'react'


import { observer } from 'mobx-react'
import { Title, TitleWrap, ContentWrap } from '@styles/base.style'

const Order: React.FC = () => {

  return (
    <ContentWrap>
      <TitleWrap>
        <Title>Order</Title>
      </TitleWrap>


    </ContentWrap>
  )
}

export default observer(Order)