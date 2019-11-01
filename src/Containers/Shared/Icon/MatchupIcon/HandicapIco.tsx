/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment, PureComponent } from 'react'

import { Theme } from '@themes/theme'

const Color = (theme: Theme) => css`
  width: inherit;
  height: auto;
  path {
    fill: ${theme.color.handicap};
  }
`

export default class HandicapIco extends PureComponent {
  render() {
    return (
      <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="47.999" viewBox="0 0 48 47.999" css={Color}>
          <g id="그룹_3751" data-name="그룹 3751" transform="translate(-858.857 -600.858)">
            <g id="그룹_3736" data-name="그룹 3736" transform="translate(858.857 600.858)">
              <path
                id="빼기_4"
                data-name="빼기 4"
                d="M24,48a23.981,23.981,0,1,1,.019,0Zm6.354-5.852h0l-1.377.37h0l1.373-.369ZM12.653,27.095h7.975V35.07a1.08,1.08,0,0,0,.88,1.2h4.4a1.079,1.079,0,0,0,.879-1.2V27.095h7.976a1.147,1.147,0,0,0,.126.007,1.084,1.084,0,0,0,1.077-.887v-4.4a1.084,1.084,0,0,0-1.077-.887,1.146,1.146,0,0,0-.126.007H26.792V12.955a1.078,1.078,0,0,0-.879-1.2h-4.4a1.08,1.08,0,0,0-.88,1.2v7.976H12.653a1.151,1.151,0,0,0-.128-.007,1.084,1.084,0,0,0-1.076.887v4.4a1.083,1.083,0,0,0,1.076.888,1.156,1.156,0,0,0,.128-.007Z"
                transform="translate(0 0)"
                fill="#f90"
              />
            </g>
          </g>
        </svg>
      </Fragment>
    )
  }
}
