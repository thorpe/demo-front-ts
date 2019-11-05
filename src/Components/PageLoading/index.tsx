import React, { Fragment } from 'react'
import { Spin } from 'antd'

import { LoadSpinWrap } from '@styles/base.style'

const PageLoading: React.FC = (props) => {
  return (
    <Fragment css={LoadSpinWrap}>
      <Spin />
    </Fragment>
  )
}

export default PageLoading
