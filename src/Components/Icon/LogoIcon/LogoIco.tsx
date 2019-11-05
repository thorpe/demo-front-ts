/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment, PureComponent } from 'react'

const Color = css`
  position: relative;
  width: inherit;
  height: inherit;
  path {
    fill: #acacac;
  }
`

export default class LogoIco extends PureComponent {
  render() {
    return (
      <Fragment>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60.198"
          height="77.223"
          viewBox="0 0 60.198 77.223"
          css={Color}
          id="logo-icon"
        >
          <path
            id="symbol"
            d="M287.144,252.889H297.7v-9.708l-30.08-17.357-.037.037L260.888,222v7.722l-23.388,13.5v21.439h49.607V271.9L267.58,283.19l-13.238-7.649H267.58V268.26H237.5v9.745l30.08,17.357h.037l6.84,3.861v-7.869L297.7,277.932V256.456H248.054v-7.207l19.563-11.289,19.527,11.289v3.64"
            transform="translate(-237.5 -222)"
            fill="#434343"
          />
        </svg>
      </Fragment>
    )
  }
}
