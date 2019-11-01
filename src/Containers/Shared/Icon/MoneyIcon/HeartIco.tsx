/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment, PureComponent } from 'react'

const Color = css`
  position: relative;
  width: inherit;
  height: auto;
  path {
    fill: #ea3522;
  }
`
export default class HeartIco extends PureComponent {
  render() {
    return (
      <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" width="54.89" height="47.854" viewBox="0 0 54.89 47.854" css={Color}>
          <path
            id="Path_1"
            data-name="Path 1"
            d="M1161.46,913.594c-7.05-16-27.3-12.778-27.43,6.567-.08,11.178,26.67,28.235,27.47,31,.73-2.866,27.49-20.009,27.42-31.112C1188.78,900.652,1168.24,897.591,1161.46,913.594Z"
            transform="translate(-1134.03 -903.307)"
            fill="#ea3522"
            fillRule="evenodd"
          />
        </svg>
      </Fragment>
    )
  }
}
