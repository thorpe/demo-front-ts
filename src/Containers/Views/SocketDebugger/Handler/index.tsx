import React from 'react'

import Type from './Type'
import DataFormat from './DataFormat'
import Send from './Send'

const Handler: React.FC = props => {
  return (
    <div>
      <Type />
      <DataFormat />
      <Send />
    </div>
  )
}

export default Handler
