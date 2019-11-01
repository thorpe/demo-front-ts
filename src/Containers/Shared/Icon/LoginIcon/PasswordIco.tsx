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

export default class PasswordIco extends PureComponent {
  render() {
    return (
      <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" width="61.269" height="80" viewBox="0 0 61.269 80" css={Color}>
          <path
            id="passwordIcon"
            d="M121.512,37.27l-4.048,1V24.78a25.435,25.435,0,0,0-6.763-17.4,22.767,22.767,0,0,0-33.566,0,25.425,25.425,0,0,0-6.766,17.4V38.27H66.316A3.036,3.036,0,0,0,63.285,41.3v35.66A3.036,3.036,0,0,0,66.316,80h55.2a3.034,3.034,0,0,0,3.039-3.039V41.3C124.554,39.625,123.193,37.27,121.512,37.27ZM81.545,24.78A14.254,14.254,0,0,1,85.3,15.022a11.557,11.557,0,0,1,17.217,0,14.205,14.205,0,0,1,3.759,9.757V38.27H81.545Z"
            transform="translate(-63.285 0)"
            fill="#eee"
          />
        </svg>
      </Fragment>
    )
  }
}
