/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment, PureComponent } from 'react'

const Color = css`
  position: relative;
  width: inherit;
  height: auto;
  path {
    fill: #696969;
  }
`

export default class DetailBetIco extends PureComponent {
  render() {
    return (
      <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="64.256" viewBox="0 0 48 64.256" css={Color}>
          <g id="그룹_5118" data-name="그룹 5118" transform="translate(-51 -657)">
            <g id="notebook" transform="translate(51 657)">
              <g id="그룹_5117" data-name="그룹 5117">
                <path
                  id="패스_3789"
                  data-name="패스 3789"
                  d="M94.064,5.208H86.093v-3.1a2.109,2.109,0,0,0-4.218,0v3.1H74.282v-3.1a2.109,2.109,0,1,0-4.218,0v3.1H62.472v-3.1a2.109,2.109,0,0,0-4.218,0v3.1H50.282a2.109,2.109,0,0,0-2.109,2.109v54.83a2.109,2.109,0,0,0,2.109,2.109H94.064a2.109,2.109,0,0,0,2.109-2.109V7.317A2.109,2.109,0,0,0,94.064,5.208Zm-2.109,54.83H52.392V9.426h5.862v2.462a2.109,2.109,0,0,0,4.218,0V9.426h7.593v2.462a2.109,2.109,0,1,0,4.218,0V9.426h7.593v2.462a2.109,2.109,0,0,0,4.218,0V9.426h5.862Z"
                  transform="translate(-48.173)"
                  fill="#696969"
                />
                <path
                  id="패스_3790"
                  data-name="패스 3790"
                  d="M131,139.758H106.025a2.109,2.109,0,0,0,0,4.219H131a2.109,2.109,0,0,0,0-4.219Z"
                  transform="translate(-94.511 -116.177)"
                  fill="#696969"
                />
                <path
                  id="패스_3791"
                  data-name="패스 3791"
                  d="M131,209.758H106.025a2.108,2.108,0,1,0,0,4.217H131a2.108,2.108,0,1,0,0-4.217Z"
                  transform="translate(-94.511 -174.366)"
                  fill="#696969"
                />
                <path
                  id="패스_3792"
                  data-name="패스 3792"
                  d="M131,279.758H106.025a2.109,2.109,0,0,0,0,4.219H131a2.109,2.109,0,0,0,0-4.219Z"
                  transform="translate(-94.511 -232.555)"
                  fill="#696969"
                />
              </g>
            </g>
          </g>
        </svg>
      </Fragment>
    )
  }
}
