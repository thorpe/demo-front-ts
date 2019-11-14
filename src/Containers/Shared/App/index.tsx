/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core'
import 'antd-mobile/dist/antd-mobile.css'
import Loadable from 'react-loadable'

import { HashRouter, Router, Switch, Route } from 'react-router-dom'
import { createHashHistory } from 'history'
import { syncHistoryWithStore } from 'mobx-react-router'
import { ThemeProvider } from 'emotion-theming'


import * as store from '@store/index'
import PageLoading from '@components/Loading'
import Error from '@components/Error'
import { Theme } from '@themes/theme'
import DarkTheme from '@themes/dark.theme'

import IntlWrapper from './IntlWrapper'
import Provider from './Provider'

const hashHistory = createHashHistory()
const history = syncHistoryWithStore(hashHistory, store.routerStore)

const PrimaryLayout = Loadable({
  loader: () => import('@views/Layout'),
  loading: PageLoading,
})

const Login = Loadable({
  loader: () => import( '@views/Login'),
  loading: PageLoading,
})

const Popup2 = Loadable({
  loader: () => import( '@views/Popup2'),
  loading: PageLoading,
})


const GlobalStyle = (theme: Theme) => css`
  /* font 설정 */
  * {
    font-family: 'Roboto', 'Noto Sans CJK KR', 'Malgun Gothic', '맑은 고딕', 'Apple SD Gothic Neo', '돋움', dotum, sans-serif !important;
    user-select: none;
  }
  
  
  html {
    font-size: 10px;
  }
  body {
    font-size: 1rem;
    font-weight: 600;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    z-index: -1;
    width: 100%;
  }
  input,
  label,

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${theme.color.themeTxt};
  }
  p,
  span,
  div,
  a {
    margin-bottom: 0;
    font-size: 12px;
    color: ${theme.color.themeTxt};
  }
  a {
    &:hover {
      color: ${theme.color.primary};
    }
  }
  p {
    display: inline-block;
  }
  ul,
  ol,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  svg,
  svg path {
    fill: currentcolor;
  }
  
  #app {
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
  
`

function App() {

  console.log('2')

  return (
    <ThemeProvider theme={DarkTheme}>
      <Provider>
        <Global styles={GlobalStyle} />
        <IntlWrapper>
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
        </IntlWrapper>
      </Provider>
    </ThemeProvider>
  )
}

export default App
