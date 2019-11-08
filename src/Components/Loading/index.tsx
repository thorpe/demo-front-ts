import React from 'react'

import { LoadSpinWrap, LoadSpin, ContentWrap } from '@styles/base.style'

const PageLoading: React.FC = (props) => {
  return (
    <ContentWrap>
      <LoadSpinWrap>
        <LoadSpin />
      </LoadSpinWrap>
    </ContentWrap>
  )
}

export default PageLoading
