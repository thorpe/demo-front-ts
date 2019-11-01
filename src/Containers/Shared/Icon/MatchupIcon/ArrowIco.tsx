/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment } from 'react'

import { Theme } from '@themes/theme'

const Color = (theme: Theme) => css`
  width: inherit;
  height: auto;
  path {
    fill: ${theme.color.themeTxt};
  }
`

export default function ArrowIco() {
  return (
    <Fragment>
      <svg xmlns="http://www.w3.org/2000/svg" width="71.138" height="40.551" viewBox="0 0 71.138 40.551" css={Color}>
        <g id="arrow-point-to-right" transform="translate(71.137 -97.139) rotate(90)">
          <path
            id="패스_3654"
            data-name="패스 3654"
            d="M136.231,39.09,105.643,69.677A4.981,4.981,0,1,1,98.6,62.633l27.066-27.065L98.6,8.5a4.982,4.982,0,1,1,7.045-7.045l30.588,30.588a4.981,4.981,0,0,1,0,7.044Z"
            transform="translate(0 0)"
            fill="#eee"
          />
        </g>
      </svg>
    </Fragment>
  )
}
