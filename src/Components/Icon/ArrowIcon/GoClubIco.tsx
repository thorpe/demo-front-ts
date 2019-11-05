/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment, PureComponent } from 'react'

const Color = css`
  width: inherit;
  height: auto;
  rect {
    fill: '#fff';
  }
  path {
    fill: #089d80;
  }
`

export default class GoClubIco extends PureComponent {
  render() {
    return (
      <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" width="64.002" height="64.002" viewBox="0 0 64.002 64.002" css={Color}>
          <g id="그룹_3736" data-name="그룹 3736" transform="translate(-875 385.002) rotate(-90)">
            <rect
              id="사각형_1050"
              data-name="사각형 1050"
              width="48"
              height="30"
              transform="translate(329 895)"
              fill="#fff"
            />
            <path
              id="circledown"
              d="M59.709,15.937A31.866,31.866,0,0,0,48.064,4.292,31.3,31.3,0,0,0,32,0,31.3,31.3,0,0,0,15.938,4.292,31.858,31.858,0,0,0,4.292,15.937,31.3,31.3,0,0,0,0,32,31.307,31.307,0,0,0,4.292,48.063,31.866,31.866,0,0,0,15.938,59.708,31.3,31.3,0,0,0,32,64a31.305,31.305,0,0,0,16.063-4.292A31.857,31.857,0,0,0,59.709,48.063,31.307,31.307,0,0,0,64,32a31.309,31.309,0,0,0-4.291-16.063ZM48.793,33.874,29.876,52.792a2.615,2.615,0,0,1-3.75,0l-4.25-4.251a2.616,2.616,0,0,1,0-3.75L34.668,32,21.875,19.208a2.615,2.615,0,0,1,0-3.75l4.25-4.251a2.617,2.617,0,0,1,3.751,0L48.793,30.124a2.618,2.618,0,0,1,0,3.75Z"
              transform="translate(385.001 875.001) rotate(90)"
              fill="#089d80"
            />
          </g>
        </svg>
      </Fragment>
    )
  }
}
