/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment, PureComponent } from 'react'
import { Theme } from '@themes/theme'

const Color = (theme: Theme) => css`
  position: relative;
  width: inherit;
  height: auto;
  path {
    fill: #FFCC00;
    /* fill: ${theme.color.themeTxt}; */
  }
`

export default class SpecialIco extends PureComponent {
  render() {
    return (
      <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" css={Color}>
          <path
            id="special"
            d="M241.317,324.233A39.915,39.915,0,1,0,253.05,352.5a38.528,38.528,0,0,0-11.733-28.267m-18.4,9.867a3.461,3.461,0,0,1,2.533,1.067,3.249,3.249,0,0,1,.933,2.4,3.221,3.221,0,0,1-3.467,3.467h-12a3.837,3.837,0,0,0-2.8,1.2,3.567,3.567,0,0,0-1.2,2.8,3.838,3.838,0,0,0,1.2,2.8,4.083,4.083,0,0,0,2.8,1.067h6.8a9.992,9.992,0,0,1,7.733,3.2,10.625,10.625,0,0,1,0,15.2,10.536,10.536,0,0,1-7.733,3.2H205.45a3.72,3.72,0,0,1-2.533-.933,3.461,3.461,0,0,1-1.067-2.533,3.044,3.044,0,0,1,1.067-2.4,3.461,3.461,0,0,1,2.533-1.067h12.267a3.662,3.662,0,0,0,3.867-3.867,3.618,3.618,0,0,0-1.067-2.667,3.837,3.837,0,0,0-2.8-1.2h-6.933A10.926,10.926,0,0,1,199.85,344.9a10.383,10.383,0,0,1,3.2-7.6,10.536,10.536,0,0,1,7.733-3.2Z"
            transform="translate(-173.05 -312.5)"
            fill="#FFCC00"
          />
        </svg>
      </Fragment>
    )
  }
}
