import React from 'react'

import Type from './Type'
import DataFormat from './DataFormat'
import Connect from './Connect'
import Send from './Send'

const Handler: React.FC = props => {
    return (
        <div >
            <div >
                <Type />
                <DataFormat />
            </div>
            <Connect />
            <Send />
        </div>
    )
}

export default Handler
