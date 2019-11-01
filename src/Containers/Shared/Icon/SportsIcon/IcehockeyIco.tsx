/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment, PureComponent } from 'react'

const Color = css`
  position: relative;
  width: inherit;
  height: auto;
  .fill-1 {
    fill: #cb8252;
  }
  .fill-2 {
    fill: #f0c419;
  }
  .fill-3 {
    fill: #546a79;
  }
  .fill-4 {
    fill: #7f5b53;
  }
  .fill-5 {
    fill: #f9eab0;
  }
  .fill-6 {
    fill: #cbb292;
  }
  .fill-7 {
    fill: #2d6794;
  }
`

export default class IcehockeyIco extends PureComponent {
  render() {
    return (
      <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" css={Color}>
          <g id="hockey" transform="translate(-0.001 -2.331)">
            <path
              className="fill-1"
              id="패스_3686"
              data-name="패스 3686"
              d="M3.478,3.191a2.668,2.668,0,0,1,4.236.415L43.5,57c2.361,3.523,4.87,5.314,8.872,5.328H75.213a3.846,3.846,0,0,1,.569.043c2.554.389,3.859,3.606,2.7,6.117L75.935,74a3.737,3.737,0,0,1-3.012,2.177H52.368a14.47,14.47,0,0,1-12.346-7.294L3.158,7.2A3.39,3.39,0,0,1,3.478,3.191Z"
              transform="translate(1.093 0)"
              fill="#cb8252"
            />
            <path
              className="fill-2"
              id="패스_3687"
              data-name="패스 3687"
              d="M40.662,55.177h9.883l2.824-13.846H43.486Z"
              transform="translate(16.748 21)"
              fill="#f0c419"
            />
            <path
              className="fill-3"
              id="패스_3688"
              data-name="패스 3688"
              d="M7.487,13.843l7.939,13.285,5.8-4.318L12.389,9.626Z"
              transform="translate(3.083 3.928)"
              fill="#546a79"
            />
            <g id="그룹_3754" data-name="그룹 3754" transform="translate(0.001 2.331)">
              <path
                className="fill-4"
                id="패스_3689"
                data-name="패스 3689"
                d="M32.918,57c.248.372.51.718.775,1.057L64.09,7.2a3.39,3.39,0,0,0-.319-4,2.667,2.667,0,0,0-4.236.415l-31.2,46.558Z"
                transform="translate(11.67 -2.331)"
                fill="#7f5b53"
              />
              <path
                className="fill-4"
                id="패스_3690"
                data-name="패스 3690"
                d="M34.654,38.563c-2.135,2.811-4.447,4.248-8.02,4.26H3.792a3.364,3.364,0,0,0-3.36,1.909A5.087,5.087,0,0,0,.5,48.975l2.482,5.517c.529,1.154,1.29,2.177,2.475,2.177H9.408a5.934,5.934,0,0,1,5.648-6.154H29.175a5.645,5.645,0,0,1,5.1,3.562,16.39,16.39,0,0,0,4.916-5.192l.816-1.366Z"
                transform="translate(-0.001 17.179)"
                fill="#7f5b53"
              />
            </g>
            <path
              className="fill-5"
              id="패스_3691"
              data-name="패스 3691"
              d="M11.9,49.023h7.216l-1.569-7.692H7.662L9.37,49.708A5.2,5.2,0,0,1,11.9,49.023Z"
              transform="translate(3.156 21)"
              fill="#f9eab0"
            />
            <path
              className="fill-6"
              id="패스_3692"
              data-name="패스 3692"
              d="M45.013,27.44,52.9,14.246l-5.132-3.954L39.059,23.284Z"
              transform="translate(16.088 4.287)"
              fill="#cbb292"
            />
            <path
              className="fill-7"
              id="패스_3693"
              data-name="패스 3693"
              d="M26.428,58.639H12.31a5.934,5.934,0,0,1-5.648-6.154h0a5.934,5.934,0,0,1,5.648-6.154H26.428a5.934,5.934,0,0,1,5.648,6.154h0A5.934,5.934,0,0,1,26.428,58.639Z"
              transform="translate(2.744 23.692)"
              fill="#2d6794"
            />
          </g>
        </svg>
      </Fragment>
    )
  }
}
