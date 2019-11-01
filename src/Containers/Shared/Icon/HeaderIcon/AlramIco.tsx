/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment, PureComponent } from 'react'

import { Theme } from '@themes/theme'

const Color = (theme: Theme) => css`
  width: inherit;
  height: auto;
  path {
    /* fill: ${theme.color.primary}; */
  }
`

export default class AlramIco extends PureComponent {
  render() {
    return (
      <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" width="62.109" height="75" viewBox="0 0 62.109 75" css={Color}>
          <path
            id="alramIcon"
            d="M106.109,57.422h-2.93a4.522,4.522,0,0,1-3.625-1.571,8.948,8.948,0,0,1-1.649-5.8V29.883A22.957,22.957,0,0,0,77.984,7.222V0H72.125V7.222A22.957,22.957,0,0,0,52.2,29.883V50.977a7.173,7.173,0,0,1-1.582,4.914,4.83,4.83,0,0,1-3.692,1.531H44v8.2H67.644a7.617,7.617,0,1,0,14.82,0h23.644Zm-29.3,9.961a1.758,1.758,0,1,1-1.758-1.758A1.76,1.76,0,0,1,76.813,67.383Zm-21.8-7.617a12.91,12.91,0,0,0,3.046-8.789V29.883a17.058,17.058,0,0,1,16.743-16.99h.5a17.058,17.058,0,0,1,16.743,16.99V50.046a14.6,14.6,0,0,0,3.039,9.594l.109.126Z"
            transform="translate(-44)"
            fill="#eee"
          />
        </svg>
      </Fragment>
    )
  }
}
