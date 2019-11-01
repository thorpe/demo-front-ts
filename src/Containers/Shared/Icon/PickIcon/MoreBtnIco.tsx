/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment, PureComponent } from 'react'
import { Theme } from '@themes/theme'

const Color = (theme: Theme) => css`
  position: relative;
  width: inherit;
  height: auto;
  path {
    fill: ${theme.color.themeTxt};
  }
`

export default class MoreBtnIco extends PureComponent {
  render() {
    return (
      <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" css={Color}>
          <g id="그룹_3736" data-name="그룹 3736" transform="translate(-291.595 -579.044)">
            <path
              id="패스_3266"
              data-name="패스 3266"
              d="M5.362,60.017A40,40,0,1,1,40.048,80.029,40,40,0,0,1,5.362,60.017ZM24.007,12.278A32,32,0,1,0,39.985,7.985a32,32,0,0,0-15.977,4.293ZM43.749,16.6Z"
              transform="translate(291.586 579.014)"
              fill="#acacac"
            />
            <path
              id="패스_3268"
              data-name="패스 3268"
              d="M1.471-3.888H8.809a1.805,1.805,0,0,1,1.467,2.006V34.976a1.805,1.805,0,0,1-1.467,2.007H1.471A1.805,1.805,0,0,1,0,34.976V-1.882A1.805,1.805,0,0,1,1.471-3.888Z"
              transform="translate(325.972 602.519)"
              fill="#acacac"
            />
            <path
              id="패스_3652"
              data-name="패스 3652"
              d="M1.471-3.888H8.809a1.805,1.805,0,0,1,1.467,2.006V34.976a1.805,1.805,0,0,1-1.467,2.007H1.471A1.805,1.805,0,0,1,0,34.976V-1.882A1.805,1.805,0,0,1,1.471-3.888Z"
              transform="translate(347.659 613.926) rotate(90)"
              fill="#acacac"
            />
          </g>
        </svg>
      </Fragment>
    )
  }
}
