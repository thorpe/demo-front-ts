/** @jsx jsx */
import { jsx } from '@emotion/core'
import { LoadSpinWrap, LoadSpin } from '@styles/base.style'
import React from 'react'

const LayoutLoading: React.FC = props => {
  return (
    <LoadSpinWrap>
      <LoadSpin />
    </LoadSpinWrap>
  )
}

export default LayoutLoading
