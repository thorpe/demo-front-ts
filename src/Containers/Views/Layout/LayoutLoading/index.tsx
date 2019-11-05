/** @jsx jsx */
import { jsx } from '@emotion/core'
import { LoadSpinWrap, LoadSpin } from '@styles/base.style'



function LayoutLoading() {
  return (
    <LoadSpinWrap>
      <LoadSpin />
    </LoadSpinWrap>
  )
}

export default LayoutLoading
