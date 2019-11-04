import React from 'react'
import { Fragment } from 'react'
import { Layout, BackTop } from 'antd'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { observer } from 'mobx-react'

import Error from '@components/Error'
import menu, { asynchronousComponents } from './menu'
import Header from './Header'
import Sider from './Sider'
import Footer from './Footer'

function PrimaryLayout() {

  console.log('render Layout')

  return (
    <Fragment>
      <Sider />
      <Layout css={{ marginTop: 40 }}>
        <Header />
        <Layout.Content
          css={{
            '& > *': {
              display: 'flex',
              width: '100%',
              flex: 1
              // overflowY: 'auto',
            }
          }}
        >
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
        </Layout.Content>
        <Footer />
      </Layout>
      <BackTop />
    </Fragment>
  )
}

export default observer(PrimaryLayout)
