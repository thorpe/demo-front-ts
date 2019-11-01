/** @jsx jsx */
import { jsx } from '@emotion/core'
import { LoadSpinWrap, LoadSpin } from 'Styles/base.style'

function LayoutLoading() {
  return (
    <LoadSpinWrap>
      <LoadSpin />
    </LoadSpinWrap>
  )
}

export default LayoutLoading
