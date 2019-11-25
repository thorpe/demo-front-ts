import React from 'react'
import { Fragment } from 'react'
import { BackTop } from 'antd'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'


import Error from '@components/Error'
import route, { asynchronousComponents } from '@routes/Route'
import ComponentPopup from '@views/Popup/Index'
import Header from './Header/Index'
import LeftMenu from './Sider/Index'
import Footer from './Footer/Index'
import Dialog from '../Dialog/Index'
import { observer } from "mobx-react"

// import { socketConnect } from '@services/Websocket/Index'
// import { useOnMount } from '@helpers/reactExt'
// import useRootStore from '@store/useRootStore'

const PrimaryLayout: React.FC = props => {
  // const { socketStore } = useRootStore()

  // const handleConnect = async () => {
  //   socketConnect('http://localhost:8080')
  //   socketStore.clearMessages()
  // }
  // useOnMount(handleConnect)

  console.log('Render ------> PrimaryLayout')

  return (
    <Fragment>
      <LeftMenu />
      <Header />
      <Router>
        <Switch>
          {route.map(m => {
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
      <BackTop />
      <ComponentPopup />
      <Dialog />
    </Fragment>
  )
}

export default observer(PrimaryLayout)
