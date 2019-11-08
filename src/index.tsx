/** @jsx jsx */
import React from 'react'
import ReactDOM from 'react-dom'
import { configure } from 'mobx'
import { jsx } from '@emotion/core'

import App from '@shared/App'
import registerServiceWorker from './sw'
import Splash from '@components/Splash'

registerServiceWorker()
configure({ enforceActions: 'observed' })

const render = (Component: React.ComponentType) => {
  console.log('1')
  ReactDOM.render(
    <Component>
      <div>11--------------</div>
      <Splash />
    </Component>,
    document.getElementById('app'),
  )
}

render(App)