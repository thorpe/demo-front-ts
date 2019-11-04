import React, { Fragment } from 'react'

import Handler from './Handler'
import Browse from './Browse'

function SocketDebugger() {
  return (
    <Fragment>
      <Handler />
      <Browse />
    </Fragment>
  )
}

export default SocketDebugger
