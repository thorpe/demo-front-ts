/** @jsx jsx */
import React from 'react'
import ReactDOM from 'react-dom'
import { configure } from 'mobx'
import { jsx } from '@emotion/core'



import App from '@shared/App/Index'
import registerServiceWorker from './sw'

registerServiceWorker()
configure({ enforceActions: 'observed' })



const render = (Component: React.ComponentType) => {
  ReactDOM.render(<Component />, document.getElementById('app'),
  )
}


render(App)