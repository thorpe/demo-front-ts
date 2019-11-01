/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment, PureComponent } from 'react'
import { Theme } from '@themes/theme'

const Color = (theme: Theme) => css`
  position: relative;
  width: inherit;
  height: auto;
  path {
    fill: #AAFF00;
    /* fill: ${theme.color.themeTxt}; */
  }
`

export default class HadicapIco extends PureComponent {
  render() {
    return (
      <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" css={Color}>
          <path
            id="handicap"
            d="M80,40A38.528,38.528,0,0,0,68.267,11.733,38.528,38.528,0,0,0,40,0,38.528,38.528,0,0,0,11.733,11.733,38.528,38.528,0,0,0,0,40,38.528,38.528,0,0,0,11.733,68.267,38.528,38.528,0,0,0,40,80,38.528,38.528,0,0,0,68.267,68.267,38.528,38.528,0,0,0,80,40M66.667,53.333v8H37.333v-8H66.667m-8-32L61.333,24,26.667,58.667,24,56,58.667,21.333M29.333,26.667H40v8H29.333V45.333h-8V34.667H10.667v-8H21.333V16h8Z"
            fill="#AAFF00"
          />
        </svg>
      </Fragment>
    )
  }
}
