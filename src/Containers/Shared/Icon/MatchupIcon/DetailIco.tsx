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

export default class DetailIco extends PureComponent {
  render() {
    return (
      <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" width="82" height="71.031" viewBox="0 0 82 71.031" css={Color}>
          <g id="그룹_3748" data-name="그룹 3748" transform="translate(1 10.872)">
            <g id="그룹_3747" data-name="그룹 3747" transform="translate(11.13 -7)">
              <g id="그룹_3743" data-name="그룹 3743" transform="translate(0 0)">
                <path
                  id="패스_3659"
                  data-name="패스 3659"
                  d="M92.353,14.4v2.215h12.3L82.756,34.868,69.158,23.93,51.6,37.987l1.94,1.566L69.158,27.063l13.6,10.924,23.313-19.069V30.3h2.766V14.4Z"
                  transform="translate(-51.6 -17.268)"
                  fill="#0c9d80"
                  stroke="#0c9d80"
                  strokeWidth="2"
                />
              </g>
            </g>
            <g id="graph" transform="translate(0 7.563)">
              <path
                id="패스_3657"
                data-name="패스 3657"
                d="M77.532,56.006V14.95H63.5V56.006H57.3V24.559H44.16V56.006H37.078V34.169H25.287V56.006H13.4V6.812H10.545v51.6h80v-2.4Z"
                transform="translate(-10.545 -6.812)"
                fill="#0c9d80"
                stroke="#0c9d80"
                strokeWidth="2"
              />
            </g>
          </g>
        </svg>
      </Fragment>
    )
  }
}
