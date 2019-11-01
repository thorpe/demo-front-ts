/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment, PureComponent } from 'react'

const Color = css`
  width: inherit;
  height: auto;
  .grey {
    fill: #696969;
  }
  .white {
    fill: #fff;
  }
`

export default class InfoIco extends PureComponent {
  render() {
    return (
      <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" width="47.973" height="47.971" viewBox="0 0 47.973 47.971" css={Color}>
          <g id="info" transform="translate(-293.009 -577.629)">
            <path
              id="3266"
              className="grey"
              data-name="패스 3266"
              d="M3.219,36a23.985,23.985,0,1,1,20.8,12,23.985,23.985,0,0,1-20.8-12ZM26.238,9.968Z"
              transform="translate(293 577.6)"
              fill="#696969"
            />
            <path
              id="3267"
              className="white"
              data-name="패스 3267"
              d="M3.564.862a4,4,0,1,1-4,4,4,4,0,0,1,4-4Z"
              transform="translate(313.651 585.888)"
              fill="#fff"
            />
            <g id="구성_요소_1_1" data-name="구성 요소 1 – 1" transform="translate(313.558 597.6)">
              <path
                id="3268"
                className="white"
                data-name="패스 3268"
                d="M1.018,0H6.11A1.208,1.208,0,0,1,7.128,1.333v16A1.208,1.208,0,0,1,6.11,18.667H1.018A1.208,1.208,0,0,1,0,17.333v-16A1.208,1.208,0,0,1,1.018,0Z"
                transform="translate(0.008)"
                fill="#fff"
              />
            </g>
          </g>
        </svg>
      </Fragment>
    )
  }
}
