import React, { useState } from 'react'


import { observer } from 'mobx-react'
import { Title, TitleWrap, ContentWrap } from '@styles/base.style'

import useRootStore from '@store/useRootStore'


const Goods: React.FC = () => {
  const { goodsStore } = useRootStore()


  return (
    <ContentWrap>
      <TitleWrap>
        <Title>Goods</Title>
      </TitleWrap>


    </ContentWrap>
  )
}

export default observer(Goods)