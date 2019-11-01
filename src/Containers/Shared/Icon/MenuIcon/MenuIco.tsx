/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment, } from 'react'

const Color = css`
  width: inherit;
  height: auto;
  path {
    fill: #434343;
  }
`

export default function MenuIco() {

  return (
    <Fragment>
      <svg xmlns="http://www.w3.org/2000/svg" width="68.614" height="54.32" viewBox="0 0 68.614 54.32" css={Color}>
        <g id="picksterTopHamburger" transform="translate(-380 -10)">
          <path
            id="패스_6"
            data-name="패스 6"
            d="M5.278,0H63.336c2.915,0,5.278,1.92,5.278,4.288s-2.363,4.288-5.278,4.288H5.278C2.363,8.577,0,6.657,0,4.288S2.363,0,5.278,0Z"
            transform="translate(380 10)"
            fill="#434343"
          />
          <path
            id="패스_6-2"
            data-name="패스 6"
            d="M5.278,0H63.336c2.915,0,5.278,1.92,5.278,4.288s-2.363,4.288-5.278,4.288H5.278C2.363,8.577,0,6.657,0,4.288S2.363,0,5.278,0Z"
            transform="translate(380 32.872)"
            fill="#434343"
          />
          <path
            id="패스_6-3"
            data-name="패스 6"
            d="M5.278,0H63.336c2.915,0,5.278,1.92,5.278,4.288s-2.363,4.288-5.278,4.288H5.278C2.363,8.577,0,6.657,0,4.288S2.363,0,5.278,0Z"
            transform="translate(380 55.743)"
            fill="#434343"
          />
        </g>
      </svg>
    </Fragment>
  )
}
