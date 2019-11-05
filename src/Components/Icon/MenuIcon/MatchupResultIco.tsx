/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment, } from 'react'

const Color = css`
  width: inherit;
  height: auto;
  path {
    fill: #434343;
  }
`

export default function MatchupResultIco() {

  return (
    <Fragment>
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" css={Color}>
        <path
          id="resultIcon"
          d="M40,80A39.985,39.985,0,0,1,11.717,11.716,40,40,0,1,1,55.57,76.856,39.756,39.756,0,0,1,40,80ZM55.855,58.89h0l7.771,7.776,3.89-3.889L59.744,55l7.778-7.778-3.892-3.889-7.775,7.778-7.778-7.778-3.888,3.889L51.965,55l-7.772,7.778,3.89,3.889,7.771-7.776Zm1.58-37.846h0L22.078,56.4l2.65,2.654L60.085,23.695l-2.649-2.65Zm-34.1-7.712A13.334,13.334,0,1,0,36.668,26.668,13.349,13.349,0,0,0,23.332,13.332Zm0,22A8.666,8.666,0,1,1,32,26.668,8.673,8.673,0,0,1,23.332,35.334Z"
          fill="#434343"
        />
      </svg>
    </Fragment>
  )
}
