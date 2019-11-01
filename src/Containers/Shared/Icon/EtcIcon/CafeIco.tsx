/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment, PureComponent } from 'react'

const Color = css`
  width: inherit;
  height: auto;
  path {
    fill: #00d337;
  }
`
export default class CafeIco extends PureComponent {
  render() {
    return (
      <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80.19" viewBox="0 0 80 80.19" css={Color}>
          <g id="그룹_3753" data-name="그룹 3753" transform="translate(-342.773 -246.411)">
            <path
              id="패스_3661"
              data-name="패스 3661"
              d="M342.773,327.742a31.34,31.34,0,0,0,60.76,10.8h4.71a14.529,14.529,0,0,0,0-29.059H342.773v18.264Zm62.388,4.205a31.641,31.641,0,0,0,.281-4.205V316.068h2.8a7.939,7.939,0,0,1,0,15.879Z"
              transform="translate(0 -32.476)"
              fill="#00d337"
              fillRule="evenodd"
            />
            <path
              id="패스_3662"
              data-name="패스 3662"
              d="M369.749,267.3H393.33a20.89,20.89,0,0,0,20.89-20.89H390.639A20.89,20.89,0,0,0,369.749,267.3Z"
              transform="translate(-13.891)"
              fill="#00d337"
              fillRule="evenodd"
            />
          </g>
        </svg>
      </Fragment>
    )
  }
}
