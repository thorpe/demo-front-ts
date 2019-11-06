import React from 'react'
import { Fragment } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { observer } from 'mobx-react'

import Error from '@components/Error'
import menu, { asynchronousComponents } from './menu'
import Header from './Header'
import Sider from './Sider'
import Footer from './Footer'

const PrimaryLayout: React.FC = props => {

  return (
    <Fragment>
      <Sider />
      <Header />
      <Router>
        <Switch>
          {menu.map(m => {
            if (!m.path) {
              return null
            }
            return (
              <Route
                key={m.id}
                exact={m.exact}
                path={m.path}
                component={m.component ? asynchronousComponents[m.component] : null}
              />
            )
          })}
          <Route component={Error} />
        </Switch>
      </Router>
      <Footer />
    </Fragment>
  )
}

export default observer(PrimaryLayout)
