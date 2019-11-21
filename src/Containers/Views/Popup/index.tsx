import React, { Fragment } from 'react'

import GoodsStep01Basket from './GoodsStep01Basket'
import GoodsStep01Detail from './GoodsStep01Detail'

const PopupLayout: React.FC = props => (
  <Fragment>
    <GoodsStep01Basket />
    <GoodsStep01Detail />
  </Fragment>
)

export default PopupLayout
