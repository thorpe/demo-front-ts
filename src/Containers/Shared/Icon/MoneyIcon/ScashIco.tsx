/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment, PureComponent } from 'react'

const Color = css`
  position: relative;
  width: inherit;
  height: auto;
  path {
    fill: #98d515;
  }
`

export default class ScashIco extends PureComponent {
  render() {
    return (
      <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" width="54.842" height="54.842" viewBox="0 0 54.842 54.842" css={Color}>
          <path
            id="Ellipse_6_copy"
            data-name="Ellipse 6 copy"
            d="M1161.46,991.988a27.421,27.421,0,1,1-27.42,27.421,27.421,27.421,0,0,1,27.42-27.421Zm2.03,43.532a12.282,12.282,0,0,0,9.69-4.48l-3.2-3.77a8.274,8.274,0,0,1-6.28,2.8c-4.8,0-8.12-3.79-8.12-10.39,0-6.53,3.65-10.24,8.24-10.24a7.6,7.6,0,0,1,5.58,2.32l3.21-3.86a12.4,12.4,0,0,0-8.91-3.9c-7.67,0-14.87,5.87-14.87,15.88C1148.83,1030.02,1155.82,1035.52,1163.49,1035.52Z"
            transform="translate(-1134.04 -991.988)"
            fillRule="evenodd"
          />
        </svg>
      </Fragment>
    )
  }
}
