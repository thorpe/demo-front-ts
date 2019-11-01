/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment, PureComponent } from 'react'

const Color = css`
  width: inherit;
  height: auto;
  path {
    fill: #696969;
  }
`
export default class UserInfoIco extends PureComponent {
  render() {
    return (
      <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" css={Color}>
          <g id="user_1_" data-name="user (1)" transform="translate(0 -0.05)">
            <path
              id="패스_1160"
              data-name="패스 1160"
              d="M61.457,19.587A31.928,31.928,0,1,0,64,32.043,32.023,32.023,0,0,0,61.457,19.587ZM52.267,49a4.015,4.015,0,0,0-1.219-1.691,66.576,66.576,0,0,0-12.034-7.723.378.378,0,0,1-.21-.341V31.086a3.814,3.814,0,0,0,1.7-3.173V19.456a7.615,7.615,0,0,0-7.617-7.618H31.082a7.615,7.615,0,0,0-7.617,7.618v8.457a3.814,3.814,0,0,0,1.7,3.173v8.156a.378.378,0,0,1-.21.341,67.053,67.053,0,0,0-12.034,7.723A4.183,4.183,0,0,0,11.707,49a26.442,26.442,0,1,1,40.56,0Z"
              transform="translate(0)"
              fill="#696969"
            />
          </g>
        </svg>
      </Fragment>
    )
  }
}
