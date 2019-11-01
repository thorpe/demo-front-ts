/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment, PureComponent } from 'react'

const Color = css`
  width: inherit;
  height: auto;
  path {
    fill: #fff;
  }
`
export default class ChatIco extends PureComponent {
  render() {
    return (
      <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" width="75.754" height="64.446" viewBox="0 0 75.754 64.446" css={Color}>
          <g id="icon_chat" transform="translate(0 -36.55)">
            <g id="그룹_3497" data-name="그룹 3497" transform="translate(0 36.55)">
              <path
                id="패스_2224"
                data-name="패스 2224"
                d="M101.792,36.55A7,7,0,0,0,94.8,43.542V71.356a7,7,0,0,0,6.992,6.992h31.341l8.833,10.225a2.808,2.808,0,0,0,4.935-1.825V78.364h2a7,7,0,0,0,6.992-6.992V43.542A7,7,0,0,0,148.9,36.55Zm50.291,6.992V71.356a3.209,3.209,0,0,1-3.2,3.2H145a1.9,1.9,0,0,0-1.9,1.9v7.626l-7.673-8.864a1.879,1.879,0,0,0-1.439-.65H101.792a3.209,3.209,0,0,1-3.2-3.2V43.542a3.209,3.209,0,0,1,3.2-3.2h47.089A3.209,3.209,0,0,1,152.084,43.542Z"
                transform="translate(-80.135 -36.55)"
                fill="#fff"
              />
              <path
                id="패스_2225"
                data-name="패스 2225"
                d="M10.813,163.363a2.8,2.8,0,0,0,.99.186,2.764,2.764,0,0,0,2.1-.975l8.833-10.225h27.6a1.9,1.9,0,1,0,0-3.805H21.874a1.9,1.9,0,0,0-1.439.65l-7.657,8.895v-7.626a1.9,1.9,0,0,0-1.9-1.9H6.992a3.209,3.209,0,0,1-3.2-3.2V117.542a3.209,3.209,0,0,1,3.2-3.2,1.9,1.9,0,1,0,0-3.79A7,7,0,0,0,0,117.542v27.814a7,7,0,0,0,6.992,6.992h2v8.384A2.759,2.759,0,0,0,10.813,163.363Z"
                transform="translate(0 -99.103)"
                fill="#fff"
              />
              <ellipse
                id="타원_272"
                data-name="타원 272"
                cx="2.259"
                cy="2.259"
                rx="2.259"
                ry="2.259"
                transform="translate(42.943 19.306)"
                fill="#fff"
              />
              <ellipse
                id="타원_273"
                data-name="타원 273"
                cx="2.259"
                cy="2.259"
                rx="2.259"
                ry="2.259"
                transform="translate(35.379 19.306)"
                fill="#fff"
              />
              <ellipse
                id="타원_274"
                data-name="타원 274"
                cx="2.259"
                cy="2.259"
                rx="2.259"
                ry="2.259"
                transform="translate(50.508 19.306)"
                fill="#fff"
              />
            </g>
          </g>
        </svg>
      </Fragment>
    )
  }
}
