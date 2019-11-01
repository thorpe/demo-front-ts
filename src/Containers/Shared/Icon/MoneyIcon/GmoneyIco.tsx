/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment, PureComponent } from 'react'

const Color = css`
  position: relative;
  width: inherit;
  height: auto;
  path {
    fill: #ffc515;
  }
`

export default class GmoneyIco extends PureComponent {
  render() {
    return (
      <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" css={Color}>
          <path
            id="패스_12"
            data-name="패스 12"
            d="M278,1571a32,32,0,1,0,32,32A32,32,0,0,0,278,1571Zm14.486,46.75a17.428,17.428,0,0,1-12,4.45c-10.1,0-17.751-6.7-17.751-19.052,0-12.2,7.9-19.35,17.751-19.35a15.572,15.572,0,0,1,11.451,4.75l-3.951,4.7a9.716,9.716,0,0,0-7.25-3.1c-6.151,0-10.451,4.8-10.451,12.75,0,8.051,3.7,12.9,10.951,12.9a7.454,7.454,0,0,0,4.65-1.4v-7.3h-6.55v-6.051h13.151Z"
            transform="translate(-246 -1571)"
          />
        </svg>
      </Fragment>
    )
  }
}
