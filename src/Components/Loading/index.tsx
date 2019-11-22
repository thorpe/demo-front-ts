import React from 'react'

import { LoadSpinWrap, LoadSpin, ContentWrap } from '@styles/base.style'

const PageLoading: React.FC = () => {
  return (
    <ContentWrap>
      <LoadSpinWrap>
        <LoadSpin />
      </LoadSpinWrap>
    </ContentWrap>
  )
}

export default PageLoading
