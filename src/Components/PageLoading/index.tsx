import React from 'react'
import { Spin } from 'antd'

import { LoadSpinWrap } from '@styles/base.style'

const PageLoading: React.FC = (props) => {
  return (
    <div css={LoadSpinWrap}>
      <Spin />
    </div>
  )
}

export default PageLoading
