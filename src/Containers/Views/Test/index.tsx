import React, { Fragment }  from 'react'
import { observer } from 'mobx-react'

const Test: React.FC = () => {
  return (
    <Fragment>
      <div>sdfsdfsdf1sfsdfsdf</div>
      <div>sdfsdfsdf2sfsdfsdf</div>
      <div>sdfsdfsdf3sfsdfsdf</div>
      <div>sdfsdfsdf4sfsdfsdf</div>
    </Fragment>
  )
}

export default observer(Test)