/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment, PureComponent } from 'react'

const Color = css`
  width: inherit;
  height: auto;
  path {
    fill: #a7d845;
  }
`

export default class HandiOnIco extends PureComponent {
  render() {
    return (
      <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" css={Color}>
          <path
            d="M48,24A23.117,23.117,0,0,0,40.96,7.04,23.117,23.117,0,0,0,24,0,23.117,23.117,0,0,0,7.04,7.04,23.117,23.117,0,0,0,0,24,23.117,23.117,0,0,0,7.04,40.96,23.117,23.117,0,0,0,24,48a23.117,23.117,0,0,0,16.96-7.04A23.117,23.117,0,0,0,48,24m-8,8v4.8H22.4V32H40M35.2,12.8l1.6,1.6L16,35.2l-1.6-1.6L35.2,12.8M17.6,16H24v4.8H17.6v6.4H12.8V20.8H6.4V16h6.4V9.6h4.8Z"
            fill="#a7d845"
          />
        </svg>
      </Fragment>
    )
  }
}
