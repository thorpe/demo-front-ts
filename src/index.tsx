/** @jsx jsx */
import React from 'react'
import ReactDOM from 'react-dom'
import { configure } from 'mobx'
import { Global, css, jsx } from '@emotion/core'

import App from '@shared/App'
import registerServiceWorker from './sw'

registerServiceWorker()
configure({ enforceActions: 'observed' })

const render = (Component: React.ComponentType) => {
  ReactDOM.render(
    <Component>
      <Global
        styles={css`
          html,
          body {
            width: 100%;
            height: 100%;
          }

          #app {
            display: flex;
            position: relative;
            width: 100%;
            height: 100%;
            flex-direction: column;
          }

          svg,
          svg path {
            fill: currentcolor;
          }

          .center-table {
            table td {
              text-align: center;
            }

            .ant-table-thead > tr > th {
              text-align: center;
            }
          }
        `}
      />
    </Component>,
    document.getElementById('app'),
  )
  ReactDOM.render(<Component />, document.getElementById('app'))
}

render(App)