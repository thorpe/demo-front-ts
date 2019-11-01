/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment, PureComponent } from 'react'

import { Theme } from '@themes/theme'

const Color = (theme: Theme) => css`
  width: inherit;
  height: auto;
  path {
    fill: ${theme.color.primary};
  }
`

export default class IDIco extends PureComponent {
  render() {
    return (
      <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" width="75.073" height="80" viewBox="0 0 75.073 80" css={Color}>
          <path
            id="idIcon"
            d="M51.613,16.188a17.82,17.82,0,0,0-3.754-11.5A12.673,12.673,0,0,0,37.771,0h-.235A12.673,12.673,0,0,0,27.449,4.692a17.143,17.143,0,0,0-3.988,11.5V28.152q0,3.05,4.692,9.619v8.915L18.065,51.144Q8.446,55.367,3.519,59.589,0,62.639,0,65.924v11.73A2.074,2.074,0,0,0,2.346,80H72.962q2.111,0,2.111-2.346V65.924a8.235,8.235,0,0,0-3.284-6.334q-4.927-4.223-14.545-8.446-9.15-3.519-10.323-4.457V37.771a22.07,22.07,0,0,0,2.815-4.457q1.877-3.519,1.877-5.161Z"
            fill="#0c9d80"
          />
        </svg>
      </Fragment>
    )
  }
}
