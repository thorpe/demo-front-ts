/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment, PureComponent } from 'react'

const Color = css`
  width: inherit;
  height: auto;
  path {
    fill: #0c9d80;
  }
`
export default class InfoGreenIco extends PureComponent {
  render() {
    return (
      <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="47.971" viewBox="0 0 48 47.971" css={Color}>
          <g id="그룹_3736" data-name="그룹 3736" transform="translate(-293.009 -577.629)">
            <path
              id="패스_3266"
              data-name="패스 3266"
              d="M3.221,36A24,24,0,1,1,24.033,48,23.975,23.975,0,0,1,3.221,36ZM14.408,7.374A19.2,19.2,0,1,0,23.995,4.8a19.184,19.184,0,0,0-9.586,2.574ZM26.253,9.968Z"
              transform="translate(293 577.6)"
              fill="#0c9d80"
            />
            <path
              id="패스_3267"
              data-name="패스 3267"
              d="M3.564.862a4,4,0,1,1-4,4,4,4,0,0,1,4-4Z"
              transform="translate(313.665 585.888)"
              fill="#0c9d80"
            />
            <path
              id="패스_3268"
              data-name="패스 3268"
              d="M1.018,0H6.11A1.208,1.208,0,0,1,7.128,1.333v16A1.208,1.208,0,0,1,6.11,18.667H1.018A1.208,1.208,0,0,1,0,17.333v-16A1.208,1.208,0,0,1,1.018,0Z"
              transform="translate(313.58 597.6)"
              fill="#0c9d80"
            />
          </g>
        </svg>
      </Fragment>
    )
  }
}
