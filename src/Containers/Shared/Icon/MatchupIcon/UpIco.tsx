/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment, PureComponent } from 'react'

import { Theme } from '@themes/theme'

const Color = (theme: Theme) => css`
  width: inherit;
  height: auto;
  path {
    fill: ${theme.color.win};
  }
`

export default class UpIco extends PureComponent {
  render() {
    return (
      <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" viewBox="0 0 35 30" css={Color}>
          <path id="다각형_1" data-name="다각형 1" d="M17.5,0,35,30H0Z" fill="#d6220f" />
        </svg>
      </Fragment>
    )
  }
}
