/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment } from 'react'

const Color = css`
  width: inherit;
  height: auto;
  path {
    fill: #434343;
  }
`

export default function EventIco() {
  return (
    <Fragment>
      <svg xmlns="http://www.w3.org/2000/svg" width="148" height="148" viewBox="0 0 148 148" css={Color}>
        <path
          id="합치기_120"
          data-name="합치기 120"
          d="M77.084,148H0V15.418H37V0h9.256V15.418h55.193V0h9.25V15.418H148V148Zm61.676-9.25V61.668H77.084V138.75Zm-129.5,0h61.67V61.668H9.256Zm129.5-86.332V24.668H110.7V37h-9.25V24.668H46.256V37H37V24.668H9.256v27.75ZM49.338,123.371v-.039H21.594v-9.258H49.338v-9.238H30.879V95.582H49.338v-9.25H21.594V77.078H58.588v18.5h.037v9.254h-.037v18.535Zm49.338-.039H89.422V95.582h27.75v-9.25H89.422V77.078h37v27.766h-9.25v-.008h-18.5v9.238h27.746v9.258Z"
          fill="#acacac"
        />
      </svg>
    </Fragment>
  )
}
