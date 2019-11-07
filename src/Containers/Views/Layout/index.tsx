import React from 'react'
import { Fragment } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { observer } from 'mobx-react'

import Error from '@components/Error'
import menu, { asynchronousComponents } from './menu'
import Header from './Header'
import LeftMenu from './Sider'
import Footer from './Footer'
import { socketConnect } from '@services/Websocket'
import { useOnMount } from '@helpers/reactExt'
import useRootStore from '@store/useRootStore'

const PrimaryLayout: React.FC = props => {
  const { socketStore } = useRootStore()

  const handleConnect = async () => {
    socketConnect('http://localhost:8080')
    socketStore.clearMessages()
  }
  useOnMount(handleConnect)

  return (
    <Fragment>
      <LeftMenu />
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
