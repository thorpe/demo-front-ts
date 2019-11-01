/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment, PureComponent } from 'react'

const Color = css`
  width: inherit;
  height: auto;
  path {
    fill: #acacac;
  }
`
export default class ListChatIco extends PureComponent {
  render() {
    return (
      <Fragment>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          /* xmlns:xlink="http://www.w3.org/1999/xlink" */ width="61.089"
          height="52.999"
          viewBox="0 0 61.089 52.999"
          css={Color}
        >
          <defs>
            <clipPath id="clip-path">
              <rect width="61.089" height="52.999" fill="none" />
            </clipPath>
          </defs>
          <g id="icon_chat" clipPath="url(#clip-path)">
            <g id="icon_chat-2" data-name="icon_chat">
              <g id="그룹_3497" data-name="그룹 3497" transform="translate(0 0)">
                <path
                  id="패스_2224"
                  data-name="패스 2224"
                  d="M148.9,36.55a7,7,0,0,1,6.992,6.992V71.356a7,7,0,0,1-6.992,6.992H117.556l-8.833,10.225a2.808,2.808,0,0,1-4.935-1.825V78.364h-2A7,7,0,0,1,94.8,71.372V43.542a7,7,0,0,1,6.992-6.992ZM98.606,43.542V71.356a3.209,3.209,0,0,0,3.2,3.2h3.883a1.9,1.9,0,0,1,1.9,1.9v7.626l7.673-8.864a1.879,1.879,0,0,1,1.439-.65H148.9a3.209,3.209,0,0,0,3.2-3.2V43.542a3.209,3.209,0,0,0-3.2-3.2H101.808A3.209,3.209,0,0,0,98.606,43.542Z"
                  transform="translate(-94.8 -36.55)"
                  fill="#acacac"
                />
                <ellipse
                  id="타원_272"
                  data-name="타원 272"
                  cx="2.259"
                  cy="2.259"
                  rx="2.259"
                  ry="2.259"
                  transform="translate(28.294 19.306)"
                  fill="#acacac"
                />
                <ellipse
                  id="타원_273"
                  data-name="타원 273"
                  cx="2.259"
                  cy="2.259"
                  rx="2.259"
                  ry="2.259"
                  transform="translate(35.858 19.306)"
                  fill="#acacac"
                />
                <ellipse
                  id="타원_274"
                  data-name="타원 274"
                  cx="2.259"
                  cy="2.259"
                  rx="2.259"
                  ry="2.259"
                  transform="translate(20.729 19.306)"
                  fill="#acacac"
                />
              </g>
            </g>
          </g>
        </svg>
      </Fragment>
    )
  }
}
