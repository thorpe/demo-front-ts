/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment, PureComponent } from 'react'

const Color = css`
  width: inherit;
  height: auto;
  path {
    fill: #089d80;
  }
`
export default class CircleDownIco extends PureComponent {
  render() {
    return (
      <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" css={Color}>
          <path
            id="circledown"
            d="M59.709,15.937A31.866,31.866,0,0,0,48.064,4.292,31.3,31.3,0,0,0,32,0,31.3,31.3,0,0,0,15.938,4.292,31.858,31.858,0,0,0,4.292,15.937,31.3,31.3,0,0,0,0,32,31.307,31.307,0,0,0,4.292,48.063,31.866,31.866,0,0,0,15.938,59.708,31.3,31.3,0,0,0,32,64a31.305,31.305,0,0,0,16.063-4.292A31.857,31.857,0,0,0,59.709,48.063,31.307,31.307,0,0,0,64,32,31.309,31.309,0,0,0,59.709,15.937ZM48.793,33.874,29.876,52.792a2.615,2.615,0,0,1-3.75,0l-4.25-4.251a2.616,2.616,0,0,1,0-3.75L34.668,32,21.875,19.208a2.615,2.615,0,0,1,0-3.75l4.25-4.251a2.617,2.617,0,0,1,3.751,0L48.793,30.124a2.618,2.618,0,0,1,0,3.75Z"
            transform="translate(64) rotate(90)"
            fill="#089d80"
          />
        </svg>
      </Fragment>
    )
  }
}
