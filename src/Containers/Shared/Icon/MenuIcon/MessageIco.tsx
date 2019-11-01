/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment } from 'react'

// import { Theme } from '@themes/theme'

const Color = css`
  width: inherit;
  height: auto;
  path {
  }
`
export default function MessageIco() {
  return (
    <Fragment>
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="57.999" viewBox="0 0 80 57.999" css={Color}>
        <g transform="translate(0 0)">
          <path
            id="MessageIco"
            d="M80,6.692a6.424,6.424,0,0,0-2.006-4.685A5.958,5.958,0,0,0,73.315,0H6.462A5.713,5.713,0,0,0,2.006,2.008,6.424,6.424,0,0,0,0,6.692V51.307a5.971,5.971,0,0,0,2.006,4.685A5.713,5.713,0,0,0,6.462,58H73.315a5.958,5.958,0,0,0,4.68-2.008A5.97,5.97,0,0,0,80,51.307V6.692M46.8,34.353l1.56-1.338L72.423,53.538H7.577L31.643,33.015l1.337,1.338a10.115,10.115,0,0,0,7.131,2.677A10.411,10.411,0,0,0,46.8,34.353m4.68-4.238L75.543,7.138V50.415l-24.067-20.3M39.889,32.569A5.155,5.155,0,0,1,36.1,31.007L7.8,4.461H71.978L43.9,31.007a5.427,5.427,0,0,1-4.011,1.562M4.234,50.415V7.138L28.3,30.115,4.234,50.415M51.476,11.6a1.971,1.971,0,0,0-2.228-2.231H30.529A1.971,1.971,0,0,0,28.3,11.6a1.971,1.971,0,0,0,2.228,2.231H49.248A1.971,1.971,0,0,0,51.476,11.6Z"
            fill="#eee"
          />
        </g>
      </svg>
    </Fragment>
  )
}
