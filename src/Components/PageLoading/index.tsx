import React, { Fragment } from 'react'
import { Spin } from 'antd'

import { LoadSpin } from '@styles/base.style'

const PageLoading: React.FC = (props) => {
  return (
    <Fragment css={LoadSpin}>
      <Spin tip="Loading..."></Spin>
    </Fragment>
  )
}

export default PageLoading
