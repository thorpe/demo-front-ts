/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment, PureComponent } from 'react'

const Color = css`
  width: inherit;
  height: auto;
  path {
    fill: #adadad;
  }
`

export default class CrossOffIco extends PureComponent {
  render() {
    return (
      <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" css={Color}>
          <path
            d="M24-1102a24.027,24.027,0,0,1-24-24,24.027,24.027,0,0,1,24-24,24.027,24.027,0,0,1,24,24A24.027,24.027,0,0,1,24-1102Zm2.886-20.914-.222.291-.324.426c-.8,1.052-1.657,2.17-2.591,3.27,2.924,2.853,5.917,4.182,9.419,4.182h1.272v4.321L42-1116.9l-7.56-6.481v3.6H33.168c-2.253,0-4.191-.965-6.283-3.129h0ZM6-1120.145v5.041H9.767c6.649,0,10.4-4.926,13.7-9.272,2.975-3.911,5.544-7.288,9.7-7.288h1.272v3.626L42-1134.52l-7.56-6.48v4.3H33.168c-6.651,0-10.4,4.928-13.7,9.277-2.977,3.907-5.548,7.282-9.7,7.282ZM9.767-1131.3c2.151,0,3.993.868,5.972,2.815l.66-.859.2-.26c.7-.926,1.446-1.9,2.252-2.873a12.769,12.769,0,0,0-9.083-3.864H6v5.041Z"
            transform="translate(0 1150)"
            fill="#adadad"
          />
        </svg>
      </Fragment>
    )
  }
}
