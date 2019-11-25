/** @jsx jsx */
import { jsx } from '@emotion/core'
import 'antd-mobile/dist/antd-mobile.css'
import Loadable from 'react-loadable'

import { HashRouter, Router, Switch, Route } from 'react-router-dom'
import { createHashHistory } from 'history'
import { syncHistoryWithStore } from 'mobx-react-router'


import * as store from '@store/Index'
import PageLoading from '@components/Loading'
import Error from '@components/Error'
import { ReactElement } from 'react'


const hashHistory = createHashHistory()
const history = syncHistoryWithStore(hashHistory, store.routerStore)

const PrimaryLayout = Loadable({
  loader: () => import('@views/Layout/Index'),
  loading: PageLoading,
})

const Login = Loadable({
  loader: () => import( '@views/Login'),
  loading: PageLoading,
})

const Popup2 = Loadable({
  loader: () => import( '@views/Popup2/Index'),
  loading: PageLoading,
})


function Routers() : ReactElement{

  console.log(new Date() + 'Routers')

  return (
    <Router history={history}>
      <HashRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/popup2" component={Popup2} />
          <Route path="/" component={PrimaryLayout} />
          <Route component={Error} />
        </Switch>
      </HashRouter>
    </Router>
  )
}

export default Routers
